import React from "react"
import { handleAuthentication } from "../utils/auth"
import { ProgressBar } from "react-bootstrap"
const Callback = () => {
  handleAuthentication()

  return (
    <>
      <p>Attendi, stiamo controllando il viello di rombo...</p>
      <ProgressBar animated now={100} />
    </>
    )
}

export default Callback