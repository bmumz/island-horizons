import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.navigation}>
        <Navbar />
      </div>

      <div className={layoutStyles.content}>
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
