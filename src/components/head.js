import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl
        }
      }
    }
  `)
  return (
    <Helmet>
      <html lang="en" />
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="keywords" content={data.site.siteMetadata.keywords} />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="url" content={data.site.siteMetadata.url} />
    </Helmet>
  )
}

export default Head
