import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Fish = () => {
  return (
    <Layout>
      <h1>Critters</h1>
      <p>
        About Island Living here.
        <Link to="/contact">Contact</Link>
      </p>
    </Layout>
  )
}

export default Fish
