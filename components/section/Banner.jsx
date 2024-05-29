import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Button } from "@/components"
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="my-6 bg-white md:my-12 lg:rounded-2xl">
      <div className="flex flex-col gap-6">
        {/* <!-- Hero Image Section --> */}
        <div className="object-cover relative w-full h-[300px] md:h-[600px]">
          <Image className="rounded-t-xl" src="/Images/hero-img.png" alt="hero" fill />
        </div>
        {/* <!-- Hero Text Section --> */}
        <div className="flex flex-col content-between w-full p-4 ">
          <div className="mx-4 mt-6 grow">
            <h1 className="text-5xl font-bold text-center lg:text-left lg:text-7xl">Pioneer In Tour Solutions</h1>
            <p className="py-6 text-lg text-center md:text-left">Al Itqan Offers Affordable, Hassle-Free Hajj & Umrah Services</p>
            <Link href="https://docs.google.com/" target="_blank">  
            <Button>Browse Package</Button>
            </Link>
          </div>
          {/* <!-- Hero Social Icon --> */}
          <div className="flex flex-row justify-end space-x-2">

              <span className="p-2 text-xl text-white bg-black rounded-full"><FaFacebookF/></span>


            <span className="p-2 text-xl text-white bg-black rounded-full"><FaXTwitter/></span>


            <span className="p-2 text-xl text-white bg-black rounded-full"><FaYoutube/></span>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner