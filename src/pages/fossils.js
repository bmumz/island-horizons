import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
// import critterStyles from "./critters/critters.module.scss"
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
          <Head title="Fossils Guide" />
          <div className={fossilStyles.descriptionContainer}>
            <p className={fossilStyles.title}>Fossils Guide</p>
            <p className={fossilStyles.fossilDescription}>
              There are a total of{" "}
              <b>
                {" "}
                <i> 73 fossils </i>
              </b>{" "}
              to collect in Animal Crossing: New Horizons! It is recommended you
              donate the fossils to Blathers at your island's museum, but, if
              you have duplicates, you are able to sell them for some quick
              Bells!
            </p>
            {/* <p className={fossilStyles.fossilDigging}>Step 1:</p> */}
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
