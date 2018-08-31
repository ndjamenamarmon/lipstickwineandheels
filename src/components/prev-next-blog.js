import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './prev-next-blog.module.css'

export default ({ prevPost, nextPost }) => (
  <ul className={styles.prevNext__container}>
    {prevPost && (
      <li className={styles.prevNext__itemPrev}>
        <Link
          to={`/blog/${prevPost.slug}`}
          className={`button button-secondary ${styles.prevNext__link}`}
        >
          <div className={styles.prevNext__contentContainer}>
            <span className={styles.prevNext__heading}>Previous</span>
            <h2 className={styles.prevNext__title}>{prevPost.title}</h2>
            <p className={styles.prevNext__date}>{prevPost.date}</p>
          </div>
          <div className={styles.prevNext__imageContainer}>
            {prevPost.postImage && (
              <Img
                alt={prevPost.postImage.title}
                sizes={prevPost.postImage.sizes}
              />
            )}
          </div>
        </Link>
      </li>
    )}
    {nextPost && (
      <li className={styles.prevNext__itemNext}>
        <Link
          to={`/blog/${nextPost.slug}`}
          className={`button button-secondary ${styles.prevNext__link}`}
        >
          <div className={styles.prevNext__imageContainer}>
            {nextPost.postImage && (
              <Img
                alt={nextPost.postImage.title}
                sizes={nextPost.postImage.sizes}
              />
            )}
          </div>
          <div className={styles.prevNext__contentContainer}>
            <span className={styles.prevNext__heading}>Next</span>
            <h2 className={styles.prevNext__title}>{nextPost.title}</h2>
            <p className={styles.prevNext__date}>{nextPost.date}</p>
          </div>
        </Link>
      </li>
    )}
  </ul>
)
