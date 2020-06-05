import React from "react"
import { Component } from "react"
import critterStyles from "./critters.module.scss"
import Month from "./month"
import Time from "./time"

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
        item =>
          this.getName(item).toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    }

    let hemisphere = this.state.on
      ? "Southern Availability"
      : "Northern Availability"
    let hemisphereIndex = this.state.on ? "month-southern" : "month-northern"

    return (
      <div className={critterStyles.critterBody}>
        <div className={critterStyles.critterNav}>
          <div className={critterStyles.searchBar}>
            <input
              type="text"
              onChange={this.onSearch}
              className={critterStyles.searchBar}
              placeholder="Search"
            />
          </div>

          <div className={critterStyles.hemisphereToggle}>
            <label className={critterStyles.switch}>
              <input type="checkbox" onChange={this.onToggle} />
              <span className={critterStyles.slider}></span>
            </label>
            <div className={critterStyles.hemisphereOption}>
              Northern <br />
              Southern
            </div>
          </div>
        </div>

        <div className={critterStyles.critterContainer}>
          {collection &&
            collection.map((item, index) => (
              <div key={index} className={critterStyles.critterCard}>
                <div className={critterStyles.critterProfile}>
                  <div className={critterStyles.critterName}>
                    <h4>
                      <span className={critterStyles.nameHighlight}>
                        {this.getName(item)}
                      </span>
                    </h4>
                  </div>
                  <img
                    className={critterStyles.critterImage}
                    src={item.icon_uri}
                    alt={this.getName(item)}
                  />
                </div>
                <div className={critterStyles.critterInfo}>
                  <b>Nook's Cranny: </b>
                  {item.price} Bells
                  <br />
                  <b> {sellerName}: </b>
                  {item[seller]} Bells
                  <br />
                  <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                  {item.availability["location"]}
                </div>
                <div className={critterStyles.critterInfo}>
                  <div>
                    <div className={critterStyles.availabilityCenter}>
                      {hemisphere}
                    </div>
                    <Month>{item.availability[hemisphereIndex]}</Month>
                    <Time>{item.availability["time"]}</Time>
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
