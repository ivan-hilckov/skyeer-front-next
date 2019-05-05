import React from 'react'
import { navigate } from 'hookrouter'
import PATH from 'constants/path'

type Props = {
  isAuthorized: boolean
  page: React.FC
}

const Public: React.FC<Props> = React.memo(({ isAuthorized, page: Page }) => {
  if (isAuthorized) {
    navigate(PATH.projects, false)
    return null
  }

  return <Page />
})

Public.displayName = 'Public'

export default Public
