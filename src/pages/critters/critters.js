import React from "react"
import { Component } from "react"
import critterStyles from "./critters.module.scss"
import Month from "./month"
import Time from "./time"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
// import Sort from "./sort"

class Critters extends Component {
  state = {
    on: false,
    search: "",
    items: [],
    searchToggle: false,
  }

  onToggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  searchToggle = () => {
    this.setState({
      searchToggle: !this.state.searchToggle,
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
          <div className={critterStyles.searchParent}>
            <div className={critterStyles.searchContainer}>
              <button
                className={critterStyles.searchButton}
                onClick={this.searchToggle}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  color="#229d6c"
                  className={critterStyles.searchIcon}
                />
              </button>
              {this.state.searchToggle && (
                <div>
                  <input
                    type="text"
                    className={critterStyles.searchBar}
                    onChange={this.onSearch}
                    placeholder="Search"
                  />
                </div>
              )}
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
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
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
