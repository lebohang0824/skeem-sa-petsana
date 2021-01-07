module.exports = `
query {
    allWpPost {
        nodes {
            id
            slug
            uri
        }
    }
    allWpCategory {
        nodes {
            id
            name
            slug
        }
    }
}
`;