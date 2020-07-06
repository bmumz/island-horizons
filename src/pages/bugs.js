import React from "react"
import { Component } from "react"
import critterStyles from "./critters/critters.module.scss"
// import { Link } from "gatsby"
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
          <Head title="Bugs Guide" />
          <p className={critterStyles.title}>Bug Catching Guide</p>
          {/* <p className={critterStyles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Adipiscing enim eu turpis egestas. Diam volutpat commodo sed egestas
            egestas fringilla phasellus. Et netus et malesuada fames ac turpis
            egestas integer eget. Facilisis leo vel fringilla est ullamcorper
            eget nulla. Blandit libero volutpat sed cras ornare arcu dui
            vivamus. Tempor orci eu lobortis elementum nibh tellus molestie
            nunc.
          </p> */}
          <Critters
            critters={items}
            seller="price-flick"
            price="Bells"
            sellerName="Flick:"
          />
        </Layout>
      </div>
    )
  }
}

export default Bugs
