'use client'
import Image from "next/image"


const Header = () => {
    return (
       <> 
        <div className="bg-black "> 
            
        <div  
        className="h-screen flex bg-top font-primary flex-col lg:flex-row bg-no-repeat lg:bg-no-repeat bg-fixed
         lg:bg-right bg-black lg:items-baseline lg:p-0 fill-green-500  items-center gap-2 w-screen justify-around  ">
            <div className="flex flex-col items-center lg:self-start lg:pt-32 gap-2 bg-black bg-opacity-40 p-4 border-green-500   border-4 lg:border-none">
            <h1 className="text-white text-4xl lg:text-5xl overflow-visible animate-scale1s  h-16 flex font-extrabold">
                <span className="lg:border-green-500 lg:border-b-4 rounded-sm  ">And</span>
                rew A. Zakhari</h1>
            <h2 className="text-white animate-scale2s  text-2xl">Full Stack Web Developer</h2>
            </div>
            <div className="relative block-inline">
    <Image
      src="/portrait1.png"
      alt="Portrait"
      className="rounded-lg w h-auto object-contain"
        width="300" height="400"
    />
    <svg
      className="absolute inset-0 w-80 h-auto top-0 left-0 pointer-events-none"
      viewBox="0 0 400 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M150,200
          C140,190, 120, 140, 140, 115
          C140,120, 230, 40, 270,150
          C265,150, 275, 160, 250, 200
          C250,200, 260, 190, 240, 235
          C240,235, 225, 265, 240, 265
          C310,285, 350,300,330,460
          L325,500
          L100,500
          
          L
          Z
        "
        fill="none"
        stroke="#00ff00"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="animate-draw-frame hover:animate-draw-frame [stroke-dasharray:1000] [stroke-dashoffset:1000]"
      /><path
        d="
          M150,200
          C150,200, 170, 245,160,270
          C160, 270, 70, 310, 80, 330
          C80, 320, 70, 400, 100, 500
          L
          Z
        "
        fill="none"
        stroke="#00ff00"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="animate-draw-frame hover:animate-draw-frame [stroke-dasharray:1000] [stroke-dashoffset:1000]"
      />
    </svg>
            </div>
            
        </div>
                </div>
        </>
    ) 
}

export default Header