import React from "react"
import { Component } from "react"
import apiStyles from "./api.module.scss"

class Critters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      northern: false,
      southern: false,
    }
  }

  toggleNorthernState = () => {
    const northern = !this.state.northern
    this.setState({
      northern,
    })
  }

  toggleSouthernState = () => {
    const southern = !this.state.southern
    this.setState({
      southern,
    })
  }

  render() {
    let { critters, seller, sellerName } = this.props
    return (
      <div>
        <div className={apiStyles.hemisphereCheckbox}>
          <div>
            <input
              type="checkbox"
              name="hemisphere"
              checked={this.state.northern}
              onChange={this.toggleNorthernState}
            />
            Northern Hemisphere
          </div>
          <div>
            <input
              type="checkbox"
              name="hemisphere"
              checked={this.state.southern}
              onChange={this.toggleSouthernState}
            />
            Southern Hemisphere
          </div>
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
                  {this.state.northern ? (
                    <div>
                      <br />
                      <hr />
                      <div className={apiStyles.availabilityCenter}>
                        Availability:{" "}
                      </div>
                      N: {item.availability["month-northern"]} <br />
                      Time: {item.availability["time"]}
                    </div>
                  ) : (
                    ""
                  )}
                  {this.state.southern ? (
                    <div>
                      {" "}
                      <br />
                      <hr />
                      <div className={apiStyles.availabilityCenter}>
                        Availability:{" "}
                      </div>
                      <br />
                      S: {item.availability["month-southern"]}
                      <br />
                      Time: {item.availability["time"]}
                    </div>
                  ) : (
                    ""
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
