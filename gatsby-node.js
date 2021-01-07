const path = require(`path`)
const query = require(`./src/query/query`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Templates
    const postTemplate      = path.resolve(`./src/templates/article/article.js`);
    const categoryTemplate  = path.resolve(`./src/templates/category/category.js`);
    
    const result = await graphql(query);

    // Check for any errors
    if (result.errors) {
        console.error(result.errors)
    }

    const { allWpPost, allWpCategory } = result.data;

    allWpPost.nodes.forEach(post => {
        createPage({
            path: `/post/${post.slug}/`,
            component: slash(postTemplate),
            context: {
                id: post.id,
            },
        })
    });

    allWpPost.nodes.forEach(post => {
        createPage({
            path: `/${post.uri}/`,
            component: slash(postTemplate),
            context: {
                id: post.id,
            },
        })
    });

    allWpCategory.nodes.forEach(category => {
        createPage({
            path: `/category/${category.slug}/`,
            component: slash(categoryTemplate),
            context: {
                id: category.id,
            },
        })
    });

}