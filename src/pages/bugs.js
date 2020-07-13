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
            title="Animal Crossing: New Horizons Bug Catching Guide"
            description="A guide to catching all available bugs in New Horizons⁠— complete with prices!"
            keywords="bug catching guide, animal crossing new horizons bug prices, animal crossing new horizons bugs,
            animal crossing new horizons bug guide, animal crossing new horizons bug price list, 
            animal crossing new horizons bugs and fish, animal crossing new horizons bug and fish guide,
            animal crossing new horizons bug buyer, animal crossing bug prices, animal crossing bugs, animal crossing bug guide,
            animal crossing bug list, animal crossing bugs and fish, animal crossing bug guy, animal crossing bug buyer,
            acnh bug prices, giant water bug acnh, acnh giant water bug price, acnh giant water bug price, acnh water bug,
            acnh water bug price, acnh bug guide, acnh fish and bug guide, new horizons bugs, new horizons bug prices,
            new horizons bug guide, new horizons bug price list, new horizons bugs and fish, bugs animal crossing,
            bug prices animal crossing, bug prices new horizons, bug prices animal crossing new horizons, bug prices acnh, bug prices, bug price list animal crossing,
            bug prices flick animal crossing, bug prices flick,
            how much do bugs sell for in animal crossing, how much do bugs sell for in animal crossing new horizons, how much do bugs sell for, 
            how much do bugs sell for acnh, how much do bugs sell for flick, flick animal crossing, flick animal crossing new horizons,
            flick acnh, flick bug prices
            "
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
