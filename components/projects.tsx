import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

const Projects = () => {

  const {ref , inView} = useInView()

    return (
        
        <div ref={ref} className="lg:min-h-screen h-[1400px] bg-black border-b-2 border-green-500">
          { inView &&
          <>
        <h1 className="text-red-500 bg-black font-primary text-5xl text-center animate-fadeIn py-10">Projects</h1>
        <div className="bg-black text-white text-2xl pb-11 lg:flex-nowrap flex-wrap font-primary flex justify-around">
            
            <div  className="flex flex-col items-center  transition-all duration-500 gap-5 animate-slideIn2sRev
             border-green-500 w-3/4 lg:w-1/3  lg:border-transparent border-b-2  p-2 hover:border-green-500">
            <h1 className="text-3xl text-yellow-300">IP LookUp</h1>
            <Image alt="" src='/ip-lookup.jpg' width="464" height="144" />
              <Link target="_blank" href="https://ip-lookup-self.vercel.app" className="text-md text-green-500 hover:underline lg:no-underline underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p>A Simple and Responsive project to lookup information about your ip address proving my ability to work with thrid party APIs </p>
            </div>
            <div className="flex w-3/4 flex-col items-center tranistion-all duration-500 gap-5 animate-fadeIn
             border-green-500 lg:w-1/3 lg:border-transparent border-b-2 p-2 hover:border-green-500">
            <h1 className="text-3xl text-yellow-300">E Commerce</h1>
            <Image className="lg:pb-4" alt="" src="/e-commerce1.jpg" width="464" height="144"/>
              <Link target="_blank" href="https://e-commerce-sepia-omega.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p>A Simple and Responsive E-commerce project with an easy to use UI, light and dark modes depending on the perference of the user </p>
            </div>
            <div className="flex w-3/4  flex-col items-center transition-all duration-500 gap-5 animate-slideIn2s
            border-green-500 lg:w-1/3 lg:border-transparent border-b-2 p-2 hover:border-green-500">
            <h1 className="text-3xl text-yellow-300">BWM Clone</h1>
            <Image className="lg:pb-2" alt="" src="/BMW.jpg" width="464" height="144"/>
            <Link target="_blank" href="https://car-landing-page-flax.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p>A Responsive BMW&apos;s Website clone with some edits to the UI </p>
            </div>

        </div>
        </>
}
        </div>
        
    )
}
export default Projects