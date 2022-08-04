import Link from "next/link";
import Navbar from "../components/navbar";
import styles from '../styles/about.module.css';


export default function About() {
    return (
        <>
        <Navbar /> 
        <div className={styles.container}>
            <div className={styles.about}>
                <p className={styles.p}>Hi , I am a Freelance Full Stack Web Developer,
                <br />
                 Mostly i work with Next.js using its power to create API endpoints, <br />
                Front-end templates with React and for integration with a database i use MongoDB.<br />
                If you want to get in touch feel free to email me at:<br />
                 <Link href="mailto:andrewzakhari5@gmail.com"><a className={styles.link} target="_blank">andrewzakhari5@gmail.com</a></Link>
                </p>
            </div>
        </div>
        </>
    )
}