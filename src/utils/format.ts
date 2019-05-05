import { format as dateFnsFormat, formatDistanceStrict, parseISO, Locale } from 'date-fns'
import { enUS as en, ru } from 'date-fns/locale'
import LANGUAGES from 'constants/languages'

enum FORMATS {
  DAY = 'dd iiiiii',
  SHORT = 'dd.MM.yyyy',
  SHORT_WITH_TIME = 'dd.MM.yyyy HH:mm',
  TIME = 'HH:mm',
  LONG = 'd MMMM yyyy',
  LONG_WITH_TIME = 'd MMMM yyyy HH:mm',
  LONG_WITH_WEEK_DAY = 'EEEEEE, d MMMM yyyy',
  FULL = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
  MONTH = 'LLLL',
  MONTH_WITH_YEAR = 'MMMM YYYY',
}

const LOCALES: { [index: string]: Locale } = {
  [LANGUAGES.RU]: ru,
  [LANGUAGES.EN]: en,
}

const formatDate = (format: FORMATS) => (date: Date, locale: Locale): string => {
  return dateFnsFormat(date, format, { locale, awareOfUnicodeTokens: true })
}

const formatDateDistance = (addSuffix: boolean) => (date: Date, locale: Locale): string => {
  return formatDistanceStrict(date, new Date(), { addSuffix, locale })
}

const METHODS: { [index: string]: (date: Date, locale: Locale) => string } = {
  dateDay: formatDate(FORMATS.DAY),
  dateShort: formatDate(FORMATS.SHORT),
  dateShortWithTime: formatDate(FORMATS.SHORT_WITH_TIME),
  dateTime: formatDate(FORMATS.TIME),
  dateLong: formatDate(FORMATS.LONG),
  dateLongWithTime: formatDate(FORMATS.LONG_WITH_TIME),
  dateLongWithWeekDay: formatDate(FORMATS.LONG_WITH_WEEK_DAY),
  dateFull: formatDate(FORMATS.FULL),
  dateMonth: formatDate(FORMATS.MONTH),
  dateMonthWithYear: formatDate(FORMATS.MONTH_WITH_YEAR),
  dateTimePassed: formatDateDistance(false),
  dateTimePassedWithSuffix: formatDateDistance(true),
}

const formatValue = (value: any, method?: string, lang?: string): string => {
  if (value === '') {
    throw new Error(`Invalid value in i18n format ${value}`)
  }

  if (!method || !(method in METHODS)) {
    throw new Error(`Invalid method in i18n format ${method}`)
  }

  if (!lang || !(lang in LANGUAGES)) {
    throw new Error(`Invalid lang in i18n format ${lang}`)
  }

  const formatMethod = METHODS[method]
  const locale = LOCALES[lang]
  const data = parseISO(value)

  return formatMethod(data, locale)
}

export default (value: any, method: string = '', lang: string = '') => {
  try {
    return formatValue(value, method, lang)
  } catch (error) {
    console.log(error)
    return value
  }
}
