import React from 'react'
import { navigate } from 'hookrouter'
import PATHS from 'constants/paths'

type Props = {
  isAuthorized: boolean
  page: React.FC
}

const Public: React.FC<Props> = React.memo(({ isAuthorized, page: Page }) => {
  if (isAuthorized) {
    navigate(PATHS.projects, false)
    return null
  }

  return <Page />
})

Public.displayName = 'Public'

export default Public
