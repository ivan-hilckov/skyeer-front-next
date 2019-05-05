import 'react-hot-loader'

import React from 'react'
import ReactDOM from 'react-dom'

import 'styles/index.css'
import './i18n'

import { Provider } from 'react-redux'
import FontFaceObserver from 'fontfaceobserver'
import App from 'components/App/App'
import Loader from 'components/Loader/Loader'
import { configureStore } from 'store/configureStore'
import * as serviceWorker from './serviceWorker'

const font = new FontFaceObserver('Roboto', {}).load()
font.then(() => document.body.classList.add('font-loaded'))

const store = configureStore()

ReactDOM.render(
  <React.Suspense fallback={<Loader />}>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>,
  document.getElementById('root')
)

serviceWorker.unregister()
