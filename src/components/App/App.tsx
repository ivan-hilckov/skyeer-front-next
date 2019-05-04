import { hot } from 'react-hot-loader/root'

import React, { useCallback } from 'react'
import { useRoutes, A } from 'hookrouter'

import { useDispatch } from 'react-redux'

import PATH from 'constants/path'
import Projects from 'pages/Projects'
import Project from 'pages/Project'
import Signin from 'pages/Signin'
import NotFound from 'pages/NotFound'

import { AppActions } from 'store/reducers/app'

import style from './App.module.css'

const routes = {
  [PATH.projects]: () => <Projects />,
  [PATH.project]: ({ projectId }: { projectId: string }) => <Project projectId={projectId} />,
  [PATH.signin]: () => <Signin />,
}

// const isAuth = true

const Header: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const checkAuth = useCallback(() => dispatch(AppActions.checkAuth()), [dispatch])

  checkAuth()

  return (
    <header className={style.header}>
      <A href="/" className={style.link}>
        Projects
      </A>
      <A href="/project/3" className={style.link}>
        Project
      </A>
      <A href="/signin" className={style.link}>
        Signin
      </A>
      <A href="/bolt" className={style.link}>
        Not Found
      </A>
    </header>
  )
})

Header.displayName = 'Memo(Header)'

const App: React.FC = React.memo(() => {
  const match = useRoutes(routes)

  return (
    <div className={style.app}>
      <Header />
      {match || <NotFound />}
    </div>
  )
})

App.displayName = 'Memo(App)'

export default hot(App)
