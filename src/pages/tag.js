import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './tag.module.css'
// import ArticlePreview from '../components/article-preview'
import PageTransition from 'gatsby-plugin-page-transitions'

class TagIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const tags = get(this, 'props.data.allContentfulTag.edges')
    console.log(tags)

    return (
      <PageTransition>
        <div style={{ background: '#fff' }}>
          <Helmet>
            <title>Topics | {siteTitle}</title>
            <html lang="en" />
          </Helmet>
          <div className={styles.heroContainer}>
            <div className={styles.hero}>
              <h1>Topics</h1>
            </div>
          </div>
          <div className="wrapper">
            <ul className="topic-list">
              {tags.map(({ node }) => {
                console.log(node.slug)
                return (
                  <li key={node.slug}>
                    <div className={styles.imageContainer}>
                      {node.image && <Img alt="" sizes={node.image.sizes} />}
                    </div>
                    <div className={styles.contentContainer}>
                      <h2 className={styles.previewTitle}>
                        <Link to={`/tag/${node.slug}`}>{node.title}</Link>
                      </h2>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default TagIndex

export const pageQuery = graphql`
  query TagIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulTag(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
          image {
            sizes(maxWidth: 800, maxHeight: 800, resizingBehavior: CROP) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`
