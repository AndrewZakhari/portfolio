
const Header = () => {
    return (
       <> 
        <div className="bg-black"> 
        <div style={{backgroundImage: 'url(/andrew1.jpeg)'}} 
        className="h-screen flex bg-top font-primary flex-col bg-no-repeat lg:bg-no-repeat bg-fixed
         lg:bg-right bg-black lg:items-baseline lg:mb-10 lg:pl-60 fill-green-500 pt-64 items-center gap-2 w-screen ">
            <div className="flex flex-col items-center  gap-2 bg-black bg-opacity-40 p-4 border-green-500   border-4 lg:border-none">
            <h1 className="text-white text-4xl lg:text-5xl overflow-visible animate-scale1s  h-16 flex font-extrabold">
                <span className="lg:border-green-500 lg:border-b-4 rounded-sm  ">And</span>
                rew A. Zakhari</h1>
            <h2 className="text-white animate-scale2s  text-2xl">Full Stack Web Developer</h2>
            </div>
            
        </div>
        <div className="border-b-2 border-green-500 text-green-500 absolute bottom-0 w-screen">
                </div> 
                </div>
        </>
    ) 
}

export default Header