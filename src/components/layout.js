import React from "react"
import Header from "./Header"
import Footer from "./footer"

const Layout = props => {
  return (
    <div className="layout">
      <div className="">
        <Header />
      </div>

      <div className="layout__blogContent">
        {props.children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
