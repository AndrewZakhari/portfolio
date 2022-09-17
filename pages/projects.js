import Navbar from "../components/navbar";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/projects.module.css"

export default function Projects() {
    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <label>Digital Agency Project</label>
                <div className={styles.image}>
                    <Link href="https://agency-project-psi.vercel.app/">
                    <a target='_blank'>
        <Image src="/agency.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
                <label>Blogging Website</label>
                <div className={styles.image}>
                    <Link href="https://blogger-andrewzakhari.vercel.app/">
                    <a target='_blank'>
        <Image src="/blogger.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
            <label>Password Manager Project</label>
            <div className={styles.image}>
                <Link href="https://password-manager-phi.vercel.app">
                <a target="_blank">
        <Image src="/password-manager.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
            <label>25 + 5 Clock</label>
            <div className={styles.image}>
                <Link href="https://certification-project5.herokuapp.com/">
                <a target="_blank">
        <Image src="/clock.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
            <label>Markdown Previewer</label>
            <div className={styles.image}>
                <Link href="https://certificate-project2.herokuapp.com/">
                <a target="_blank">
        <Image src="/markdown-previewer.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
            <label>Random Quote Machine</label>
            <div className={styles.image}>
                <Link href="https://certfictaion-project1.herokuapp.com/">
                <a target="_blank">
        <Image src="/quote-machine.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
            <label>Javascript Calculator</label>
            <div className={styles.image}>
                <Link href="https://certification-project4.herokuapp.com/">
                <a target="_blank">
        <Image src="/calculator.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
            <label>Drum Machine</label>
            <div className={styles.image}>
                <Link href="https://certification-project3.herokuapp.com/">
                <a target="_blank">
        <Image src="/drum-machine.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        </div>
        </>
    )
}