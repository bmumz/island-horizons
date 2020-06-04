import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import templateStyles from "./template.module.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const BlogTemplate = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <i className={templateStyles.publishedDate}>
        {props.data.contentfulBlogPost.publishedDate}
      </i>
      <div className={templateStyles.blogPost}>
        {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
      </div>

      {/* <nav className={templateStyles.nextPrevNavigation}>
        <div className={templateStyles.links}>
          {previous && (
            <Link to={`blog/${previous.title.slug}`}>Previous Post</Link>
          )}
          <br />
        </div>
        <div className={templateStyles.links}>
          {next && <Link to={`blog/${next.title.slug}`}>Next Post</Link>}
        </div>
      </nav> */}
    </Layout>
  )
}

export default BlogTemplate
