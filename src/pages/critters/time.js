import React, { Component } from "react"
import critterStyles from "./critters.module.scss"

export default class Time extends Component {
  render() {
    let time = this.props.children && this.props.children.toString()

    if (time && time.length === 0) {
      time = "All Day"
    }

    return (
      <div>
        <i className="fa fa-clock-o" aria-hidden="true" />
        <span className={critterStyles.time}>{time}</span>
      </div>
    )
  }
}
