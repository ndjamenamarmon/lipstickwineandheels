import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import readingTime from 'reading-time'
import { DiscussionEmbed } from 'disqus-react'

import styles from './blog-post.module.css'
import PageTransition from 'gatsby-plugin-page-transitions'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlog')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    // console.log(post)
    const disqusShortname = 'webdevabq'
    const disqusConfig = {
      identifier: post.slug,
      title: post.title,
    }

    console.log(post)

    return (
      <PageTransition>
        <div
          style={{ background: '#fff' }}
          className={styles.blogPostContainer}
        >
          <Helmet title={`${post.title} | ${siteTitle}`}>
            <html lang="en" />
            <script src="//platform-api.sharethis.com/js/sharethis.js#property=5b7d418b3280b10011e38527&product=inline-share-buttons" />
          </Helmet>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            {post.tags && (
              <p className={styles.blogPostTags}>
                {post.tags.map(tag => (
                  <Link to={`/tag/${tag.slug}`} key={tag.slug}>
                    {tag.title}
                  </Link>
                ))}
              </p>
            )}
            <p style={{ display: 'block' }} className={styles.blogPostDate}>
              {post.date} <span className={styles.bullet}>&bull;</span>
              {readingTime(post.postContent.childMarkdownRemark.html).text}
            </p>
          </div>
          <div>
            {post.postImage && (
              <figure>
                <Img alt={post.postImage.title} sizes={post.postImage.sizes} />
                {post.postImage.description && (
                  <figcaption>{post.postImage.description}</figcaption>
                )}
              </figure>
            )}
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: post.postContent.childMarkdownRemark.html,
              }}
            />
          </div>

          <div className={styles.commentsContainer}>
            <h2>Share</h2>
            <p>Think others might enjoy this post? Share it!</p>
            <div className="sharethis-inline-share-buttons" />
            <h2>Comments</h2>
            <p>I'd love to hear from you, let me know your thoughts!</p>
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      date(formatString: "MMMM D, YYYY")
      postContent {
        childMarkdownRemark {
          html
        }
      }
      postImage {
        sizes(maxWidth: 660, resizingBehavior: SCALE) {
          ...GatsbyContentfulSizes
        }
        title
        description
      }
      tags {
        title
        slug
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       date(formatString: "MMMM Do, YYYY")
//       heroImage {
//         sizes(maxWidth: 1180, background: "rgb:000000") {
//           ...GatsbyContentfulSizes_tracedSVG
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `
