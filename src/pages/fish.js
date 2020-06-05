import React from "react"
import { Component } from "react"
// import { Link } from "gatsby"
import critterStyles from "./critters/critters.module.scss"
import Critters from "./critters/critters"
import Layout from "../components/layout"

class Fish extends Component {
  constructor() {
    super()
    this.state = { items: [] }
  }
  componentDidMount() {
    fetch("https://acnhapi.com/v1/fish/")
      .then(response => response.json())
      .then(results => {
        const items = Object.values(results)
        this.setState({ items })
      })
  }

  render() {
    let items = this.state.items || []
    return (
      <div className={critterStyles.parentContainer}>
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
