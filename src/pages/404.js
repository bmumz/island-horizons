import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFound = props => {
  return (
    <Layout>
      <SEO title="404 Error: Page Not Found" />
      <h1>404 Error: Page not found!</h1>
      <Img fluid={props.data.errorImage.childImageSharp.fluid} />
      <p>
        <Link to="/">Return home...</Link>
      </p>
    </Layout>
  )
}

export default NotFound

export const data = graphql`
  query {
    errorImage: file(relativePath: { eq: "notFound.jpg" }) {
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
`
