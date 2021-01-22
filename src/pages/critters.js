import React from "react"
import { Component } from "react"
import Month from "../components/critters/month"
import Time from "../components/critters/time"
import Search from "../components/search"
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
      <>
        <div className="content">
          <h1 className="content__title">{type} Catching Guide</h1>
          <div className="content__description">
            <p>
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
            <p>
              Be sure to also check out our {link1} and {link2}!
            </p>
          </div>

          <div className="critters">
            <nav>
              <div className="critters__hemisphereSelection">
                <p>
                  *Remember to select your island's hemisphere for accurate
                  results!
                </p>
                <div className="critters__toggleContainer">
                  <label className="critters__switch">
                    <input type="checkbox" onChange={this.onToggle} />
                    <span className="critters__slider"></span>
                  </label>

                  <div className="critters__toggleOptions">
                    <p>Northern</p>
                    <p>Southern</p>
                  </div>
                </div>
              </div>
              <Search
                value={this.state.search}
                placeholder={type}
                onChange={this.onSearch}
              />
              <div className="critters__selections">
                <div className="critters__sorting">
                  <input
                    type="checkbox"
                    onClick={this.onSort}
                    className="critters__sortByPrice"
                  />
                  <p>Sort by Price (Highest to Lowest)</p>
                </div>
              </div>
            </nav>

            <div className="cards">
              {collection &&
                collection.map((item, index) => (
                  <div key={index} className="card">
                    <div className="card__profile">
                      <h1 className="card__name">
                        {" "}
                        <span className="card__name--highlight">
                          {this.getName(item)}
                        </span>
                      </h1>

                      <img
                        className="card__img"
                        src={item.icon_uri}
                        alt={this.getName(item)}
                      />
                    </div>

                    <div className="card__content">
                      <p className="card__sell">
                        <img
                          src="https://emoji.gg/assets/emoji/4290_Bells.png"
                          className="card__bells"
                          alt="Bells icon"
                        />{" "}
                        <b> Sells For: </b>
                      </p>
                      <p>
                        <b>Nook's Cranny:</b> {item.price} Bells
                      </p>
                      <p>
                        <b>{sellerName}</b>
                        {item[seller]} {price}
                      </p>
                    </div>
                    <div className="card__content">
                      <p>
                        <b>{hemisphere}:</b>
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} /> {location}
                        {item.availability["location"]}
                      </p>
                      <p>
                        <Month>{item.availability[hemisphereIndex]}</Month>
                      </p>
                      <p>
                        <Time>{item.availability["time"]}</Time>
                      </p>

                      {shadow ? (
                        <>
                          <br />
                          <p>
                            <b>{shadow}</b> {item[shadowSize]}
                          </p>
                        </>
                      ) : (
                        ""
                      )}
                      {speed ? (
                        <p>
                          <b> {speed}</b> {item[speedVelocity]}
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Critters
