import Link from "next/link"
import Image from "next/image";

 const Nav = () => {
    return (
        <div className="fixed hidden lg:flex top-2 left-0 bg-black  flex-col">
           <Link target="_blank" href="https://www.linkedin.com/in/andrewzakhari"><Image className="rounded-lg"  alt='' src="/linkedin.png" width={40} height={40} /> </Link>
           <Link target="_blank" href="https://wa.me/+201019303179"><Image className="rounded-lg" alt='' src="/whatsapp.png" width={40} height={40} /></Link>
           <Link target="_blank" href="https://github.com/AndrewZakhari"><Image className="rounded-lg" alt='' src="/github.png" width={40} height={40} /></Link>
        </div>
    )
}

export default Nav;