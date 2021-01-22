import React from "react"
import "normalize.css/normalize.css"
import Layout from "../components/layout"
import BlogPosts from "../components/blogPosts"
import SEO from "../components/seo"
import "../styles/styles.scss"

const App = () => {
  return (
    <Layout>
      <SEO title="Home" keywords="" description="" />
      <BlogPosts />
    </Layout>
  )
}

export default App
