import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import {  useState } from "react";
import useSwr from 'swr';



export default function Navbar() {
    const [opened, setOpen] = useState(false)

    const fetcher = (...args) => fetch(...args).then((res) => res.json() )

    const {data , error } = useSwr('/api/hello', fetcher)

    if(error) return <div>Failed to Load</div>
    if(!data) return <div>Loading...</div>

    if(typeof window !== 'undefined'){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width
    console.log(width)
    
    if(width > 480){
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
    }else{
        if(!opened){
        return (
        <div className={styles.mobileContainer0}>
            <a onClick={() => setOpen(true)}><Image src="/menu.png" width="20px" height="20px"/></a>
        </div>
        )
    }else if(opened){
        return (
            <div className={styles.mobileContainer1}>
               <a onClick={() => setOpen(false)}> <Image src="/menu.png" width="20px" height="20px"/></a>
                <Link href="https://twitter.com/ZakhariAndrew"><a target="_blank"><Image src="/twitter.png" width="20px" height="20px"/></a></Link>
                <Link href="/"><a className={styles.navbarLink}>Home</a></Link> 
                <Link href="/projects"><a className={styles.navbarLink}>Projects</a></Link>  
                <Link href="/certifications"><a className={styles.navbarLink}>Certifications</a></Link>
                <Link href="/contact"><a className={styles.navbarLink}>Get in touch</a></Link>
                <Link href="/about"><a className={styles.navbarLink}>About me</a></Link>
                <Link href="https://github.com/AndrewZakhari"><a target="_blank"><Image src="/github.png" width="20px" height="20px"/></a></Link>
            </div>
        )
    }
    }
    }
}
