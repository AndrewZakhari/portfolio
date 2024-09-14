import Image from "next/image"
import { useInView } from "react-intersection-observer"
export default function Cert() {
    const {ref, inView} = useInView()
    return (
        <div ref={ref} className="flex flex-col items-center font-primary min-h-screen ">
            {inView &&
            <>
            <h1 className="text-red-500 bg-black font-primary text-5xl text-center animate-fadeIn py-10">Certifications</h1>
            <div className="flex w-screen flex-col lg:flex-row lg:flex-wrap  justify-around lg:gap-2">
            <div className="flex flex-col px-4 lg:px-0 mb-10 lg:w-1/3 animate-slideIn2sRev border-b-2 border-transparent hover:border-green-500 py-7 trnasition-all duration-500 items-center">
                <h1 className="text-3xl py-2 text-yellow-300">Front End from FCC Certification</h1>
                <Image alt="" src="/frontCert.jpg" width="464" height="308" />
            </div>
            <div className="flex mb-10 px-4 lg:px-0 flex-col lg:w-1/3 animate-slideIn2s border-b-2 border-transparent hover:border-green-500 py-7 trnasition-all duration-500 items-center">
                <h1 className="text-3xl py-2 text-yellow-300">Back End from FCC Certification</h1>
                <Image alt="" src="/backCert.jpg" width="464" height="308" />
            </div>
            <div className="flex mb-10 px-4 lg:px-0 flex-col lg:w-1/3 animate-slideIn2sRev border-b-2 border-transparent hover:border-green-500 py-7 trnasition-all duration-500 items-center">
                <h1 className="text-3xl py-2 text-yellow-300">C2 English from EFSET Certification</h1>
                <Image className="h-[308px]" alt="" src="/englishCert.png" width="464" height="308" />
            </div>
            <div className="flex mb-10 px-4 lg:px-0 flex-col lg:w-1/3 animate-slideIn2s border-b-2 border-transparent hover:border-green-500 py-7 trnasition-all duration-500 items-center">
                <h1 className="text-3xl py-2 text-yellow-300">IT Security by Google Certification</h1>
                <Image className="h-[308px]" alt="" src="/ITSecGoogle.jpeg" width="464" height="308" />
            </div>
            </div>
            </>
}
        </div>
    )
}