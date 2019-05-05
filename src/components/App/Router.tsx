import React from 'react'
import { useRoutes } from 'hookrouter'
import Private from 'components/App/Private'
import Public from 'components/App/Public'
import PATH from 'constants/path'
import Projects from 'pages/Projects'
import Project from 'pages/Project'
import Signin from 'pages/Signin'
import NotFound from 'pages/NotFound'

type Props = {
  isAuthorized: boolean
}

const routes = {
  [PATH.projects]: () => (props: Props) => <Private page={Projects} {...props} />,
  [PATH.project]: () => (props: Props) => <Private page={Project} {...props} />,
  [PATH.signin]: () => (props: Props) => <Public page={Signin} {...props} />,
}

const Router: React.FC<Props> = React.memo(props => {
  const match = useRoutes(routes)
  return match ? match(props) : <NotFound />
})

Router.displayName = 'Router'

export default Router
