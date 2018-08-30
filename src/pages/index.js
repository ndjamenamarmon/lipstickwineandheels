import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import TopicPreview from '../components/topic-preview'
import { SocialIcon } from 'react-social-icons'
import PageTransition from 'gatsby-plugin-page-transitions'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allContentfulBlog.edges')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const tags = get(this, 'props.data.allContentfulTag.edges')

    // console.log(posts)

    return (
      <PageTransition>
        <div style={{ background: '#fff' }}>
          <Helmet>
            <html lang="en" />
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>
          <div className="wrapper">
            <h1 className="section-headline">Recent Articles</h1>
            <ul className="article-list">
              {posts.map(node => {
                node = node.node ? node.node : node
                // console.log(new Date() >= new Date(node.date))
                if (new Date() >= new Date(node.date)) {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                }
              })}
            </ul>

            <h2 className="section-headline">Topics</h2>
            <ul className="topic-list">
              {tags.map(node => {
                node = node.node ? node.node : node
                return (
                  <li key={node.slug}>
                    <TopicPreview topic={node} />
                  </li>
                )
              })}
            </ul>

            <h2 className="section-headline">Follow Me</h2>
            <div className="social-icon-container">
              <SocialIcon url="https://twitter.com/JamenaMcInteer" />
              <SocialIcon url="https://www.instagram.com/jamena.mcinteer/" />
              <SocialIcon url="https://www.linkedin.com/in/jamena-mcinteer-5511aa45/" />
            </div>
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query pageQuery {
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
    allContentfulTag(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          slug
          image {
            sizes(maxWidth: 300, maxHeight: 300, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes
            }
            title
          }
        }
      }
    }
  }
`

// export const pageQuery = graphql`
//   query HomeQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulSizes_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           heroImage: image {
//             sizes(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulSizes_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `
