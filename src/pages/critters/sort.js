import React, { Component } from "react"
import critterStyles from "./critters.module.scss"

export default class Sort extends Component {
  state = {
    on: false,
  }

  onToggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    return (
      <div>
        <button className={critterStyles.sortButton} onClick={this.onToggle}>
          Sort
        </button>
        {this.state.on && (
          <p className={critterStyles.sortOptions}>
            Price: Highest to Lowest Price: Lowest to Highest
            <br />
          </p>
        )}
      </div>
    )
  }
}
