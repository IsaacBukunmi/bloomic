const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => { 
    const { createPage } = actions
    const comicSeriesTemplate = path.resolve('src/templates/series.js')
    const res = await graphql(`
    query{
        allContentfulComicSeries{
          edges{
            node{
              slug
            }
          }
        }
      }
    `)

    res.data.allContentfulComicSeries.edges.forEach((edge) => {
        createPage({
            component:comicSeriesTemplate,
            path:`/comic-series/${edge.node.slug}`,
            context:{
                slug:edge.node.slug
            }
        })
    })
}