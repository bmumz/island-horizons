import React from "react"
import { Component } from "react"
import apiStyles from "./api.module.scss"
// import { Link } from "gatsby"
import Critters from "./critters"
import Layout from "../components/layout"

class Insects extends Component {
  constructor() {
    super()
    this.state = { items: [] }
  }
  componentDidMount() {
    fetch("https://acnhapi.com/v1/bugs/")
      .then(response => response.json())
      .then(results => {
        const items = Object.values(results)
        this.setState({ items })
      })
  }
  render() {
    let items = this.state.items || []
    return (
      <div className={apiStyles.parentContainer}>
        <Layout>
          <Critters critters={items} seller="price-flick" sellerName="Flick" />
        </Layout>
      </div>
    )
  }
}

export default Insects
