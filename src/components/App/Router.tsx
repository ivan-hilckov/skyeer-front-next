import React from 'react'
import { useRoutes } from 'hookrouter'
import Private from 'components/App/Private'
import Public from 'components/App/Public'
import PATHS from 'constants/paths'
import Projects from 'pages/Projects'
import Project from 'pages/Project'
import Signin from 'pages/Signin'
import NotFound from 'pages/NotFound'

type Props = {
  isAuthorized: boolean
}

const routes = {
  [PATHS.projects]: () => (props: Props) => <Private page={Projects} {...props} />,
  [PATHS.project]: () => (props: Props) => <Private page={Project} {...props} />,
  [PATHS.signin]: () => (props: Props) => <Public page={Signin} {...props} />,
}

const Router: React.FC<Props> = React.memo(props => {
  const match = useRoutes(routes)
  return match ? match(props) : <NotFound />
})

Router.displayName = 'Router'

export default Router
