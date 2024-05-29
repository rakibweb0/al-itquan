'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion"

const Header = ({ data }) => {
    const { logo, menu } = data
    const [open, setOpen] = useState(false);
    const menuVariants = {
        hidden: {
            x: "-100%", opacity: 0
        },
        show: {
            x: "0", opacity: 1, transition: { duration: 0.5, }
        },
        exit: {
            x: "-100%", opacity: 0, transition: { duration: 0.5, }
        }
    }
    return (
        <div>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-sm relative">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">
                    <Link href="/" >
                        {
                            logo && <Image src={logo} className="w-32 mr-3" alt="logo" width={300} height={300} />
                        }
                    </Link>


                    <div onClick={() => setOpen(!open)} className='block lg:hidden'>
                        <span><FaBarsStaggered className="h-6 w-6 text-[#0274be] duration-500" /></span>
                    </div>
                    {/* desktop menu */}
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {
                                menu?.map(item => (
                                    <li key={item.id}>
                                        <Link className='font-semibold text-black/90' href={`${item.path}`}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* mobile menu */}
                    <AnimatePresence>
                        {
                            open && (
                                <motion.div
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                    className={`block h-full w-full fixed top-[108px] left-0  bg-white z-10 duration-500 lg:hidden`}>
                                    <ul className='flex flex-col gap-4 px-8 py-12'>
                                        {
                                            menu?.map(item => (
                                                <li key={item.id}>
                                                    <Link href={`${item.path}`}>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </motion.div>
                            )
                        }˝
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Header