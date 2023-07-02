import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/portfolio/projects" className={styles.item}>
          <span className={styles.title}>Projects</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio