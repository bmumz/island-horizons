import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import templateStyles from "./template.module.scss"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      timeToRead
    }
  }
`

const BlogTemplate = ({ data, pageContext }) => {
  const { prev, next } = pageContext

  console.log(pageContext)
  const { markdownRemark } = data
  const { title, date } = markdownRemark.frontmatter
  const { html, timeToRead } = markdownRemark

  return (
    <Layout>
      <h1>{title}</h1>
      <p>
        {date} • <i>{timeToRead} min read</i>
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <nav className={templateStyles.nextPrevNavigation}>
        <div className={templateStyles.links}>
          {prev && <Link to={`blog/${prev.fields.slug}`}>Previous Post</Link>}
          <br />
        </div>
        <div className={templateStyles.links}>
          {next && <Link to={`blog/${next.fields.slug}`}>Next Post</Link>}
        </div>
      </nav>
    </Layout>
  )
}

export default BlogTemplate
