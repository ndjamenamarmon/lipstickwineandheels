import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation" className={styles.navigationContainer}>
    <header className={styles.navigationLogo}>
      <Link to="/">Lipstick, Wine, and Heels</Link>
    </header>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/page/about">About</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/tag/">Topics</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
