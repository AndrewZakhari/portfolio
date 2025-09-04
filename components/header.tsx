'use client'
import Image from "next/image"


const Header = () => {
    return (
       <> 
        <div className="bg-black "> 
            
        <div  
        className="h-screen flex font-primary flex-col lg:flex-row 
         lg:bg-right bg-black lg:items-baseline lg:p-0 fill-green-500 gap-2 lg:pt-36 w-screen justify-around  ">
            <div className="flex flex-col items-center lg:self-start lg:pt-32 gap-2 bg-black bg-opacity-40 p-4 border-green-500 border-4 lg:border-none">
            <h1 className="text-white text-4xl lg:text-5xl overflow-visible animate-scale1s  h-16 flex font-extrabold">
                <span className="lg:border-green-500 lg:border-b-4 rounded-sm  ">And</span>
                rew A. Zakhari</h1>
            <h2 className="text-white animate-scale2s  text-2xl">Full Stack Web Developer</h2>
            </div>
            <div className="relative block-inline">
    <Image
      src="/andrew4.jpeg"
      alt="Portrait"
      className="rounded-full  h-auto object-contain"
        width="300" height="400"
    />
   
            </div>
            
        </div>
                </div>
        </>
    ) 
}

export default Header