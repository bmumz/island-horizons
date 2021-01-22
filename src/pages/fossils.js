import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Search from "../components/search"

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
    let items = this.state.items ? [...this.state.items] : []
    let search = this.state.search

    if (search.length > 0) {
      items = items.filter(
        item =>
          this.getName(item).toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    }

    if (this.state.isSort === true) {
      items.sort((a, b) => (a.price < b.price ? 1 : -1))
    }

    return (
      <Layout>
        <SEO
          title="A Complete Guide to Fossils in Animal Crossing: New Horizons"
          description="All you need to know about fossils in New Horizons- including their prices!"
          keywords="fossil guide, new horizons fossils, fossils in new horizons, new horizons fossil list, new horizons fossils per day,
            new horizons fossil prices, new horizons fossil guide, new horizons fossil models, new horizons fossil price list,
            animal crossing new horizons fossils, animal crossing new horizons fossils list, animal crossing new horizons fossils per day,
            animal crossing new horizons fossils price, animal crossing new horizons fossils list with pictures, animal crossing new horizons fossils with pictures,
            animal crossing fosisl list, animal crossing fossil prices, animal crossing fossil checklist, animal crossing fossils per day,
            animal crossing fossils new horizons, animal crossing fossil design, acnh fossil list, acnh fossils,
            acnh fossil checklist, acnh fossil price, acnh fossil guide, acnh fossils per day, acnh fossil list with pictures, 
            fossils animal crossing, fossil animal crossing, fossil animal crossing new horizons, fossil animal crossing price,
            fossils animal crossing, fossils animal crossing new horizons, fossils animal crossing list, fossils animal crossing pictures,
            how much do fossils sell for in animal crossing, how much do fossils sell for acnh, how much do fossils sell for

            "
        >
          <link rel="canonical" href="https://www.islandhorizons.com"></link>
        </SEO>
        <div className="content">
          <h1 className="content__title">List of Fossils</h1>

          <div className="fossils">
            <nav>
              <Search
                value={this.state.search}
                onChange={this.onSearch}
                placeholder="Fossils"
              />
              <div className="content__sort">
                <input
                  type="checkbox"
                  value={this.state.isSort}
                  onClick={this.onSort}
                />{" "}
                <p> Sort by Price (Highest to Lowest)</p>
              </div>
            </nav>

            <div className="cards">
              {items &&
                items.map((item, index) => (
                  <div key={index} className="card--fossil">
                    <div className="card__profile">
                      <h1 className="card__name--fossil">
                        <span className="card__name--highlight">
                          {" "}
                          {item.name["name-USen"]}
                        </span>
                      </h1>

                      <div>
                        <img
                          src={item.image_uri}
                          alt={item.name["name-USen"]}
                        />
                      </div>
                    </div>

                    <p>
                      <b>Sells for: </b>
                      {item.price} Bells
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
