import Navbar from "../components/navbar";
import styles from '../styles/contact.module.css';
import Link from "next/link";
import Image from "next/image";


export default function Contact() {
    return (
        <>
         <>
        <Navbar /> 
        <div className={styles.container}>
            <div className={styles.about}>
                <h1>Contact Info</h1>
                <p className={styles.p}>
                Email: <Link className={styles.link} href="mailto:andrewzakhari5@gmail.com" >
                    <a className={styles.link}>
                    andrewzakhari5@gmail.com</a>
                    </Link>
                
                Visit me on <Link href="https://github.com/AndrewZakhari"><a className={styles.link}>
                    Github <Image src='/github.png' width="30px" height="30px"/></a></Link>

                Visit me on <Link href="https://twitter.com/ZakhariAndrew"><a className={styles.link}>
                    Twitter <Image src="/twitter.png" width="30px" height="30px"/></a></Link>
                </p>
            </div>
        </div>
        </>
        </>
    )
}