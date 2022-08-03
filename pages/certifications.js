import Navbar from "../components/navbar";
import styles from '../styles/certifications.module.css';
import Image from "next/image";
import Link from "next/link";

export default function Certifications() {
    return (
        <>
        <Navbar />
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <label>Front End Certificaton</label>
                <div className={styles.image}>
                    <Link href="https://www.freecodecamp.org/certification/Andrew-A/front-end-development-libraries">
                    <a target='_blank'>
        <Image src="/front-end-certification.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
            <label>Password Manager Project</label>
            <div className={styles.image}>
                <Link href="https://www.freecodecamp.org/certification/Andrew-A/back-end-development-and-apis">
                <a target="_blank">
        <Image src="/back-end-certification.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
            <label>25 + 5 Clock</label>
            <div className={styles.image}>
                <Link href="https://www.freecodecamp.org/certification/Andrew-A/javascript-algorithms-and-data-structures">
                <a target="_blank">
        <Image src="/javascript-certification.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        <div className={styles.imageWrapper}>
            <label>Markdown Previewer</label>
            <div className={styles.image}>
                <Link href="https://www.freecodecamp.org/certification/Andrew-A/responsive-web-design">
                <a target="_blank">
        <Image src="/responsive-web-design.jpg" width="400px" height="250px"/>
        </a>
        </Link>
        </div>
        </div>
        </div>
        </>
         
    )
}