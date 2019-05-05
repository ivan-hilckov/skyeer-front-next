import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'store/rootReducer'
import rootSaga from 'store/rootSaga'

declare let module: { hot: any }

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function
  }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('store/rootReducer', () => {
      store.replaceReducer(require('store/rootReducer').default)
    })
  }

  return store
}
