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
           <div className="border-green-500 border-2 max-w-3/4 animate-slideIn2s p-6 text-2xl ">
            <p className="text-center">
                I&apos;m Andrew Zakhari, a versatile Full-Stack Developer and AI Prompt Engineer currently creating impact at Outlier. With over 5 years of experience bridging the worlds of web development and artificial intelligence, I specialize in building intuitive, high-performance applications that solve real problems.

My technical toolkit includes modern frameworks and technologies such as Next.js, React, TypeScript, Node.js, and Tailwind CSS for frontend excellence, complemented by Django and Flask for robust backend solutions. This combination allows me to architect complete solutions from concept to deployment.

As an AI Prompt Engineer, I&apos;ve developed cutting-edge interfaces for AI applications while training and fine-tuning models to achieve measurable improvements in accuracy and performance. I thrive in the dynamic intersection of user experience design and artificial intelligence.

In an industry that evolves daily, I maintain a growth mindset—constantly learning, adapting, and embracing new challenges. My work is driven by a passion for creating technology that&apos;s not just functional, but delightful to use.

Let&apos;s connect and explore how we might work together to build something remarkable.
             <Link className="text-yellow-300" target="_blank" href="mailto:andrewzakhari5@gmail.com"> andrewzakhari5@gmail.com</Link>
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
