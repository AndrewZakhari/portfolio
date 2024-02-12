import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useInView } from "react-intersection-observer"

const Projects = () => {

  const {ref , inView} = useInView()
  const [show, setShow] = useState(false)

    return (
        
        <div ref={ref} className="lg:min-h-screen min-h-[1600px] bg-black border-b-2 border-green-500">
          { inView &&
          <>
        <h1 className="text-red-500 bg-black font-primary text-5xl text-center animate-fadeIn py-10">Projects</h1>
        <div className="bg-black text-white text-2xl pb-11 lg:flex-nowrap flex-wrap font-primary flex justify-around">
            
            <div  className="flex flex-col items-center  transition-all duration-500 gap-5 animate-slideIn2sRev
             border-green-500 w-3/4 lg:w-1/3  lg:border-transparent border-b-2  p-2 hover:border-green-500">
            <h1 className="text-3xl text-yellow-300">IP LookUp</h1>
            <Image className="lg:pb-4 lg:h-[235px]" alt="" src='/3jeeba.jpg' width="464" height="144" />
              <Link target="_blank" href="https://3jeeeba.com" className="text-md text-green-500 hover:underline lg:no-underline underline
            transition-all hover:cursor-pointer ">Visit</Link>
          <p className="text-center">My latest work,<br/> A Webapp for selling Pens, Pencils and Notes. </p>
            </div>
            <div className="flex w-3/4 flex-col items-center tranistion-all duration-500 gap-5 animate-fadeIn
             border-green-500 lg:w-1/3 lg:border-transparent border-b-2 p-2 hover:border-green-500">
            <h1 className="text-3xl text-yellow-300">Guitaristo</h1>
            <Image className="lg:pb-4 lg:h-[235px]" alt="" src="/e-commerce1.jpg" width="464" height="144"/>
              <Link target="_blank" href="https://guitaristo.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p>A Responsive E-commerce project with an easy to use UI, light and dark modes depending on the perference of the user </p>
            </div>
            <div className="flex w-3/4  flex-col items-center transition-all duration-500 gap-5 animate-slideIn2s
            bonamerder-green-500 lg:w-1/3 lg:border-transparent border-b-2 p-2 hover:border-green-500">
            <h1 className="text-3xl text-yellow-300">BWM Clone</h1>
            <Image className="lg:pb-4 lg:h-[235px]" alt="" src="/BMW.jpg" width="464" height="144"/>
            <Link target="_blank" href="https://car-landing-page-flax.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p>A Responsive BMW&apos;s Website clone with some edits to the UI </p>
            </div>

        </div>
        { !show &&
        <div className="flex flex-col items-center">
        <h1 onClick={() => setShow(true)} className="font-primary text-center bg-black border-2 border-yellow-300 
         text-yellow-300 py-2.5 my-10 px-5 text-3xl hover:cursor-pointer hover:bg-opacity-90 hover:bg-yellow-300 hover:text-black 
         ">Show More Projects</h1>
        </div>
        }{ show &&
          <div className="flex flex-col justify-center  transition-all overflow-x-hidden">
          <h1 onClick={() => setShow(false)} className="font-primary text-center text-yellow-300 self-center text-3xl hover:cursor-pointer py-2.5 px-5 w-fit my-10 border-2 border-yellow-300 hover:bg-opacity-90 hover:text-black hover:bg-yellow-300">Show Less Projects</h1>
          <div className="flex flex-row justify-around items-center ">          
          <div className="flex flex-col gap-5 text-2xl animate-slideIn1sRev lg:h-[470px] max-h-440px overflow-hidden  items-center p-2 w-3/4 mb-20 lg:mb-10 lg:w-fit transition-all duration-500 lg:border-transparent border-green-500 hover:border-green-500 border-b-2  font-primary">
            <h1 className="text-3xl  text-yellow-300">RELEVANT Digital Agency</h1>
            <Image className="lg:pb-2 lg:h-[235px]" alt="" src="/RELEVANT.jpg" width="464" height="144"/>
            <Link target="_blank" href="https://agency-project-psi.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p>A Responsive Digital Agency Website<br/> focused on my front-end skills done in 2021</p>
          </div>
          <div className="flex flex-col gap-5 text-2xl lg:h-[470px] animate-slideIn1s items-center p-2 w-3/4 mb-20 lg:mb-10 lg:w-fit transition-all duration-500 lg:border-transparent border-green-500 hover:border-green-500 border-b-2  font-primary">
            <h1 className="text-3xl  text-yellow-300">IP Lookup</h1>
            <Image className="lg:pb-2 lg:h-[235px]" alt="" src="/ip-lookup.jpg" width="464" height="144"/>
            <Link target="_blank" href="https://ip-lookup-self.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p>A Webapp that helps you find information about <br/> a given IP Adress using a third party API</p>
          </div> 
          </div>
          </div>
        }
        </>
}
        </div>
        
    )
}
export default Projects