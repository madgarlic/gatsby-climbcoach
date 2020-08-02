// ./src/pages/index.js
import React from "react"
import Layout from "../components/layout"
import App from "../components/app"
import T4CAssessment from "../components/t4cassessment"
import { isAuthenticated } from "../utils/auth"
import { Router} from '@reach/router'
const Home = () => {
  
  return (
    <Layout>
      { !isAuthenticated() && <p>Ciao climber!</p>}
      { isAuthenticated() && <App/>}
      <Router>
        <T4CAssessment path="/app/t4cassessment" />
      </Router>
    </Layout>
  )
}
export default Home