import Image from "next/image"
import { useInView } from "react-intersection-observer"
export default function Cert() {
    const {ref, inView} = useInView()
    return (
        <div ref={ref} className="flex flex-col items-center font-primary min-h-screen">
            {inView &&
            <>
            <h1 className="text-red-500 bg-black font-primary text-5xl text-center animate-fadeIn py-10">Certifications</h1>
            <div className="flex w-screen flex-col lg:flex-row justify-around">
            <div className="flex flex-col animate-slideIn2sRev border-b-2 border-transparent hover:border-green-500 py-7 trnasition-all duration-500 items-center">
                <h1 className="text-3xl py-2 text-yellow-300">Front End Certification</h1>
                <Image alt="" src="/frontCert.jpg" width="464" height="144" />
            </div>
            <div className="flex flex-col animate-slideIn2s border-b-2 border-transparent hover:border-green-500 py-7 trnasition-all duration-500 items-center">
                <h1 className="text-3xl py-2 text-yellow-300">Back End Certification</h1>
                <Image alt="" src="/backCert.jpg" width="464" height="144" />
            </div>
            </div>
            </>
}
        </div>
    )
}