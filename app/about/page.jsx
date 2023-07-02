import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/Button/Button'


const About = () => {
  return (
<div className={styles.container}>
      <div className={styles.imgContainer}>
          <Image src="/about1.jpg" fill={true} alt="" className={styles.img}/>
        <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Your Digital Partner</h1>
            <h2 className={styles.imgDesc}>Write your future with digital experiences</h2>
          </div>
        </div>
  <div className={styles.textContainer}>
         <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro aut consequuntur, totam, dolorem accusantium incidunt velit id, cumque fugit dicta exercitationem facilis ea. 
            <br />
            <br />
            Quod aliquid temporibus ipsa! Totam, assumenda vero??
          </p>
         </div>
            <div className={styles.item}>
              <h1 className={styles.title}>What we do?</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto, tempore fugiat quisquam quia similique. Dolor iste rerum inventore ipsa sequi facere reiciendis saepe optio. Neque dolorem mollitia quasi veritatis?
                  <br />
                  <br /> - Perfect Websites 
                  <br />
                  <br /> - Fast and Web3 Integrations
                  <br />
                  <br /> - Digital Marketing
                </p>
                <Button url="/contact" text="Contact Us"/>
            </div>
  </div>
</div>
  )
}

export default About