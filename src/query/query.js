module.exports = `
query {
    allWpPost {
        nodes {
            id
            slug
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