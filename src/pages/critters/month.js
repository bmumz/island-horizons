import React, { Component } from "react"
import critterStyles from "./critters.module.scss"

const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

export default class Month extends Component {
  render() {
    const months = this.props.children && this.props.children.toString()
    const monthsSplit = months && months.split(/[ -]+/)
    let monthNames = ""

    if (monthsSplit.length > 1) {
      monthsSplit.forEach((item, index) => {
        if (index !== 0) {
          const prev = monthsSplit && monthsSplit[index - 1]
          // If previous and current is a number put a dash
          // Otherwise add a space
          if (!isNaN(prev) && !isNaN(item)) {
            monthNames += "-"
          } else {
            monthNames += " "
          }
        }

        if (item === "&") {
          monthNames += item
        } else {
          const monthIndex = parseInt(item) - 1
          monthNames += monthsOfYear[monthIndex]
        }
      })
    } else {
      monthNames = "All Year"
    }

    return (
      <div>
        <i className="fa fa-calendar" aria-hidden="true" />
        <span className={critterStyles.month}>{monthNames}</span>
      </div>
    )
  }
}
