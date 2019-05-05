import React from 'react'
import { useTranslation } from 'react-i18next'

const Signin: React.FC = React.memo(() => {
  const { t } = useTranslation()

  return <div>{t('signin.title')}</div>
})

Signin.displayName = 'Signin'

export default Signin
