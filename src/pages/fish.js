import React from "react"
import { Component } from "react"
// import { Link } from "gatsby"
import apiStyles from "./api.module.scss"
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
        console.log(results)
        this.setState({ items })
      })
  }
  render() {
    let items = this.state.items || []
    return (
      <div className={apiStyles.parentContainer}>
        <Layout>
          {items.map((item, index) => (
            <div key={index} className={apiStyles.critterContainer}>
              <div className={apiStyles.critter}>
                <h4 className={apiStyles.title}>{item.name["name-USen"]}</h4>
                <img
                  className={apiStyles.image}
                  src={item.icon_uri}
                  alt={item.name["name-USen"]}
                />
                <div className={apiStyles.prices}>
                  <b>Nook's Cranny: </b>
                  {item.price} Bells
                  <b> CJ: </b>
                  {item["price-cj"]} Bells
                </div>
              </div>
            </div>
          ))}
        </Layout>
      </div>
    )
  }
}

export default Fish
