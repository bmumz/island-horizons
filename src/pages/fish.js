import React from "react"
import { Component } from "react"
// import { Link } from "gatsby"
import apiStyles from "./api.module.scss"
import Critters from "./critters"
import Layout from "../components/layout"

class Fish extends Component {
  constructor() {
    super()
    this.state = { items: [] }
  }
  componentDidMount() {
    fetch("http://acnhapi.com/v1/fish/")
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
          <Critters critters={items} seller="price-cj" sellerName="CJ" />
        </Layout>
      </div>
    )
  }
}

export default Fish

// filter by: Location, shadow size
// toggle for north/south hemisphere
// if statement for availability
