import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './tag.module.css'
import ArticlePreview from '../components/article-preview'
import PageTransition from 'gatsby-plugin-page-transitions'

class TagTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const tag = get(this.props, 'data.contentfulTag')
    const posts = get(this.props, 'data.allContentfulBlog.edges')
    const imageStyles = { backgroundImage: `url(${tag.image.sizes.src})` }

    return (
      <PageTransition>
        <div style={{ background: '#fff' }}>
          <Helmet title={`${tag.title} | ${siteTitle}`}>
            <html lang="en" />
            <meta name="description" content={siteDescription} />
          </Helmet>
          <div className={styles.heroContainer}>
            <div className={styles.hero} style={imageStyles} />
          </div>
          <div className={styles.tagContainer}>
            <h1 className="section-headline">Recent articles in {tag.title}</h1>
            <ul className="article-list">
              {posts.map(({ node }) => {
                {
                  let show = false
                  node.tags.map(tagItem => {
                    if (tagItem.slug === tag.slug) {
                      show = true
                    }
                  })
                  if (show === true && new Date() >= new Date(node.date)) {
                    return (
                      <li key={node.slug}>
                        <ArticlePreview article={node} />
                      </li>
                    )
                  }
                }
              })}
            </ul>
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default TagTemplate

export const pageQuery = graphql`
  query PostQueryAndTagBySlug($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      slug
      image {
        sizes(maxWidth: 1920, maxHeight: 250, resizingBehavior: CROP) {
          ...GatsbyContentfulSizes
        }
        title
      }
    }
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
            sizes(maxWidth: 1920, maxHeight: 1200, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes
            }
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
