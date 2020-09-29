import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "villager02.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            base64
            tracedSVG
            aspectRatio
            src
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
      <Link to="/">
        <Img
          fluid={data.headerImage.childImageSharp.fluid}
          className={headerStyles.headerImg}
          media=""
        />
      </Link>
    </div>
  )
}

export default Image
