// ./src/pages/index.js
import React from "react"
import { getProfile } from "../utils/auth"
import { Router } from '@reach/router'
import T4CAssessment from "../components/t4cassessment"
import T4CAssessmentList from "../components/t4cassessmentlist"
import Navigation from "../components/navigation"

const App = () => {
  
  const user = getProfile()
  
  return (
    <>
        <Navigation></Navigation>
        <p>Ciao {user.name}!!</p>
        <Router>
            <T4CAssessment path="/app/t4cassessment/:assesment_id" />
            <T4CAssessmentList path="/app/t4cassessmentlist" />
        </Router>        
    </>
  )
}
export default App