import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => {

  const  { allWpPost } = props.data;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>

      <ul>
        {allWpPost.nodes.map(article => (
          <li key={article.id}>
            <Link to={`/post/${article.slug}`}>{ article.title }</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allWpPost {
    nodes {
      id
      slug
      title
      content
    }
  }
}
`