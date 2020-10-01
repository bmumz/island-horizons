import React from "react"
import { Component } from "react"
import Critters from "./critters/critters"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

class SeaCreatures extends Component {
  constructor() {
    super()
    this.state = { items: [] }
  }
  componentDidMount() {
    fetch("https://acnhapi.com/v1/sea/")
      .then(response => response.json())
      .then(results => {
        const items = Object.values(results)
        this.setState({ items })
      })
  }

  render() {
    let items = this.state.items || []

    return (
      <div>
        <Layout>
          <SEO
            title="Animal Crossing: New Horizons Sea Creatures Guide"
            description="A complete guide to catching all the deep sea creatures in New Horizons!"
            keywords="sea creatures animal crossing july, sea creatures names, sea creatures list, sea creatures animal crossing new horizons price,
            sea creatures animal crossing wiki, sea creatures animal crossing new horizons southern hemisphere,
            sea creatures animal crossing new horizons price, sea creatures animal crossing new horizons july,
            sea creatures animal crossing times, sea creatures acnh, sea creatures acnh northern hemisphere,
            sea creatures acnh southern hemisphere, sea creatures acnh cj, sea creatures acnh price list, sea creatures new horizons,
            sea creatures new horizons july, sea creatures new horizons price, sea creatures new horizons guide, deep sea creatures new horizons,
            new horizons sea creature list, new horizons sea creatures guide, new horizons sea creatures price list,
            new horizons sea creature list july, new horizons sea creature, new horizons sea creatures southern hemisphere,
            new horizons sea creatures cj, new horizons sea creature too fast, new horizons sea creatures northern hemisphere,
            animal crossing new horizons sea creatures, animal crossing new horizons sea creatures museum, animal crossing new horizons sea creatures price,
            animal crossing new horizons sea creatures july, animal crossing new horizons sea creatures july list, animal crossing new horizons sea creatures cj,
            animal crossing new horizons sea creatures by month, animal crossing sea creatures july, animal crossing sea creatures prices, animal crossing sea creatures northern hemisphere,
            animal crossing sea creatures southern, animal crossing sea creatures list, animal crossing sea creatures available now,
            acnh sea creatures, acnh sea creatures guide, acnh sea creatures checklist, acnh sea creatures value, acnh sea creatures july,
            acnh sea creatures list july, acnh sea creatures northern, acnh sea creatures prices, how much do sea creatures sell for animal crossing,
            how much do sea creatures sell for acnh, how much do sea creatures sell for
          "
          >
            <link rel="canonical" href="https://www.islandhorizons.com"></link>
          </SEO>

          <Critters
            critters={items}
            location="Deep Sea (Diving)"
            shadow="Shadow:"
            shadowSize="shadow"
            speed="Speed:"
            speedVelocity="speed"
            type="sea creatures"
            amount="40"
            link1={<Link to="/fish">Fish Catching Guide</Link>}
            link2={<Link to="/bugs">Bug Catching Guide</Link>}
          />
        </Layout>
      </div>
    )
  }
}

export default SeaCreatures
