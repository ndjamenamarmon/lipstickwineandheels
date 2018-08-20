import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './style-guide.module.css'

class StyleGuide extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`Style Guide | ${siteTitle}`}>
          <html lang="en" />
        </Helmet>
        <div className={styles.heroContainer}>
          <div className={styles.hero}>
            <h1>Style Guide</h1>
          </div>
        </div>
        {/* <div className="wrapper"> */}
        <div className={styles.pageContainer}>
          <h1>Typography</h1>
          <p>Body text is set to Avenir. Headings are set to Crimson Text.</p>
          <p>The base font size is 20px with a line height of 1.45.</p>
          <p>
            Links don't have a text-decoration: underline, but a border-bottom
            instead, with a slightly more transparent version of the color of
            the text (see color section).
          </p>
          <h1>Heading One</h1>
          <p>
            An example paragraph with <strong>strong text</strong>,{' '}
            <em>emphasized text</em> and <a href="#">a link</a>, spanning
            multiple lines so you can see the line-height.
          </p>
          <h2>Heading Two</h2>
          <p>
            An example paragraph with <strong>strong text</strong>,{' '}
            <em>emphasized text</em> and <a href="#">a link</a>, spanning
            multiple lines so you can see the line-height.
          </p>
          <h3>Heading Three</h3>
          <p>
            An example paragraph with <strong>strong text</strong>,{' '}
            <em>emphasized text</em> and <a href="#">a link</a>, spanning
            multiple lines so you can see the line-height.
          </p>
          <h4>Heading Four</h4>
          <p>
            An example paragraph with <strong>strong text</strong>,{' '}
            <em>emphasized text</em> and <a href="#">a link</a>, spanning
            multiple lines so you can see the line-height.
          </p>

          <h1>Color</h1>
          <p>
            There is <span style={{ color: '#D51034' }}>one accent color</span>,
            all other colors are monochromatic grays, except when depicting code
            which may be in <span style={{ color: '#0064ff' }}>blue.</span>
          </p>
          <div className={styles.colorBlockContainer}>
            <div className={styles.colorBlockBlack}>
              <p>
                Background<br />#373f49
              </p>
              <p>
                Foreground<br />#EEE
              </p>
            </div>
            <div className={styles.colorBlockMediumGray}>
              <p>
                Background<br />#DDD
              </p>
              <p>
                Foreground<br />#373f49
              </p>
            </div>
            <div className={styles.colorBlockGray}>
              <p>
                Background<br />#EEE
              </p>
              <p>
                Foreground<br />#373f49
              </p>
            </div>
            <div className={styles.colorBlockWhite}>
              <p>
                Background<br />#FFF
              </p>
              <p>
                Foreground<br />#373f49
              </p>
            </div>
            <div className={styles.colorBlockCrimson}>
              <p>
                Background<br />#D51034
              </p>
              <p>
                Foreground<br />#EEE
              </p>
            </div>
          </div>
          <h1>Buttons</h1>
          <p>
            <button>Default Button</button>
          </p>
          <p>
            <button className="button-secondary">Secondary Button</button>
          </p>
          <p>
            <button className="button-muted">Muted Button</button>
          </p>
        </div>
      </div>
    )
    // </div>
  }
}

export default StyleGuide

export const pageQuery = graphql`
  query StyleGuideQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
