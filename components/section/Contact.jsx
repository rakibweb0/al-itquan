import { FaPhone, FaRegEnvelope, FaLocationDot } from "react-icons/fa6";

const Contact = ({data}) => {
    const {fullLogo, name, mobile, mail, address, map} = data
    return (
        <section className="mt-6 bg-white md:mt-12 lg:rounded-2xl">
            <div className="relative flex flex-col items-center md:flex-row">
                {/* <!-- Hero Image Section --> */}
                <div className="w-full py-8 md:w-1/2 lg:px-16">
                    <div className="flex flex-col items-center justify-center space-y-6 lg:items-start">
                        <img className="w-40" src="/images/footerLogo.png" alt="" />
                        <h2 className="text-2xl font-bold lg:text-4xl">{name}</h2>
                        <div className="flex flex-col gap-2 px-4 text-gray-600 lg:px-0 lg:text-lg">
                            <p className="flex items-center gap-2"><FaPhone/><span>{mobile}</span></p>
                            <p className="flex items-center gap-2"><FaRegEnvelope/><span>{mail}</span></p>
                            <p className="flex items-center gap-2"><FaLocationDot/><span>{address}</span></p>
                        </div>
                    </div>
                </div>
                {/* <!-- Hero Text Section --> */}
                <div className="w-full p-8 md:w-1/2">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58423.83350051182!2d90.34919227379949!3d23.765573986829086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b94fd4e679d7%3A0x501a7f20def0e1ae!2sNur%20International!5e0!3m2!1sen!2sbd!4v1701778441830!5m2!1sen!2sbd"height="450" className="w-full rounded-xl" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact