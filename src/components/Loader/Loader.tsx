import React from 'react'
import style from './Loader.module.css'

const Loader: React.FC = React.memo(() => (
  <div className={style.wrapper}>
    <div className={style.loader} />
  </div>
))

Loader.displayName = 'Loader'

export default Loader
