import React from "react"
import { graphql } from "gatsby"

const Category = (props) => {

    const { wpCategory } = props.data;

    return (    
        <div>{ wpCategory.name }</div>
    )
}

export default Category

// Get data
export const query = graphql`
query($id: String) {
    wpCategory(id: {eq: $id}) {
        id
        name
        slug
        posts {
            nodes {
                id
                slug
                title
                excerpt
                date(fromNow: false)
                tags {
                    nodes {
                        name
                        slug
                    }
                }
                author {
                    node {
                        name
                    }
                }
            }
        }
    }
}
`;