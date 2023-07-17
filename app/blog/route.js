import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post/`, {
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
     {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className="w-16 md:w-32 lg:w-48 flex flex-col md:flex-row items-center justify-center autofill:h-16 md:h-32 lg:h-48 md:mb-0 radius-ellipse hover:120">
            <Image 
              src={item.img} 
              alt=""
              width={200}
              height={100}
              className="w-16 md:w-32 lg:w-48 flex flex-col md:flex-row items-center justify-center autofill:h-16 md:h-32 lg:h-48 md:mb-0 radius-ellipse hover:scale-110"
            />
          </div>
      <div className={styles.content}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.desc}>{item.desc}</p>
      </div>
    </Link>
       ))}
    </div>
  );
}

export default Blog;