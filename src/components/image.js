import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
      }
    }
  `)

  return (
    <div className={headerStyles.header}>
      {/* <Img fluid={data.headerImage.childImageSharp.fluid} /> */}
      <h1>
        <Link className={headerStyles.title} to="/">
          Island Horizons
        </Link>
      </h1>
    </div>
  )
}

export default Image
