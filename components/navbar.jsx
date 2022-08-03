import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
        <div className={styles.container}>
        <Link href="https://twitter.com/ZakhariAndrew"><a target="_blank"><Image src="/twitter.png" width="20px" height="20px"/></a></Link>
        <Link href="/"><a className={styles.navbarLink}>Home</a></Link> 
        <Link href="/projects"><a className={styles.navbarLink}>Projects</a></Link>  
        <Link href="/certifications"><a className={styles.navbarLink}>Certifications</a></Link>
        <Link href="/contact"><a className={styles.navbarLink}>Get in touch</a></Link>
        <Link href="/about"><a className={styles.navbarLink}>About me</a></Link>
        <Link href="https://github.com/AndrewZakhari"><a target="_blank"><Image src="/github.png" width="20px" height="20px"/></a></Link>
        </div>
        </>
    )
}