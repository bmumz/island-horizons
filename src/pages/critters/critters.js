import React from "react"
import { Component } from "react"
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
      <div>
        <div className="content">
          <h1 className="content__title">{type} Catching Guide</h1>
          <p className="content__description">
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
          </p>
          <p className="content__description">
            <b>
              Before you get started, remember to select the hemisphere your
              island is on to get accurate results.
            </b>
          </p>
          <p className="content__description">
            Be sure to also check out our {link1} and {link2}!
          </p>

          <p className="content__description"></p>
        </div>
        <div className="content__nav">
          <div className="content__searchContainer">
            <input
              type="text"
              value={this.state.search}
              onChange={this.onSearch}
              className="content__searchbox"
              placeholder="Search"
            />

            <div className="content__sort">
              <input
                type="checkbox"
                onClick={this.onSort}
                className="content__sortBox"
              />
              Sort by Price (Highest to Lowest)
            </div>
          </div>
          <div className="content__toggle">
            <label className="content__switch">
              <input type="checkbox" onChange={this.onToggle} />
              <span className="content__slider"></span>
            </label>
            <div className="content__options">
              <p>Northern</p>
              <p>Southern</p>
            </div>
          </div>
        </div>
        <div className="cards">
          {collection &&
            collection.map((item, index) => (
              <div key={index} className="card">
                <div className="card__profile">
                  <div>
                    <p className="card__name">
                      {" "}
                      <span className="card__name--highlight">
                        {this.getName(item)}
                      </span>
                    </p>
                  </div>
                  <img
                    className="card__img"
                    src={item.icon_uri}
                    alt={this.getName(item)}
                  />
                </div>
                <div className="card__content">
                  <div>
                    <p>
                      <b>Nook's Cranny: </b>
                      {item.price} Bells
                    </p>

                    <p>
                      <b> {sellerName} </b>
                      {item[seller]} {price}
                    </p>

                    <p>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
                      {item.availability["location"]}
                    </p>

                    <p>
                      <b>{shadow}</b> {item[shadowSize]}
                    </p>

                    <p>
                      <b>{speed}</b> {item[speedVelocity]}
                    </p>
                  </div>
                  <div className="card__info">
                    <p>
                      <b>{hemisphere}</b>
                    </p>
                    <p>
                      <Month>{item.availability[hemisphereIndex]}</Month>
                    </p>
                    <p>
                      <Time>{item.availability["time"]}</Time>
                    </p>
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
