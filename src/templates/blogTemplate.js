import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      excerpt
      tags
      body {
        json
      }
    }
  }
`

const BlogTemplate = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <SEO
        title={props.data.contentfulBlogPost.title}
        keywords={props.data.contentfulBlogPost.tags}
        description={props.data.contentfulBlogPost.excerpt}
      />
      <div>
        <h1 className="blog__title">{props.data.contentfulBlogPost.title}</h1>
        <p className="blog__date">
          {props.data.contentfulBlogPost.publishedDate}
        </p>
        <p className="blog__content">
          {documentToReactComponents(
            props.data.contentfulBlogPost.body.json,
            options
          )}
        </p>
      </div>
    </Layout>
  )
}

export default BlogTemplate
