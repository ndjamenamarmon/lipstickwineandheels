import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './page.module.css'
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from '../components/layout'

class PageTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const page = get(this.props, 'data.contentfulPage')
    const imageStyles = { backgroundImage: `url(${page.pageImage.sizes.src})` }

    console.log(page)
    console.log(imageStyles)

    return (
      <Layout>
        <PageTransition>
          <div style={{ background: '#fff' }}>
            <Helmet title={`${page.title} | ${siteTitle}`}>
              <html lang="en" />
              <meta name="description" content={page.metaDescription} />
            </Helmet>
            <div className={styles.heroContainer}>
              <div className={styles.hero} style={imageStyles} />
            </div>
            <div className={styles.pageContainer}>
              <h1 className="section-headline">{page.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: page.pageContent.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </PageTransition>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      pageContent {
        childMarkdownRemark {
          html
        }
      }
      metaDescription
      pageImage {
        sizes(maxWidth: 1920, maxHeight: 250, resizingBehavior: CROP) {
          ...GatsbyContentfulSizes
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
