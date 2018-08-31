import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import readingTime from 'reading-time'
import { DiscussionEmbed } from 'disqus-react'
import PrevNextBlog from '../components/prev-next-blog'

import styles from './blog-post.module.css'
import PageTransition from 'gatsby-plugin-page-transitions'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlog')
    const posts = get(this.props, 'data.allContentfulBlog.edges')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    // console.log(post)
    const disqusShortname = 'webdevabq'
    const disqusConfig = {
      identifier: post.slug,
      title: post.title,
    }

    let prevPost, nextPost, currentPostIndex

    // node = node.node ? node.node : node
    console.log(posts)

    for (let i = 0; i < posts.length; i++) {
      // console.log(i)
      // console.log(posts[i])
      if (
        (posts[i].node && posts[i].node.slug === post.slug) ||
        posts[i].slug === post.slug
      ) {
        currentPostIndex = i
      }
    }

    let prevPostIndex = currentPostIndex - 1
    let nextPostIndex = currentPostIndex + 1

    prevPost = posts[prevPostIndex]
    nextPost = posts[nextPostIndex]

    console.log('prevPost', prevPost)
    console.log('nextPost', nextPost)

    console.log(post)

    return (
      <PageTransition>
        <div
          style={{ background: '#fff' }}
          className={styles.blogPostContainer}
        >
          <Helmet title={`${post.title} | ${siteTitle}`}>
            <html lang="en" />
            <meta name="description" content={post.description} />
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

          <PrevNextBlog
            prevPost={prevPost && prevPost.node ? prevPost.node : prevPost}
            nextPost={nextPost && nextPost.node ? nextPost.node : nextPost}
          />

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
      slug
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
    allContentfulBlog(sort: { fields: [date], order: ASC }) {
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
            sizes(maxWidth: 200, maxHeight: 200, resizingBehavior: CROP) {
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
