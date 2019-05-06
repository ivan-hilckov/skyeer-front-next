import React from 'react'
import { useTranslation } from 'react-i18next'
import AuthLayout from 'components/Layout/AuthLayout/AuthLayout'

const Signin: React.FC = React.memo(() => {
  const { t } = useTranslation()

  return <AuthLayout>{t('signin.title')}</AuthLayout>
})

Signin.displayName = 'Signin'

export default Signin
