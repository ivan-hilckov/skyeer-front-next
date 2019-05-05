import { hot } from 'react-hot-loader/root'

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'components/Loader/Loader'
import Router from 'components/App/Router'
import STATE from 'constants/state'

import { State } from 'store/rootReducers'
import { AppActions } from 'store/reducers/app'
import { AppSelectors } from 'store/selectors/app'

const App: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const checkAuth = useCallback(() => dispatch(AppActions.checkAuth()), [dispatch])
  const { checkState, isAuthorized } = useSelector((state: State) => {
    const selectors = new AppSelectors(state)
    return selectors.getApp()
  })

  useEffect(() => {
    if (STATE.SUCCESS !== checkState) {
      checkAuth()
    }
  }, [checkAuth, checkState])

  return checkState !== STATE.SUCCESS ? <Loader /> : <Router isAuthorized={isAuthorized} />
})

App.displayName = 'App'

export default hot(App)
