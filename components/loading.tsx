import Image from "next/image"

const Loading = () => {
    return (
        <div className="bg-black h-screen flex justify-center items-center overflow-hidden">
            <div className="text-green-500 absolute  w-screen  border-y-8  flex items-center border-blue-700  ">
                <Image className="z-10  py-10 " alt="" src="/bikeview.png" width="300" height="200" />
                <p className="text-9xl text-green-500  animate-loading flex gap-36 ">
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                    <span>-</span>
                </p>
            </div>

        </div>
    )
}

export default Loading