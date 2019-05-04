import { hot } from 'react-hot-loader/root'
import React from 'react'
import logo from 'images/logo.svg'
import style from './App.module.css'

const App: React.FC = () => {
  return (
    <div className={style.app}>
      <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className={style.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default hot(App)
