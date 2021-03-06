import React, { Component } from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import Search from "../components/search"
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
      <>
        <Seo
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
        />
        <Layout>
          <div className="content">
            <h1 className="content__title">List of Villagers</h1>
            <div className="content__description">
              <p>
                Animal Crossing: New Horizons features many returning— and eight
                brand new villagers of different personalities.
              </p>

              <p>
                Male villagers are Lazy, Smug, Jock or Cranky, while female
                villagers are Normal, Snooty, Peppy or Uchi (Sisterly).
              </p>
            </div>
            <div className="villagers">
              <nav>
                <Search
                  value={this.state.search}
                  onChange={this.onSearch}
                  placeholder="for villagers..."
                />
              </nav>

              <div className="cards">
                {items &&
                  items.map((item, index) => (
                    <div key={index} className="card--villager ">
                      <h1 className="card__name--villager">
                        {" "}
                        <span className="card__name--highlight">
                          {item.name["name-USen"]}
                        </span>
                      </h1>
                      <div className="card__profile--villager">
                        <img
                          src={item.image_uri}
                          alt={this.getName(item)}
                          className="card__img--villager"
                        />
                        <p>
                          <FontAwesomeIcon icon={faBirthdayCake} />{" "}
                          {item["birthday-string"]}
                        </p>
                      </div>

                      <div className="card__list">
                        <p>
                          <b>Gender:</b> {item.gender}
                        </p>
                        <p>
                          <b>Personality:</b> {item.personality}
                        </p>
                        <p>
                          <b>Species:</b> {item.species}
                        </p>
                        <p>
                          <b>Catch-phrase:</b> "{item["catch-phrase"]}"
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Layout>
      </>
    )
  }
}
