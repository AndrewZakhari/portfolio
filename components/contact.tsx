import Link from "next/link"
import { useInView } from "react-intersection-observer"

const Contact = () => {
    const {ref, inView} = useInView()
    return (
        <div ref={ref} className="font-primary text-white flex justify-center border-b-2 border-green-500 flex-col items-center min-h-screen">
            { inView &&
            <>
            <h1 className="text-5xl text-red-500 animate-fadeIn text-center py-10">
              About & Contact Info
            </h1>
           <div className="border-green-500 border-2 animate-slideIn2s p-6 text-2xl ">
            <p className="text-center">
               Hi, I am 
               <Link className="text-yellow-300 px-2" target="_blank" href="https://github.com/AndrewZakhari">Andrew Zakhari</Link>
                and I am a Full-Stack Web Developer and I am studying Computer Science in Helwan University / Egypt ,<br/>
                 I have 3 years of expeirence in web development.<br/>
                 Using Technologies like Next js , React js , Tailwind CSS , TypeScript , Nodejs, Django and Flask to develope reliable and scalable web apps <br/>
                and in a field that is developing fast I am eager to learn and grow.<br/>   
            To Contact me email me at:
             <Link className="text-yellow-300" target="_blank" href="mailto:andrewzakhari5@gmail.com">andrewzakhari5@gmail.com</Link>
             <br/>
            or DM me at  
            <Link target="_blank" className="text-yellow-300" href="https://wa.me/+201019303179"> Whatsapp </Link>
            <Link target="_blank" className="text-yellow-300" href="https://www.linkedin.com/in/andrewzakhari">LinkedIn</Link>

           </p>
            </div> 
            </>
}
        </div>
    )
}

export default Contact