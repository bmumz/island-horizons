import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)

  return (
    <footer className="footer">
      {data.site.siteMetadata.title} is a fan-made website with no affiliation
      with Animal Crossing or Nintendo. © 2020 {data.site.siteMetadata.author}
    </footer>
  )
}

export default Footer
