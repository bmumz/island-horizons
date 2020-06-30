import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ title, keywords, description }) => {
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

      <meta
        property="og:title"
        content="Island Horizons: An Animal Crossing Fan Blog"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        name="description"
        content={`${description} ${data.site.siteMetadata.description}`}
      />
      <meta
        name="keywords"
        content={`${keywords} ${data.site.siteMetadata.keywords}`}
      />
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta
        property="og:url"
        name="url"
        content={data.site.siteMetadata.siteUrl}
      />
      <meta property="og:image" content="https://i.ibb.co/C017MWN/og-img.jpg" />

      <link rel="canonical" href="https://www.islandhorizons.com"></link>
    </Helmet>
  )
}

export default Head
