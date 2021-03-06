import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allContentfulBlog.edges')
    let postCount = 0

    return (
      <Layout>
        <PageTransition>
          <div style={{ background: '#fff' }}>
            <Helmet>
              <html lang="en" />
              <title>Blog | {siteTitle}</title>
              <meta name="description" content={siteDescription} />
            </Helmet>
            <div className={styles.heroContainer}>
              <div className={styles.hero}>
                <h1>Blog</h1>
              </div>
            </div>
            <div className="wrapper">
              <ul className="article-list">
                {posts.map(node => {
                  node = node.node ? node.node : node
                  if (new Date() >= new Date(node.date)) {
                    postCount++
                    let postStyles = {}
                    if (!node.postImage) {
                      postStyles = {
                        gridTemplateColumns: '100%',
                        maxWidth: '660px',
                        margin: '0 auto',
                      }
                    }
                    return (
                      <li key={node.slug}>
                        <ArticlePreview
                          article={node}
                          postStyles={postStyles}
                        />
                      </li>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
        </PageTransition>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlog(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          tags {
            title
            slug
          }
          date(formatString: "MMMM D, YYYY")
          postContent {
            childMarkdownRemark {
              html
            }
          }
          postImage {
            sizes(maxWidth: 960, maxHeight: 600, resizingBehavior: CROP) {
              ...GatsbyContentfulSizes
            }
            title
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
