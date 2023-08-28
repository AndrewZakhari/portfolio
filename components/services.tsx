import { useInView } from "react-intersection-observer"

const Services = () => {
    const {ref, inView} = useInView()
    return (
        <div ref={ref} className="font-primary text-white -mt-80 pb-10  lg:mt-0 flex flex-col border-b-2 border-green-500 text-2xl lg:h-screen h-[1600px]">
            { inView &&
            <>
            <h1 className="text-red-500 text-center mt-96 animate-fadeIn lg:mt-0 py-10 text-5xl">Services</h1>
            <div className="flex flex-wrap gap-5  lg:mt-0 justify-around">
            <div className="flex flex-col p-5  items-center animate-slideIn2sRev border-2 hover:bg-green-700 md:w-1/3 lg:w-1/3 border-green-500">
                <h1 className="text-4xl text-yellow-300">Front-End</h1>
                <p>I&apos;m capable of building reliable and responsive websites with modern UIs ,industry Level SEO and UX with Support to all browsers</p>
            </div>
            <div className="flex flex-col p-5 items-center animate-slideIn2s border-2 hover:bg-green-700 md:w-1/3 lg:w-1/3 border-green-500">
                <h1 className="text-4xl text-yellow-300">Back-End</h1>
                <p>I&apos;m capable of building reliable back-end servers with API endpoints for interactions with the front-end and interactions with SQL and NOSQL databases</p>
            </div>
            <div className="flex flex-col p-5 items-center animate-slideIn2sRev border-2 hover:bg-green-700 md:w-1/3 lg:w-1/3 border-green-500">
                <h1 className="text-4xl text-yellow-300">Full-Stack</h1>
                <p>Combining my skills in front-end and back-end together to create a full-stack Web app</p>
            </div>
            <div className="flex flex-col p-5 items-center animate-slideIn2s border-2 hover:bg-green-700  md:w-1/3 lg:w-1/3 border-green-500">
                <h1 className="text-4xl text-yellow-300">UI & UX</h1>
                <p>I&apos;m capable of designing modern UI with industry level UX </p>
            </div>
            </div>
            </>
}
        </div>
    )
}
export default Services