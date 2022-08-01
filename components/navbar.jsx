import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <>
        <div className={styles.container}>
        <Link href="#"><a className={styles.navbarLink}>Projects</a></Link>  
        <Link href="#"><a className={styles.navbarLink}>Certifications</a></Link>
        <Link  href="#"><a className={styles.navbarLink}>Get in touch</a></Link>
        <Link href="#"><a className={styles.navbarLink}>About me</a></Link>
        </div>
        </>
    )
}