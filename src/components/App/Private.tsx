import React from 'react'
import { usePath, navigate } from 'hookrouter'
import PATH from 'constants/path'

type Props = {
  isAuthorized: boolean
  page: React.FC
}

const Private: React.FC<Props> = React.memo(({ isAuthorized, page: Page }) => {
  const currentPath = usePath(false)

  if (!isAuthorized) {
    navigate(PATH.signin, false, { returnTo: currentPath })
    return null
  }

  return <Page />
})

Private.displayName = 'Private'

export default Private
