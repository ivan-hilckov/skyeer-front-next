import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer } from './rootReducers'
import rootSaga from './rootSagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function
  }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 })
    : compose

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(rootSaga)

  return store
}
