import 'react-hot-loader'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'style/index.css'

import App from 'components/App/App'
import { configureStore } from 'store/configureStore'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
