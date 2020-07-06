import React from "react"
import { Component } from "react"
import critterStyles from "./critters.module.scss"
import Month from "./month"
import Time from "./time"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

class Critters extends Component {
  constructor() {
    super()
    this.state = {
      on: false,
      search: "",
      items: [],
      isSort: false,
    }
  }

  onToggle = event => {
    this.setState({
      on: event.target.checked,
    })
  }

  onSort = event => {
    this.setState({ isSort: event.target.checked })
  }

  onSearch = event => {
    this.setState({ search: event.target.value })
  }

  getName = item => item.name["name-USen"]

  render() {
    let {
      critters,
      seller,
      location,
      sellerName,
      price,
      shadowSize,
      shadow,
    } = this.props
    let search = this.state.search
    let collection = critters && [...critters]

    if (search.length > 0) {
      critters = critters.filter(
        item =>
          this.getName(item).toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    }

    let hemisphere = this.state.on
      ? "Southern Availability"
      : "Northern Availability"
    let hemisphereIndex = this.state.on ? "month-southern" : "month-northern"

    if (this.state.isSort && collection) {
      collection.sort((a, b) => (a.price < b.price ? 1 : -1))
    } else {
      collection = critters && [...critters]
    }

    return (
      <div className={critterStyles.critterBody}>
        <div className={critterStyles.critterNav}>
          <div className={critterStyles.searchContainer}>
            <input
              type="text"
              value={this.state.search}
              onChange={this.onSearch}
              className={critterStyles.searchBar}
              placeholder="Search"
            />

            <div className={critterStyles.sortFont}>
              <input
                type="checkbox"
                onClick={this.onSort}
                className={critterStyles.sortPrice}
              />
              Sort by Price (Highest to Lowest)
            </div>
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
                    <p>
                      {" "}
                      <span className={critterStyles.nameHighlight}>
                        {this.getName(item)}
                      </span>
                    </p>
                  </div>
                  <img
                    className={critterStyles.critterImage}
                    src={item.icon_uri}
                    alt={this.getName(item)}
                  />
                </div>
                <div className={critterStyles.critterInfo}>
                  <div className={critterStyles.prices}>
                    <b>Nook's Cranny: </b>
                    {item.price} Bells
                    <br />
                    <b> {sellerName} </b>
                    {item[seller]} {price}
                    <br />
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
                    {item.availability["location"]}
                    <br />
                    <b>{shadow}</b> {item[shadowSize]}
                  </div>

                  <div className={critterStyles.hemisphereDetails}>
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
