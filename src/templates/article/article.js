import React from "react"
import { graphql } from "gatsby"

const Article = (props) => {

    const { wpPost } = props.data;

    return (    
        <div>
            <h1>{ wpPost.title }</h1>
            <small>Posted: { wpPost.date }</small>
            <div dangerouslySetInnerHTML={{__html: wpPost.content}} />
            <h4>Writer: { wpPost.author.node.name }</h4>
        </div>
    )
}

export default Article

// Get data
export const query = graphql`
query($id: String) {
    wpPost(id: {eq: $id}) {
        id
        title
        excerpt
        content
        author {
            node {
                name
            }
        }
        categories {
          nodes {
            name
          }
        }
        date(fromNow: true)
        featuredImage {
            node {
                sourceUrl
                altText
            }
        }
    }
}
`;