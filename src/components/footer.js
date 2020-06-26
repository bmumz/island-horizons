import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"

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
    <footer className={footerStyles.footerContents}>
      <p>
        <span className={footerStyles.highlight}>
          {" "}
          {data.site.siteMetadata.title} is a fan-made website with no
          affiliation with Animal Crossing or Nintendo. © 2020{" "}
          {data.site.siteMetadata.author}
        </span>
      </p>
    </footer>
  )
}

export default Footer
