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
      <link
        rel="apple-touch-icon-precomposed"
        sizes="57x57"
        href="src/images/favicon/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="114x114"
        href="src/images/favicon/apple-touch-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="72x72"
        href="src/images/favicon/apple-touch-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href="/src/images/favicon/apple-touch-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="60x60"
        href="/src/images/favicon/apple-touch-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href="/src/images/favicon/apple-touch-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="76x76"
        href="/src/images/favicon/apple-touch-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href="/src/images/favicon/apple-touch-icon-152x152.png"
      />
      <link
        rel="icon"
        type="image/png"
        href="/src/images/favicon/favicon-196x196.png"
        sizes="196x196"
      />
      <link
        rel="icon"
        type="image/png"
        href="/src/images/favicon/favicon-96x96.png"
        sizes="96x96"
      />
      <link
        rel="icon"
        type="image/png"
        href="/src/images/favicon/favicon-32x32.png"
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href="/src/images/favicon/favicon-16x16.png"
        sizes="16x16"
      />
      <link
        rel="icon"
        type="image/png"
        href="/src/images/favicon/favicon-128.png"
        sizes="128x128"
      />
      <meta
        name="application-name"
        content="Island Horizons: an Animal Crossing fan blog"
      />
      <meta name="msapplication-TileColor" content="#FFFFFF" />
      <meta name="msapplication-TileImage" content="mstile-144x144.png" />
      <meta name="msapplication-square70x70logo" content="mstile-70x70.png" />
      <meta
        name="msapplication-square150x150logo"
        content="mstile-150x150.png"
      />
      <meta name="msapplication-wide310x150logo" content="mstile-310x150.png" />
      <meta
        name="msapplication-square310x310logo"
        content="mstile-310x310.png"
      />
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
