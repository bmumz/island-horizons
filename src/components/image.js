import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "villager02.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="headerImg__container">
      <Link to="/">
        <Img
          fluid={data.headerImage.childImageSharp.fluid}
          className="headerImg"
        />
      </Link>
    </div>
  )
}

export default Image
