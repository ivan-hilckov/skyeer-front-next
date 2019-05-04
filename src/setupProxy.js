require('../config/env')
const proxy = require('http-proxy-middleware')

const TARGET = process.env.REACT_APP_TARGET || 'https://map.test1.skyeermap.com/'
const AUTH = process.env.REACT_APP_AUTH || 'zeppa:Reafqrf_1'

const options = {
  auth: AUTH,
  target: TARGET,
  changeOrigin: true,
  secure: false,
}

module.exports = function(app) {
  app.use(
    proxy(
      [
        '/api',
        '/rasters',
        '/storage',
        '/geoserver',
        '/quad_secret_admin_zone',
        '/api-flower',
        '/potree-flower',
        '/measure',
        '/rabbitmq',
        '/assets',
      ],
      options
    )
  )
}
