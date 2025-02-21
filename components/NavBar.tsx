import Link from 'next/link'
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import MJ_Logo from "@/public/assets/images/MJ_Logo.png"

export default function NavBar() {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            whileInView={{ opacity: "100%", translateY: 0 }}
            exit={{ opacity: "100%", translateY: -20 }}
            transition={{
                duration: .3,
                delay: 1.3,
                ease: "easeIn"
            }}
            viewport={{
                once: true,
            }}
            className='fixed z-50 top-0 w-full flex items-center justify-between h-28  pr-0 sm:pr-5  px-5 md:px-10 bg-gradient-to-b from-black to-transparent'>



            <Link href={'/'} className="md:block hidden font-satisfies text-secondary text-l md:text-xl lg:text-3xl">Hello👋</Link>
            <Link href={'/'} className="block md:hidden font-satisfies text-secondary text-l md:text-xl lg:text-3xl">
                <Image src={MJ_Logo} alt='logo' width={35} height={35} />
            </Link>


            <div className='flex items-center justify-evenly w-64  h-1/2  sideNav'>

                <Link
                    href={'/about'}
                    title='See More about me'
                    className="font-ptSans  text-sm md:text-base lg:text-lg group w-max "
                >
                    <p>About</p>
                    <span className="block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all" />
                </Link>


                <Link
                    href={'/projects'}
                    title='See my work'
                    className="font-ptSans  text-sm md:text-base lg:text-lg group w-max "
                >
                    <p>Projects</p>
                    <span className="block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all" />
                </Link>
                <Link
                    href={'/services'}
                    title='Services List'
                    className="font-ptSans  text-sm md:text-base lg:text-lg group w-max "
                >
                    <p>Services</p>
                    <span className="block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all" />
                </Link>
            </div>
        </motion.div>
    )
}
