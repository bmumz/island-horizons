import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      fossilOutline: file(relativePath: { eq: "fossilOutline.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
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
      dugFossil: file(relativePath: { eq: "dugFossil.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
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
      donateFossil: file(relativePath: { eq: "donateFossil.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
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
    <div className="img">
      <Img fluid={data.fossilOutline.childImageSharp.fluid} />
      <Img fluid={data.dugFossil.childImageSharp.fluid} />
      <Img fluid={data.donateFossil.childImageSharp.fluid} />
    </div>
  )
}

export default Image
