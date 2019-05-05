import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'
import LANGUAGES from 'constants/languages'
import { REACT_APP_I18N_DEBUG } from 'constants/env'
import format from 'utils/format'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: REACT_APP_I18N_DEBUG,
    lng: LANGUAGES.RU,
    fallbackLng: LANGUAGES.RU,
    whitelist: [LANGUAGES.EN, LANGUAGES.RU],
    interpolation: {
      format,
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
  })

export default i18n
