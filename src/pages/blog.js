import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'
import PageTransition from 'gatsby-plugin-page-transitions'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlog.edges')

    return (
      <PageTransition>
        <div style={{ background: '#fff' }}>
          <Helmet>
            <title>Blog | {siteTitle}</title>
            <html lang="en" />
          </Helmet>
          <div className={styles.heroContainer}>
            <div className={styles.hero}>
              <h1>Blog</h1>
            </div>
          </div>
          <div className="wrapper">
            <ul className="article-list">
              {posts.map(({ node }) => {
                if (new Date() >= new Date(node.date)) {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
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
            sizes(maxWidth: 1920, maxHeight: 1200, resizingBehavior: CROP) {
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
