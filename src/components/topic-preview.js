import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './topic-preview.module.css'

export default ({ topic }) => (
  <div className={styles.preview}>
    <div className={styles.imageContainer}>
      <Link to={`/tag/${topic.slug}`}>
        {topic.image && <Img alt="" sizes={topic.image.sizes} />}
        <h3 className={styles.topicTitle}>{topic.title}</h3>
      </Link>
    </div>
  </div>
)
