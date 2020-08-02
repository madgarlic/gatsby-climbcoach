// ./src/pages/index.js
import React from "react"
import { getProfile } from "../utils/auth"

const Home = () => {
  
  const user = getProfile()
  
  return (
    <p>Ciao {user.name}!!</p>
  )
}
export default Home