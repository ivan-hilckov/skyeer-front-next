import 'react-hot-loader'

import React from 'react'
import ReactDOM from 'react-dom'
import 'styles/index.css'
import { Provider } from 'react-redux'
import FontFaceObserver from 'fontfaceobserver'
import App from 'components/App/App'
import { configureStore } from 'store/configureStore'
import * as serviceWorker from './serviceWorker'

const robotoObserver = new FontFaceObserver('Roboto', {})

robotoObserver.load().then(() => {
  document.body.classList.add('font-loaded')
})

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
