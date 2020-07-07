import React from "react"
import { Component } from "react"
import critterStyles from "./critters/critters.module.scss"
import { Link } from "gatsby"
import Critters from "./critters/critters"
import Layout from "../components/layout"
import Head from "../components/head"

class Bugs extends Component {
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
      <div className={critterStyles.parentContainer}>
        <Layout>
          <Head
            title="Bug Catching Guide"
            description="A complete guide to catching all available bugs in New Horizons!"
            keywords="Animal Crossing Bug Guide, Animal Crossing Bug Prices,
            bug prices new horizons, bug prices animal crossing, ACNH bug prices,
            bug catching guide, northern hemisphere bug prices, southern hemisphere bug prices,
            Complete List of bugs Animal Crossing, how to catch bugs in Animal Crossing,"
          />

          <Critters
            critters={items}
            seller="price-flick"
            price="Bells"
            sellerName="Flick:"
            type="bugs"
            amount="80"
            link1=<Link to="/fish">Fish Catching Guide</Link>
            link2=<Link to="/seacreatures">Sea Creature Catching Guide</Link>
          />
        </Layout>
      </div>
    )
  }
}

export default Bugs
