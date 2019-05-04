import React from 'react'
import style from './Loader.module.css'

const Loader: React.FC = React.memo(() => (
  <div className={style.loader}>
    <div className={style.first} />
    <div className={style.second} />
  </div>
))

Loader.displayName = 'Memo(Loader)'

export default Loader
