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
      speed,
      speedVelocity,
      type,
      amount,
      link1,
      link2,
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
        <div className={critterStyles.descriptionContainer}>
          <p className={critterStyles.title}>{type} Catching Guide</p>
          <div className={critterStyles.description}>
            This guide is a complete collection of all{" "}
            <b>
              <i>
                {amount} {type}
              </i>
            </b>{" "}
            in Animal Crossing: New Horizons! It was designed with all the
            information to help you fill up your museum faster! It includes
            <i> where</i> to find them, <i>when</i> to find them (time of day
            and year), as well as <i>what</i> you can sell them for!
          </div>
          <div className={critterStyles.description}>
            <b>
              Before you get started, remember to select the hemisphere your
              island is on to get accurate results.
            </b>
          </div>

          <div className={critterStyles.description}>
            Be sure to also check out our {link1} and {link2}!
          </div>
        </div>
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
                    <br />
                    <b>{speed}</b> {item[speedVelocity]}
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
