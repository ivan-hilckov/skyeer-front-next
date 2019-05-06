import React from 'react'
import styles from './AuthLayout.module.css'

const AuthLayout: React.FC = React.memo(({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>{children}</div>
    </div>
  )
})

AuthLayout.displayName = 'AuthLayout'

export default AuthLayout
