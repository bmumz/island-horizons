import React from "react"
import { Component } from "react"
import critterStyles from "./critters/critters.module.scss"
import Critters from "./critters/critters"
import Layout from "../components/layout"
import Head from "../components/head"

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
            title="Fish Catching Guide"
            description="A complete guide to catching all available fish in New Horizons!"
            keywords="Animal Crossing Fish Guide, Animal Crossing Fish Prices,
            fish prices new horizons, fish prices animal crossing, ACNH Fish prices,
            fish catching guide, northern hemisphere fish prices, southern hemisphere fish prices,
            Complete List of fish Animal Crossing, how to fish in Animal Crossing,
            
            "
          />
          <p className={critterStyles.title}>Fish Catching Guide</p>
          {/* <p className={critterStyles.description}>
            {" "}
        
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Adipiscing enim eu turpis egestas. Diam volutpat commodo sed
              egestas egestas fringilla phasellus. Et netus et malesuada fames
              ac turpis egestas integer eget. Facilisis leo vel fringilla est
              ullamcorper eget nulla. Blandit libero volutpat sed cras ornare
              arcu dui vivamus. Tempor orci eu lobortis elementum nibh tellus
              molestie nunc.
           
          </p> */}
          <Critters
            critters={items}
            seller="price-cj"
            price="Bells"
            sellerName="CJ:"
            shadow="Shadow:"
            shadowSize="shadow"
          />
        </Layout>
      </div>
    )
  }
}

export default Fish
