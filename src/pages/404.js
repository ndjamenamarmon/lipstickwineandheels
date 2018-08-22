import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import PageTransition from 'gatsby-plugin-page-transitions'

class NotFoundPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <PageTransition>
        <div style={{ background: '#fff' }}>
          <Helmet>
            <html lang="en" />
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>
          <div className="wrapper">
            <div className="page-container">
              <h1 className="section-headline">Page Not Found</h1>
              <p>
                Looks like you've followed a broken link or entered a URL that
                doesn't exist on this site. Sorry about that! Try checking out{' '}
                <Link to="/blog/">our blog</Link> or{' '}
                <Link to="/">homepage</Link> instead.
              </p>
            </div>
          </div>
        </div>
      </PageTransition>
    )
  }
}

export default NotFoundPage
