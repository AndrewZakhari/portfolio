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
          <a target="_blank">
    <Image priority alt='Password manager project' src="/password-manager.jpg" width='400px' height='250px'/>
    </a>
    </Link>
    </div>
    </>
    </div>
    <div className={styles.FrontEndProjects}>
      <label className={styles.label}>Front End Projects</label>

      <div className={styles.FrontEndProjectImages}>
        <div>
      <p className={styles.projectName}>Random Quote Machine</p>  
      <div className={styles.image}>
        <Link href="https://certfictaion-project1.herokuapp.com/">
          <a target="_blank">
            <Image priority alt="Random Quote Machine" src="/quote-machine.jpg" width='400px' height="250px"/>
          </a>
        </Link>
      </div>
      </div>
      <div>
      <p className={styles.projectName}>Markdown Previewer</p>
      <div className={styles.image}>
        <Link href="https://certificate-project2.herokuapp.com/">
          <a target="_blank">
            <Image priority alt="Markdown Previewer" src="/markdown-previewer.jpg" width="400px" height="250px"/>
          </a>
        </Link>
      </div>
      </div>
      <div>
        <p className={styles.projectName}>25 + 5 Clock</p>
        <div className={styles.image}>
          <Link href="https://certification-project5.herokuapp.com/">
            <a target="_blank">
              <Image priority alt="25 + 5 Clock"  src="/clock.jpg" width="400px" height="250px" />
            </a>
          </Link>
        </div>
      </div>
      </div>
    </div>
    <div className={styles.certifications}>
      <label className={styles.label}>Certifications</label>
      <div className={styles.certificaionImages}>
      <div>
        <p className={styles.projectName}>Front End Certification From FreeCodeCamp</p>
        <div className={styles.image}>
        <Link href="https://www.freecodecamp.org/certification/Andrew-A/front-end-development-libraries">
          <a target="_blank">
            <Image  alt="Front-end certification image" src="/front-end-certification.jpg" width="400px" height="250px"/>
          </a>
        </Link>
        </div>
      </div>
      <div>
        <p className={styles.projectName}>Back End Certification From FreeCodeCamp</p>
        <div className={styles.image}>
          <Link href="https://www.freecodecamp.org/certification/Andrew-A/back-end-development-and-apis">
            <a target="_blank">
              <Image alt="Back-end certification image" src="/back-end-certification.jpg" width="400px" height="250px"/>
            </a>
          </Link>
        </div>
      </div>
      </div>
      
      
    </div>
    
   </div>
   </>
  )
}
