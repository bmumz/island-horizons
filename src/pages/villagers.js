import React, { Component } from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import villagerStyles from "./villagers.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons"

export default class Villagers extends Component {
  constructor() {
    super()
    this.state = { items: [], search: "" }
  }

  onSearch = event => {
    this.setState({ search: event.target.value })
  }

  getName = item => item.name["name-USen"]
  getPersonality = item => item.personality
  getSpecies = item => item.species

  componentDidMount() {
    fetch("https://acnhapi.com/v1/villagers/")
      .then(response => response.json())
      .then(results => {
        const items = Object.values(results)
        this.setState({ items })
      })
  }

  render() {
    let items = this.state.items || []
    let search = this.state.search

    items.sort(function (a, b) {
      if (a.name["name-USen"] < b.name["name-USen"]) {
        return -1
      }
      if (a.name["name-USen"] > b.name["name-USen"]) {
        return 1
      }
      return 0
    })

    if (search.length > 0) {
      items = items.filter(item => {
        let name = this.getName(item)
        let personality = this.getPersonality(item)
        let species = this.getSpecies(item)

        let searchValue = search.toLowerCase().trim()

        let isNameSearched = name.toLowerCase().indexOf(searchValue) !== -1

        let isPersonalitySearched =
          personality.toLowerCase().indexOf(searchValue) !== -1

        let isSpeciesSearched =
          species.toLowerCase().indexOf(searchValue) !== -1

        return isNameSearched || isPersonalitySearched || isSpeciesSearched
      })
    }

    return (
      <div className="container">
        <Layout>
          <Head title="New Horizons Complete Villagers List" />
          <div className={villagerStyles.descriptionContainer}>
            {" "}
            <p className={villagerStyles.title}>List of Villagers</p>
            <div className={villagerStyles.villagerDescription}>
              <p>
                Animal Crossing: New Horizons features many returning— and 8
                brand new villagers of <b>8 Personality Types:</b>
                <div className={villagerStyles.personalityTypes}>
                  <div className={villagerStyles.maleVillagers}>
                    <br />
                    <u>
                      <b>Male Villagers:</b>
                    </u>
                    <br />
                    <ul>
                      <li>Lazy</li>
                      <li>Smug</li>
                      <li>Jock</li>
                      <li>Cranky</li>
                    </ul>
                  </div>
                  <br />
                  <div className={villagerStyles.femaleVillagers}>
                    <br />
                    <u>
                      <b>Female Villagers:</b>
                    </u>
                    <br />
                    <ul>
                      <li>Normal</li>
                      <li>Snooty</li>
                      <li>Peppy</li>
                      <li>Uchi (Sisterly)</li>
                    </ul>
                  </div>
                </div>
                <br />
              </p>
            </div>
            <div className={villagerStyles.searchContainer}>
              <input
                type="text"
                value={this.state.search}
                onChange={this.onSearch}
                className={villagerStyles.searchBar}
                placeholder="Search by Name, Species or Personality"
                maxLength="25"
              />
            </div>
            {items &&
              items.map((item, index) => (
                <div key={index} className={villagerStyles.villagerContainer}>
                  <div className={villagerStyles.villagerCard}>
                    <div className={villagerStyles.villagerProfile}>
                      <div className={villagerStyles.villagerName}>
                        <span className={villagerStyles.nameHighlight}>
                          {item.name["name-USen"]}
                        </span>
                      </div>
                      <img
                        src={item.image_uri}
                        alt={this.getName(item)}
                        className={villagerStyles.villagerImg}
                      />
                      <div className={villagerStyles.villagerBirthday}>
                        <FontAwesomeIcon icon={faBirthdayCake} />{" "}
                        {item["birthday-string"]}
                      </div>
                    </div>
                    <div className={villagerStyles.villagerInfo}>
                      <b>Personality: </b>
                      {this.getPersonality(item)}
                      <br />
                      <b>Species: </b> {this.getSpecies(item)}
                      <br />
                      <br />
                      <hr />
                      <p className={villagerStyles.capitalize}>
                        <b>catch-phrase: </b>"{item["catch-phrase"]}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Layout>
      </div>
    )
  }
}
