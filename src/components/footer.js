import React from 'react'
import Link from 'gatsby-link'
import styles from './footer.module.css'

export default () => (
  <footer className={styles.footerContainer}>
    <div className={styles.footerWrapper}>
      <p>
        <Link to="/style-guide/">Style Guide</Link>
      </p>
      <p>© 2018-2019. All Rights Reserved.</p>
      <p>Made with ❤️ and ☕ in Austin, Texas.</p>
      <p className={styles.footerBuilt}>
        Built by Jamena McInteer using GatsbyJS, ReactJS, GraphQL, and
        Contentful
      </p>
    </div>
  </footer>
)
