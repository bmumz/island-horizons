import React, { Component } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
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
      <Layout>
        <SEO
          title="Animal Crossing: New Horizons Villagers Guide"
          description="A complete list of villagers in New Horizons!"
          keywords="new horizons villagers, new  horizons villager guide, new horizons villagers birthdays, new horizons villagers by personality,
            new horizons villagers by species, animal crossing new horizons villagers, animal crossing new horizons villagers list,
            animal crossing new horizons villagers birthdays, animal crossing new horizons villagers personality, animal crossing new horizons villagers list,
            animal crossing new horizons villagers by species, animal crossing new horizons villagers by personality, 
            animal crossing villager list, animal crossing villager birthdays, animal crossing villager popularity, animal crossing villager types, animal crossing villager personalities,
            animal crossing villager species, animal crossing villagers list, animal crossing villagers birthdays, animal crossing villagers  rare,
            animal crossing villagers personalities, animal crossing villagers species, animal crossing villagers names, acnh villagers, acnh villager personalities,
            acnh villagers list, acnh villager tier, acnh villager birthday, acnh villager types, acnh villagers birthdays, acnh villagers personality, 
            what villagers are in new horizons"
        >
          <link rel="canonical" href="https://www.islandhorizons.com"></link>
        </SEO>
        <div className="content">
          {" "}
          <h1 className="content__title">List of Villagers</h1>
          <div className="content__description">
            <p>
              Animal Crossing: New Horizons features many returning— and eight
              brand new villagers of different <b>Personality Types:</b>
              <div className="content__list">
                <div>
                  <u>
                    <b>Male Villagers:</b>
                  </u>

                  <ul>
                    <li>Lazy</li>
                    <li>Smug</li>
                    <li>Jock</li>
                    <li>Cranky</li>
                  </ul>
                </div>

                <div>
                  <u>
                    <b>Female Villagers:</b>
                  </u>

                  <ul>
                    <li>Normal</li>
                    <li>Snooty</li>
                    <li>Peppy</li>
                    <li>Uchi (Sisterly)</li>
                  </ul>
                </div>
              </div>
            </p>
          </div>
          <input
            type="text"
            value={this.state.search}
            onChange={this.onSearch}
            className="content__searchbox--villagers content__searchbox"
            placeholder="Search by Name, Species or Personality"
          />
          {items &&
            items.map((item, index) => (
              <div key={index} className="cards">
                <div className="card__villagers ">
                  <div className="card__profile">
                    <div className="card__name">
                      <span className="card__name--highlight">
                        {item.name["name-USen"]}
                      </span>
                    </div>
                    <img
                      src={item.image_uri}
                      alt={this.getName(item)}
                      className="card__villagerImg"
                    />
                    <p className="card__info--villagers">
                      <FontAwesomeIcon icon={faBirthdayCake} />{" "}
                      <span>{item["birthday-string"]}</span>
                    </p>
                  </div>
                  <div className="card__info--villagers">
                    <p>
                      <b>Personality: </b>
                      {this.getPersonality(item)}
                      <br />
                      <b>Species: </b> {this.getSpecies(item)}
                      <hr />
                      <b>Catch-Phrase: </b>"{item["catch-phrase"]}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Layout>
    )
  }
}
