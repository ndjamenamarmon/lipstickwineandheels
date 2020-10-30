const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const pageTemplate = path.resolve('./src/templates/page.js')
    const tagTemplate = path.resolve('./src/templates/tag.js')
    resolve(
      graphql(`
        {
          allContentfulBlog {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlog.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        graphql(`
          {
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const pages = result.data.allContentfulPage.edges
          pages.forEach((page, index) => {
            createPage({
              path: `/page/${page.node.slug}/`,
              component: pageTemplate,
              context: {
                slug: page.node.slug,
              },
            })
          })

          graphql(`
            {
              allContentfulTag {
                edges {
                  node {
                    title
                    slug
                  }
                }
              }
            }
          `).then(result => {
            if (result.errors) {
              console.log(result.errors)
              reject(result.errors)
            }

            const tags = result.data.allContentfulTag.edges
            tags.forEach((tag, index) => {
              createPage({
                path: `/tag/${tag.node.slug}/`,
                component: tagTemplate,
                context: {
                  slug: tag.node.slug,
                },
              })
            })

            graphql(`
              {
                allNotionPageBlog {
                  edges {
                    node {
                      title
                      slug
                    }
                  }
                }
              }
            `).then(result => {
              if (result.errors) {
                console.log(result.errors)
                reject(result.errors)
              }

              const posts = result.data.allNotionPageBlog.edges
              posts.forEach((post, index) => {
                createPage({
                  path: `/blog/${post.node.slug}/`,
                  component: blogPost,
                  context: {
                    slug: post.node.slug,
                  },
                })
              })
            })
          })
        })
      })
    )
  })
}
