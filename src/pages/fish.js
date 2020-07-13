import React from "react"
import { Component } from "react"
import critterStyles from "./critters/critters.module.scss"
import Critters from "./critters/critters"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"

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
          <Head
            title="Animal Crossing: New Horizons Fish Catching Guide"
            description="A guide to catching all available fish in New Horizons⁠— complete with prices!"
            keywords="fish catching guide, animal crossing new horizons fish, animal crossing new horizons fish list, 
            animal crossing new horizons fish prices, animal crossing new horizons fish guide, 
            animal crossing new horizons fish price list, animal crossing new horizons fish july,
            animal crossing fish prices, animal crossing fish, animal crossing fishing guide,
            animal crossing fish list, animal crossing fishing rod, acnh fishing guide, 
            acnh fish, acnh fish prices, acnh bugs and fish, acnh fish price list, new horizons fish price,
            new horizons fish guide, new horizons fish price list, new horizons fish sizes, new horizons fishing,
            fish price animal crossing, fish prices new horizons, fish price list new horizons, fish prices acnh,
            fish price, fish price guide new horizons, fish prices animal crossing new horizons, cj animal crossing,
            cj fish animal crossing, cj fish prices, cj fishing challenge, cj fish prices new horizons,
            how much do fish sell for in animal crossing new horizons, how much do fish sell to cj,
            how much do fish sell for acnh, how much do fish sell in animal crossing, how much do fish sell for in new horizons,
         "
          >
            <link rel="canonical" href="https://www.islandhorizons.com"></link>
          </Head>
          <Critters
            critters={items}
            seller="price-cj"
            price="Bells"
            sellerName="CJ:"
            shadow="Shadow:"
            shadowSize="shadow"
            type="fish"
            amount="80"
            link1=<Link to="/bugs">Bug Catching Guide</Link>
            link2=<Link to="/seacreatures">Sea Creature Catching Guide</Link>
          />
        </Layout>
      </div>
    )
  }
}

export default Fish
