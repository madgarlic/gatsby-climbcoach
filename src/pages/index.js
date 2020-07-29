// ./src/pages/index.js
import React from "react"
import Layout from "../components/layout"
import {Button} from 'react-bootstrap'
import {getProfile, login, isAuthenticated } from "../utils/auth"

const Home = () => {
  const user = getProfile()

  const doLogin = (e) => {
    login()
    e.preventDefault()
  }

  const items = []
  for (var i = 1; i<3; i++) {
    items.push(<p>Hello {user.name ? user.name : "climber"}!</p>)
  }
  return (
    <Layout>
      { !isAuthenticated() && <Button variant="primary" onClick={doLogin}>Login</Button>}
      { isAuthenticated() && items }
    </Layout>
  )
}
export default Home