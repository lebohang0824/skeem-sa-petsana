import React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = (props) => {

  const  { allWpPost } = props.data;

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {allWpPost.nodes.map(article => (
          <li key={article.id}>
            <Link to={`/post/${article.slug}`}>{ article.title }</Link>
          </li>
        ))}
      </ul>
    </div>
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