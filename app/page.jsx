import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";


export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <h1 className="bg-gradient-to-r from-orange-300 via-orange-500 to-amber-400 bg-clip-text text-transparent text-left text-3xl">
            Better future for your products!
          </h1>
            <p className={styles.desc}>
              We are turning your Idea into a Product. We manage your socials, automize your products. It is easy to create your own product in Web2 or Web3.
            </p>
            <Button url="/portfolio" text="See our products"/>
        </div>
        <div className={styles.item}>
          <Image src="/2.svg" width={300} height={300} alt="" className={styles.img} />
        </div>
    </div>

    
  )
  
}
