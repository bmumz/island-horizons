import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h4 className={blogStyles.title}>Recent Posts</h4>
      {data.allContentfulBlogPost.edges.map(edge => {
        return (
          <div key={edge.node.slug} className={blogStyles.post}>
            <Link to={`/blog/${edge.node.slug}`}>
              <h2>
                <span className={blogStyles.span}>{edge.node.title}</span>
              </h2>
              <p className={blogStyles.date}>{edge.node.publishedDate}</p>

              <p className={blogStyles.excerpt}>{edge.node.excerpt}</p>
            </Link>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default Home
