import React from "react"
import { Component } from "react"
import apiStyles from "./api.module.scss"

class Critters extends Component {
  state = {
    on: false,
    search: "",
    items: [],
  }

  onToggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  onSearch = event => {
    this.setState({ search: event.target.value })
  }

  getName = item => item.name["name-USen"]

  render() {
    let { critters, seller, sellerName } = this.props
    let collection = critters
    let search = this.state.search

    if (search.length > 0) {
      collection = collection.filter(
        item => this.getName(item).indexOf(search) !== -1
      )
    }
    return (
      <div className={apiStyles.critterBody}>
        <div className={apiStyles.critterNav}>
          <div className={apiStyles.searchBar}>
            <input
              type="text"
              onChange={this.onSearch}
              className={apiStyles.searchBar}
              placeholder="Search"
            />
          </div>

          <div className={apiStyles.hemisphereToggle}>
            <div className={apiStyles.hemisphereOption}>
              <p>Northern</p>
              <p>Southern</p>
            </div>

            <label className={apiStyles.switch}>
              {" "}
              <input type="checkbox" onChange={this.onToggle} />
              <span className={apiStyles.slider}></span>
            </label>
          </div>
        </div>

        <div className={apiStyles.critterContainer}>
          {collection &&
            collection.map((item, index) => (
              <div key={index} className={apiStyles.critterCard}>
                <div className={apiStyles.critterName}>
                  <h4>{this.getName(item)}</h4>
                </div>
                <div className={apiStyles.critterContent}>
                  <img
                    className={apiStyles.critterImage}
                    src={item.icon_uri}
                    alt={this.getName(item)}
                  />
                  <div className={apiStyles.critterInfo}>
                    <b>Nook's Cranny: </b>
                    {item.price} Bells
                    <br />
                    <b> {sellerName}: </b>
                    {item[seller]} Bells
                    <br />
                    <b>Location: </b>
                    {item.availability["location"]}
                    <br />
                    {!this.state.on ? (
                      <div>
                        <br />
                        <hr />
                        <div className={apiStyles.availabilityCenter}>
                          Northern Availability:{" "}
                        </div>
                        Months: {item.availability["month-northern"]} <br />
                        Time: {item.availability["time"]}
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <br />
                        <hr />
                        <div className={apiStyles.availabilityCenter}>
                          Southern Availability:{" "}
                        </div>
                        Months: {item.availability["month-southern"]}
                        <br />
                        Time: {item.availability["time"]}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default Critters
