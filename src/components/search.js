import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Search({ value, onChange, placeholder }) {
  return (
    <div className="search">
      <label htmlFor="Search" aria-label="Serach" className="search__icon">
        <FontAwesomeIcon icon={faSearch} />
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="search__bar"
        placeholder={`Search ${placeholder}...`}
      />
    </div>
  )
}
