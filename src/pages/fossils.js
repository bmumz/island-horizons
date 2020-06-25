import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import critterStyles from "./critters/critters.module.scss"
import fossilStyles from "./fossils.module.scss"

export default class Fossils extends Component {
  constructor() {
    super()
    this.state = { items: [] }
  }

  componentDidMount() {
    fetch("https://acnhapi.com/v1/fossils/")
      .then(response => response.json())
      .then(results => {
        const items = Object.values(results)
        this.setState({ items })
      })
  }

  render() {
    let items = this.state.items || []

    return (
      <div className={critterStyles.body}>
        <Layout>
          <Head title="Fossils Guide" />
          <p className={critterStyles.title}>Fossils Guide</p>
          <div className={fossilStyles.fossilContainer}>
            <div className={fossilStyles.fossilBox}>
              {items &&
                items.map((item, index) => (
                  <div key={index} className={fossilStyles.fossilCard}>
                    <div className={critterStyles.critterProfile}>
                      <div className={critterStyles.critterName}>
                        <span className={critterStyles.nameHighlight}>
                          {item.name["name-USen"]}
                        </span>
                      </div>
                      <img src={item.image_uri} alt={item.name["name-USen"]} />
                    </div>
                    <div className="price">
                      <b>Sells for: </b>
                      {item.price} Bells
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}
