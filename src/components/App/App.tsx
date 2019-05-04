import { hot } from 'react-hot-loader/root'

import React from 'react'
import { useDispatch } from 'react-redux'
import { AppActions } from 'store/reducers/app'
import Loader from 'components/Loader/Loader'
import style from './App.module.css'

const App: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const checkAuth = React.useCallback(() => dispatch(AppActions.checkAuth()), [dispatch])

  checkAuth()

  return (
    <div className={style.app}>
      <React.Suspense fallback={<Loader />}>
        <Loader />
      </React.Suspense>
    </div>
  )
})

App.displayName = 'Memo(App)'

export default hot(App)
