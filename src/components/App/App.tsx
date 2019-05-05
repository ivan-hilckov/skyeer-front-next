import { hot } from 'react-hot-loader/root'

import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from 'components/Loader/Loader'
import Router from 'components/App/Router'
import PROGRESS_TYPES from 'constants/progressTypes'
import { State, Selectors } from 'store/rootState'
import { AppActions } from 'store/reducers/app'

const App: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const checkAuth = useCallback(() => dispatch(AppActions.checkAuth()), [dispatch])
  const { checkState, isAuthorized } = useSelector((state: State) => {
    const selectors = new Selectors(state)
    return selectors.getApp()
  })

  useEffect(() => {
    if (PROGRESS_TYPES.SUCCESS !== checkState) {
      checkAuth()
    }
  }, [checkAuth, checkState])

  return checkState !== PROGRESS_TYPES.SUCCESS ? <Loader /> : <Router isAuthorized={isAuthorized} />
})

App.displayName = 'App'

export default hot(App)
