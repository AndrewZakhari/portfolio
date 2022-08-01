import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <Head>
    <title>Andrew Zakhari</title>

   </Head>
   <Navbar />
   <div className={styles.container}>
    <div className={styles.firstName}>Andrew <span className={styles.lastName}>Zakhari</span></div>
    <div className={styles.imageWrapper}>
      <label className={styles.label}>Full Stack Projects</label>

      <>
      <p className={styles.projectName}>Password Manager</p>
      <div className={styles.image}>
        <Link href="https://password-manager-phi.vercel.app">
          <a>
    <Image alt='Password manager project' src="/password-manager.jpg" width='400px' height='250px'/>
    </a>
    </Link>
    </div>
    </>
    </div>
   </div>
   </>
  )
}
