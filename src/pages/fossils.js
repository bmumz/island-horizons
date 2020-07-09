import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import fossilStyles from "./fossils.module.scss"

export default class Fossils extends Component {
  constructor() {
    super()
    this.state = { items: [], search: "", isSort: false }
  }

  onSort = event => {
    this.setState({ isSort: event.target.checked })
  }

  onSearch = event => {
    this.setState({ search: event.target.value })
  }

  componentDidMount() {
    fetch("https://acnhapi.com/v1/fossils/")
      .then(response => response.json())
      .then(results => {
        const items = Object.values(results)
        this.setState({ items })
      })
  }

  getName = item => item.name["name-USen"]

  render() {
    let items = this.state.items || []
    let search = this.state.search

    if (search.length > 0) {
      items = items.filter(
        item =>
          this.getName(item).toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    }

    if (this.state.isSort === true) {
      items.sort((a, b) => (a.price < b.price ? 1 : -1))
    } else {
      items.sort((a, b) => a.price - b.price)
    }

    return (
      <div className={fossilStyles.body}>
        <Layout>
          <Head
            title="Fossil Guide"
            description="A complete guide to all the fossils in New Horizons!"
            keywords="fossils animal crossing: new horizons, animal crossing fossils, fossils animal crossing, acnh fossils, fossil guide acnh, acnh fossil guide, finding fossils acnh, finding fossils animal crossing, how many fossils can i get per day acnh, digging up fossils acnh, digging up fossils animal crossing, should i donate my fossils acnh, fossil prices acnh, fossil prices animal crossing, fossil prices animal crossing: new horizons, fossil prices, fossil prices acnh"
          />
          <div className={fossilStyles.descriptionContainer}>
            <p className={fossilStyles.title}>Fossil Guide</p>
            <div className={fossilStyles.fossilDescription}>
              There are a total of{" "}
              <i>
                <b>73 fossils </b>{" "}
              </i>
              to collect in Animal Crossing: New Horizons! It is recommended you
              donate the fossils to Blathers at your island's museum, but, if
              you have duplicates, you are able to sell them for some quick
              Bells!
              {/* <div className={fossilStyles.diggingFossils}>
                <h4 className={fossilStyles.listItem}>
                  Step 1: Finding Fossils
                </h4>
                Each day, a total of{" "}
                <b>
                  <i>4 fossils</i>
                </b>{" "}
                will spawn on your island in the shape of a star. These can
                spawn anywhere on your island (in grass/dirt/snow, but never on
                a path).
                <img
                  src={"https://i.ibb.co/WnCCsD9/fossil-Outline.jpg"}
                  alt="Fossil Outline"
                  className={fossilStyles.fossilImg}
                />
                <h4 className={fossilStyles.listItem}>
                  Step 2: Digging Up Fossils
                </h4>
                Once you've found a fossil, get out your trusty shovel! Press 'Y' near the star shape. 
                <img
                  src={"https://i.ibb.co/yn30Vts/dug-Fossil.jpg"}
                  alt="Dig Up Fossils"
                  className={fossilStyles.fossilImg}
                />
                <h4 className={fossilStyles.listItem}>
                  Step 3: Donating Fossils to Blathers
                </h4>
                <img
                  src={"https://i.ibb.co/zP5LVWk/donate-Fossil.jpg"}
                  alt="Donate Fossils to Blathers"
                  className={fossilStyles.fossilImg}
                />
              </div> */}
            </div>
          </div>

          <div className={fossilStyles.navContainer}>
            <div className={fossilStyles.searchContainer}>
              <input
                type="text"
                value={this.state.search}
                onChange={this.onSearch}
                className={fossilStyles.searchBar}
                placeholder="Search Fossils"
                maxLength="25"
              />
            </div>
            <div className={fossilStyles.sortBox}>
              <input
                type="checkbox"
                value={this.state.isSort}
                onClick={this.onSort}
              />{" "}
              Sort by Price
            </div>
          </div>
          <div className={fossilStyles.fossilBox}>
            {items &&
              items.map((item, index) => (
                <div key={index} className={fossilStyles.fossilCard}>
                  <div className={fossilStyles.fossilProfile}>
                    <div className={fossilStyles.fossilName}>
                      <p>
                        <span className={fossilStyles.nameHighlight}>
                          {" "}
                          {item.name["name-USen"]}
                        </span>
                      </p>
                    </div>
                    <div className={fossilStyles.fossilImg}>
                      <img src={item.image_uri} alt={item.name["name-USen"]} />
                    </div>
                  </div>
                  <div className={fossilStyles.price}>
                    <b>Sells for: </b>
                    {item.price} Bells
                  </div>
                </div>
              ))}
          </div>
        </Layout>
      </div>
    )
  }
}
