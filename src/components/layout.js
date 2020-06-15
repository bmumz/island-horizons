import React from "react"

import Image from "./image"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Image />
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
