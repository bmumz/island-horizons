import React from "react"
import { Component } from "react"
import apiStyles from "./api.module.scss"
// import { Link } from "gatsby"
import Layout from "../components/layout"

class Insects extends Component {
  constructor() {
    super()
    this.state = { items: [] }
  }
  componentDidMount() {
    fetch("http://acnhapi.com/v1/bugs/")
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
                <p className={apiStyles.prices}>
                  <b>Nook's Cranny: </b>
                  {item.price} Bells
                  <b> Flick: </b>
                  {item["price-flick"]} Bells
                </p>
              </div>
            </div>
          ))}
        </Layout>
      </div>
    )
  }
}

export default Insects
