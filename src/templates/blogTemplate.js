import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import templateStyles from "./template.module.scss"

import Head from "../components/head"

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
      <Head
        title={props.data.contentfulBlogPost.title}
        keywords={props.data.contentfulBlogPost.tags}
        description={props.data.contentfulBlogPost.excerpt}
      ></Head>

      <p className={templateStyles.blogTitle}>
        {props.data.contentfulBlogPost.title}
      </p>
      <i className={templateStyles.publishedDate}>
        {props.data.contentfulBlogPost.publishedDate}
      </i>
      <div className={templateStyles.blogPost}>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>
    </Layout>
  )
}

export default BlogTemplate
