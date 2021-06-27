import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import './HomePage.scss'

const HomePage: React.FC<HomePageProps> = (props) => {
  const { pathname: url } = props.history.location
  const [name] = React.useState(url.substring(1, url.length).replace('/', ''))
  return <div className="HomePage">{name} Component</div>
}

interface HomePageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

export default HomePage
