import { redirect } from "next/dist/server/api-utils"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"

const Projects = () => {

  const {ref , inView} = useInView()
  const [view , setView] = useState(false)
  const [show, setShow] = useState(false)

  useEffect( () => {
    if(inView === true) {
      setView(true)
      
    }
  }, [inView]) 

    return (
        
        <div ref={ref} className="lg:min-h-screen min-h-[1600px] bg-black border-b-2 border-green-500">
          { view &&
          <>
        <h1 className="text-red-500 bg-black font-primary text-5xl text-center animate-fadeIn py-10">Projects</h1>
        <div className="bg-black text-white text-2xl pb-11 md:flex-col md:items-center lg:flex-row lg:flex-nowrap flex-wrap font-primary flex justify-around">
            
            <div  className="flex flex-col items-center  transition-all duration-500 gap-5 animate-slideIn2sRev 
             border-green-500 w-full lg:w-1/3 md:w-3/4 lg:border-transparent border-b-2 border-opacity-50 py-5 lg:p-2 hover:border-green-500">
            <h1 className="text-3xl text-yellow-300">DevBlog</h1>
            <Image className="lg:pb-4 lg:h-[300px]" alt="" src='/devBlog.png' width="464" height="160" />
              <Link target="_blank" href="https://andromeda-u-is-mxff.vercel.app/" className="text-md text-green-500 hover:underline lg:no-underline underline
            transition-all hover:cursor-pointer ">Visit</Link>
          <p className="text-center">
            A Ui for a developer Blog web app created to train cuttin edge AI models.
          </p>
            </div>
            <div className="flex w-full md:w-3/4 flex-col items-center tranistion-all border-opacity-50 duration-500 gap-5 animate-fadeIn
             border-green-500 lg:w-1/3 lg:border-transparent border-b-2 py-5 lg:p-2 hover:border-green-500">
            <h1 className="text-3xl text-yellow-300">Brick Breaker</h1>
            <Image className="lg:pb-4 lg:h-[300px]" alt="" src="/gameWebApp.png" width="464" height="160"/>
              <Link target="_blank" href="https://andromeda-u-is-g7nc.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p className="text-center">A web app for a game prompted and created to train cutting edge AI models.</p>
            </div>
            <div className="flex w-full md:w-3/4 flex-col items-center tranistion-all border-opacity-50 duration-500 gap-5 animate-fadeIn
             border-green-500 lg:w-1/3 lg:border-transparent border-b-2 py-5 lg:p-2 hover:border-green-500">
            <h1 className="text-3xl  text-yellow-300">RedisDB</h1>
            <Image className="lg:pb-2 lg:h-[300px]" alt="" src="/redis.png" width="200" height="300"/>
            <Link target="_blank" href="https://github.com/AndrewZakhari/redis" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p className="text-center">A Redis database clone built using C/C++ </p>
          </div>
        </div>
        { !show &&
        <div className="flex flex-col items-center">
        <h1 onClick={() => setShow(true)} className="font-primary text-center bg-black border-2 border-yellow-300 
         text-yellow-300 py-2.5 my-10 px-5 text-3xl hover:cursor-pointer hover:bg-opacity-90 hover:bg-yellow-300 hover:text-black 
         ">Show More Projects</h1>
        </div>
        }{ show &&
          <>
          <div className="flex flex-col justify-center min-h-full text-white transition-all overflow-x-hidden">
          <h1 onClick={() => setShow(false)} className="font-primary text-center text-yellow-300 self-center text-3xl hover:cursor-pointer py-2.5 px-5 w-fit my-10 border-2 border-yellow-300 hover:bg-opacity-90 hover:text-black hover:bg-yellow-300">Show Less Projects</h1>
          <div className="flex lg:flex-row  flex-col justify-around items-center ">          
            <div className="
            flex flex-col gap-5 text-2xl lg:h-[500px] animate-slideIn1s items-center py-5 lg:p-2 w-full md:w-fit mb-20 lg:mb-10 lg:w-1/3 transition-all
             duration-500 lg:border-transparent border-green-500 hover:border-green-500 border-b-2 border-opacity-50  font-primary">
            <h1 className="text-3xl text-yellow-300">Discord Clone</h1>
            <Image className="lg:pb-4 lg:h-[300px]" alt="" src="/discordClone.png" width="464" height="144"/>
            <Link target="_blank" href="https://andromeda-u-is-zt7z.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p className="text-center">A Discord clone created to train AI models. </p>
            </div> 
          <div className="flex flex-col  gap-5 text-2xl lg:h-[500px] animate-slideIn1s items-center py-5 lg:p-2 w-full md:w-fit
            mb-20 lg:mb-10 lg:w-1/3 transition-all duration-500 lg:border-transparent border-green-500 hover:border-green-500 border-b-2 border-opacity-50  font-primary">
            <h1 className="text-3xl  text-yellow-300">Wave Interference Simulator</h1>
            <Image className="lg:pb-2 lg:h-[300px]" alt="" src="/waveInterSim.png" width="464" height="144"/>
            <Link target="_blank" href="https://andromeda-u-is-sa22.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p className="text-center">A wave interference simulator that shows the interactions of waves with each other built to train AI models.</p>
          </div> 
          <div className="
            flex flex-col gap-5 text-2xl lg:h-[500px] animate-slideIn1s items-center py-5 lg:p-2 w-full md:w-fit mb-20 lg:mb-10 lg:w-1/3 transition-all
             duration-500 lg:border-transparent border-green-500 hover:border-green-500 border-b-2 border-opacity-50  font-primary">
            <h1 className="text-3xl text-yellow-300">Podcast Pro</h1>
            <Image className="lg:pb-4 lg:h-[300px]" alt="" src="/podcastPro.png" width="464" height="144"/>
            <Link target="_blank" href="https://andromeda-u-is-l1d4.vercel.app/" className="text-md text-green-500 lg:no-underline underline hover:underline
            transition-all hover:cursor-pointer ">Visit</Link>
            <p className="text-center">A podcasting platform UI for displaying and playing podcasts with features like adding to playlists and favorites.
              </p>
            </div> 
          </div>
          </div>
          <div className="flex flex-col items-center">
          <Link href="https://github.com/andrewzakhari" target="_blank">
        <h1 className="font-primary text-center bg-black border-2 border-yellow-300 
         text-yellow-300 py-2.5 my-10 px-5 text-3xl hover:cursor-pointer hover:bg-opacity-90 hover:bg-yellow-300 hover:text-black 
         ">Visit More projects on github</h1>
         </Link>
        </div>
          </>
        }
        </>
}
        </div>
        
    )
}
export default Projects
