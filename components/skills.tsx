import { useInView } from "react-intersection-observer"

const Skills = () => {
    const {ref, inView }  = useInView()
   
    return (
        <>
        <div ref={ref} className="bg-black text-white text-3xl min-h-screen  border-b-2 border-green-500  font-primary flex flex-col items-center ">
            { inView &&
                <>
            <h1 className="text-5xl text-red-500 my-10 animate-fadeIn">Skills</h1>
            <div className="gap-12 flex flex-col animate-slideIn2s">
                <div className="flex justify-between items-center lg:gap-12">
                    <h1>JavaScript<br/>/TypeScript</h1>         
                    <div className="lg:w-60 border border-green-500 h-fit w-52 flex justify-center bg-green-500 text-black">
                    <p>Expert</p>
                    </div> 
                </div>
                <div className="flex justify-between lg:gap-12">
                    <h1>Next js</h1>
                    <div className="lg:w-60 border-2 border-green-500 h-fit w-52 flex text-black">
                        <div className="lg:w-3/4 bg-green-500 w-3/4 flex justify-center">
                        <p>Intermediate</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between lg:gap-12">
                    <h1>React</h1>
                    <div className="lg:w-60 border-2 border-green-500 w-52 h-fit flex text-black">
                        <div className="lg:w-3/4 bg-green-500 w-3/4 flex justify-center">
                        <p>Intermediate</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between lg:gap-12">
                    <h1>Tailwind CSS</h1>
                    <div className="lg:w-60 border-2 border-green-500 h-fit w-52 flex text-black bg-green-500 justify-center">
                    <p>Expert</p>
                    </div>
                </div>
                <div className="flex justify-between lg:gap-12">
                    <h1>Python</h1>
                    <div className="lg:w-60 border-2 border-green-500 h-fit w-52 flex text-black">
                        <div className="lg:w-3/4 bg-green-500 flex w-3/4 justify-center">
                        <p>Intermediate</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between lg:gap-12">
                    <h1>HTML</h1>
                    <div className="lg:w-60 border-2 border-green-500 w-52 h-fit flex text-black bg-green-500 justify-center">
                    <p>Expert</p>
                    </div>
                </div>
                <div className="flex justify-between lg:gap-12">
                    <h1>CSS</h1>
                    <div className="lg:w-60 border-2 border-green-500 h-fit w-52 flex text-black bg-green-500 justify-center">
                    <p>Expert</p>
                    </div>
                </div>
                <div className="flex justify-between lg:gap-12">
                    <h1>UI & UX</h1>
                    <div className="lg:w-60 border-2 border-green-500 h-fit w-52 flex text-black bg-green-500 justify-center">
                    <p>Expert</p>
                    </div>
                </div>
                <div>

                </div>
            </div>            
            </>
}
        </div>
        </>
    )
}
export default Skills