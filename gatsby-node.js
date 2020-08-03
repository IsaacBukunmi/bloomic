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
              chapters{
                chapterSlug
              }
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
    

    const chapterDetailsTemplate = path.resolve('src/templates/chapter-details.js')
    const response = await graphql(`
    query{
      allContentfulSeriesChapter{
        edges{
          node{
            chapterTitle
            chapterNumber
            chapterSlug
            dateReleased(formatString:"MMMM Do, YYYY")
            chapterImages{
              file{
                url
              }
            }
            comic_series{
              seriesTitle
              slug
            }
          }
        }
      }
    }
    `)

    response.data.allContentfulSeriesChapter.edges.forEach((edge) => {
      createPage({
          component:chapterDetailsTemplate,
          path:`/comic-series/${edge.node.comic_series.map((item) => item.slug)}/${edge.node.chapterSlug}`,
          context:{
              slug:edge.node.chapterSlug
          }
      })
  })
}
