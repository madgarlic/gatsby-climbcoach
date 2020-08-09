// ./src/pages/index.js
import React from "react"
import { Router } from '@reach/router';
import SiteNavigation from "../components/sitenavigation"
import App from "./app"

const LazyComponent = ({ Component, ...props }) => (
  <React.Suspense fallback={'<p>Loading...</p>'}>
    <Component {...props} />
  </React.Suspense>
)

const IndexPage = () => {
  
  return (
    <>
    <SiteNavigation/>
    <Router>
      <LazyComponent Component={App} path="/app" />
    </Router>
    </>
  )
}
export default IndexPage