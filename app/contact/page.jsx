import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
  title: "Clodron - Contact Information",
  description: 'This is Contact Page.',
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Start!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/1.svg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="E-mail" className={styles.input} />
          <textarea
            className={styles.textarea}
            placeholder="Your Message"
            cols="20"
            rows="5">
          </textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;