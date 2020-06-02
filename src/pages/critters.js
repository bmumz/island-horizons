import React from "react"
import { Component } from "react"
import apiStyles from "./api.module.scss"

class Critters extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    let { critters, seller, sellerName } = this.props
    return (
      <div className={apiStyles.cardContainer}>
        <div className={apiStyles.hemisphereToggle}>
          <option className={apiStyles.hemisphereOption}>Northern</option>
          <label className={apiStyles.switch}>
            {" "}
            <input type="checkbox" onChange={this.toggle} />
            <span className={apiStyles.slider}></span>
          </label>
          <option className={apiStyles.hemisphereOption}> Southern</option>
        </div>
        <div className={apiStyles.critterContainer}>
          {critters.map((item, index) => (
            <div key={index} className={apiStyles.critterCard}>
              <div className={apiStyles.critterName}>
                <h4>{item.name["name-USen"]}</h4>
              </div>
              <div className={apiStyles.critterContent}>
                <img
                  className={apiStyles.critterImage}
                  src={item.icon_uri}
                  alt={item.name["name-USen"]}
                />
                <div className={apiStyles.critterInfo}>
                  <b>Nook's Cranny: </b>
                  {item.price} Bells
                  <br />
                  <b> {sellerName}: </b>
                  {item[seller]} Bells
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
