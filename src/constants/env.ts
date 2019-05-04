declare global {
  interface Window {
    REACT_APP_BASEMAP_TOKEN: string
    REACT_APP_SENTRY_DSN: string
    REACT_APP_GOOGLE_ANALYTICS: string
  }
}

export const DEVELOPMENT = process.env.NODE_ENV === 'development'
export const PRODUCTION = process.env.NODE_ENV === 'production'

export const REACT_APP_TARGET = process.env.REACT_APP_TARGET || ''
export const REACT_APP_I18N_DEBUG = DEVELOPMENT && process.env.REACT_APP_I18N_DEBUG === 'true'
export const REACT_APP_SENTRY_DSN = PRODUCTION && window['REACT_APP_SENTRY_DSN']
export const REACT_APP_GOOGLE_ANALYTICS = PRODUCTION && window['REACT_APP_GOOGLE_ANALYTICS']
export const REACT_APP_BASEMAP_TOKEN = process.env.REACT_APP_BASEMAP_TOKEN || window['REACT_APP_BASEMAP_TOKEN']
