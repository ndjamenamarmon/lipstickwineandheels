import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import readingTime from 'reading-time'

import styles from './article-preview.module.css'

export default ({ article }) => (
  <div className={styles.preview}>
    <div className={styles.imageContainer}>
      {article.postImage && <Img alt="" sizes={article.postImage.sizes} />}
    </div>
    <div className={styles.contentContainer}>
      <h2 className={styles.previewTitle}>
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h2>
      {article.tags && (
        <p className={styles.tag}>
          {article.tags.map(tag => (
            <Link to={`/tag/${tag.slug}`} key={tag.slug}>
              {tag.title}
            </Link>
          ))}
        </p>
      )}
      <small>
        {article.date} <span className={styles.bullet}>&bull;</span>
        {readingTime(article.postContent.childMarkdownRemark.html).text}
      </small>
      {article.description && (
        <div
          className="article-preview-description"
          dangerouslySetInnerHTML={{
            __html: article.description.childMarkdownRemark.html,
          }}
        />
      )}
      <p className={styles.articleReadMore}>
        <Link to={`/blog/${article.slug}`} className="button button-secondary">
          Continue Reading
        </Link>
      </p>
    </div>
  </div>
)
