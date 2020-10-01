import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-solid-svg-icons"

export default class Time extends Component {
  render() {
    let time = this.props.children && this.props.children.toString()
    if (time === undefined || time.length === 0) {
      time = "All Day"
    }

    return (
      <div>
        <FontAwesomeIcon icon={faClock} /> <span>{time}</span>
      </div>
    )
  }
}
