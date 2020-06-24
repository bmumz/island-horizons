import React from "react"
import Layout from "../components/layout"
import { graphql, Link, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

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
      <Head title="Home" keywords="" description="" />
      <div className={blogStyles.cards}>
        {" "}
        <p className={blogStyles.title}>Recent Posts</p>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <div key={edge.node.slug} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2 className={blogStyles.blogPostTitle}>
                  <span className={blogStyles.highlightTitle}>
                    {edge.node.title}
                  </span>
                </h2>
                <div className={blogStyles.date}>{edge.node.publishedDate}</div>

                <div className={blogStyles.excerpt}>{edge.node.excerpt}</div>
              </Link>
              <hr />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Home
