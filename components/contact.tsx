import Link from "next/link"
import { useInView } from "react-intersection-observer"

const Contact = () => {
    const {ref, inView} = useInView()
    return (
        <div ref={ref} className="font-primary text-white flex justify-center border-b-2 border-green-500 flex-col items-center  min-h-screen">
            { inView &&
            <>
            <h1 className="text-5xl text-red-500 animate-fadeIn text-center py-10">
              About & Contact Info
            </h1>
           <div className="border-green-500 border-2 animate-slideIn2s p-6 text-2xl ">
            <p className="text-center">Hi, My name is Andrew , I&apos;m a full stack web devoloper with a passion in learning new technologies <br/>
            My Developing journey starts with designing the UI with the UX in mind then<br/>
             implementing the back-end if needed then the front-end and then testing the whole Web App<br/>
            To Contact me email me at: <Link className="text-yellow-300" target="_blank" href="mailto:andrewzakhari5@gmail.com">andrewzakhari5@gmail.com</Link><br/>
            or DM me at 
            <Link target="_blank" className="text-yellow-300" href="https://www.instagram.com/andrewadel__/?next=%2F"> Instagram </Link>
            <Link target="_blank" className="text-yellow-300" href="https://web.facebook.com/andy.adel.984/" >Facebook </Link>
            <Link target="_blank" className="text-yellow-300" href="https://wa.me/+201019303179">Whatsapp </Link>

           </p>
            </div> 
            </>
}
        </div>
    )
}

export default Contact