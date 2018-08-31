import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './prev-next-blog.module.css'

export default ({ prevPost, nextPost }) => (
  <ul className={styles.prevNext__container}>
    {prevPost && (
      <li className={styles.prevNext__itemPrev}>
        <Link to={`/blog/${prevPost.slug}`} className="button button-muted">
          &laquo; {prevPost.title}
        </Link>
      </li>
    )}
    {nextPost && (
      <li className={styles.prevNext__itemNext}>
        <Link to={`/blog/${nextPost.slug}`} className="button button-muted">
          {nextPost.title} &raquo;
        </Link>
      </li>
    )}
  </ul>
)
