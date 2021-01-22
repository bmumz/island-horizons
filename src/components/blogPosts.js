import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

const BlogPosts = () => {
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
    <div className="content">
      <div className="blog">
        {" "}
        <p className="blog__recent">Recent Posts</p>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <div key={edge.node.slug}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h1 className="blog__title">
                  <span className="blog__titleHighlight">
                    {edge.node.title}
                  </span>
                </h1>
                <div className="blog__date">
                  <p>{edge.node.publishedDate}</p>
                </div>

                <div className="blog__excerpt">
                  <p>{edge.node.excerpt}</p>
                </div>
              </Link>
              <hr className="blog__divider" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogPosts
