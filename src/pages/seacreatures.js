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
          <Head title="Sea Creatures Guide" />
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
