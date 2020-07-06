import React from "react"
import { Component } from "react"
import critterStyles from "./critters/critters.module.scss"
import Critters from "./critters/critters"
import Layout from "../components/layout"
import Head from "../components/head"

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
      <div className={critterStyles.parentContainer}>
        <Layout>
          <Head
            title="Sea Creatures Catching Guide"
            description="A complete guide to catching all the deep sea creatures in New Horizons!"
            keywords="Sea Creatures Guide, Animal Crossing diving, diving in Animal Crossing, Animal Crossing swimming,
             swimming in Animal Crossing, sea creatures Animal Crossing, 
             Wave 1 update, Wave 1 update Animal Crossing, Summer update Animal Crossing,
              wetsuit Animal Crossing, Sea Creatures New Horizons, 
              Sea Creature prices, deep sea creatures Animal Crossing, 
              Animal Crossing Sea Creatures price, Animal Crossing Pascal, 
              Sea Creatures Complete List, How to find and catch sea creatures
          "
          />
          <p className={critterStyles.title}>Sea Creatures Catching Guide</p>

          <Critters
            critters={items}
            location="Deep Sea (Diving)"
            shadow="Shadow:"
            shadowSize="shadow"
          />
        </Layout>
      </div>
    )
  }
}

export default SeaCreatures
