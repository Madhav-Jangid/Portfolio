"use client"
import Image from 'next/image';
import React from 'react';
import ServicesImage from "@/public/assets/images/Services.png";
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
export default function Services() {
    return (
        <div id='serviceSection' className='flex  w-full justify-between items-center my-32'>
            <div className='w-full md:w-3/5'>
                <motion.div
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: "100%", translateY: -20 }}
                    exit={{ opacity: "100%", translateY: -20 }}
                    transition={{
                        duration: .3,
                        ease: "easeIn"
                    }}
                    viewport={{
                        once: true,
                        margin: "-60%",
                        amount: 0
                    }} className='relative font-poppins text-supHeading leading-[.90] uppercase px-5 md:px-10 font-semibold'>
                    <div className='h-min relative z-10'>
                        <p className='font-amita text-title lowercase font-normal'>List of</p>
                        <p>Services</p>
                        <p>Packs</p>
                    </div>
                    <div className='md:relative absolute -top-10 sm:-top-40 right-0 md:hidden block h-[100px] w-[20%] sm:w-[40%] object-contain overflow-hidden z-0'>
                        <Image alt='Image-illustration' src={ServicesImage} width={500} height={700} />
                    </div>
                </motion.div>
                <div className='z-10 relative w-full my-10 px-5 md:px-10 '>
                    <ul className='w-full flex flex-col gap-4 text-paragraph '>
                        <li className='flex sm:items-center items-start justify-between w-full text-start'>
                            <span>{'(1)'}</span>
                            <p className='w-full flex sm:flex-row flex-col max-sm:text-button  sm:items-center justify-between text-start ml-10'>Web Development Pack
                                <span className='md:text-foreground text-secondary font-thin text-button'>One-time fee</span>
                            </p>
                        </li>
                        <li className='flex sm:items-center items-start justify-between w-full text-start'>
                            <span>{'(2)'}</span>
                            <p className='w-full flex sm:flex-row flex-col max-sm:text-button  sm:items-center justify-between text-start ml-10'>Web Development Plus Pack
                                <span className='md:text-foreground text-secondary font-thin text-button'>One-time fee</span>
                            </p>
                        </li>
                        <li className='flex sm:items-center items-start justify-between w-full text-start'>
                            <span>{'(3)'}</span>
                            <p className='w-full flex sm:flex-row flex-col max-sm:text-button  sm:items-center justify-between text-start ml-10'>Colored Sketch and Drawings Pack
                                <span className='md:text-foreground text-secondary font-thin text-button'>One-time fee</span>
                            </p>
                        </li>
                        <li className='flex sm:items-center items-start justify-between w-full text-start'>
                            <span>{'(4)'}</span>
                            <p className='w-full flex sm:flex-row flex-col max-sm:text-button  sm:items-center justify-between text-start ml-10'>Pencil Sketch and Drawings Pack
                                <span className='md:text-foreground text-secondary font-thin text-button'>One-time fee</span>
                            </p>
                        </li>
                    </ul>
                    <Link
                        href={'/services'}
                        title='Click to read more about services'
                        className='w-full md:w-[17rem] lg:w-72 border-[1px] rounded-full h-14 px-6 flex items-center justify-between my-10  group font-poppins text-button font-thin'>
                        More details
                        <ArrowUpRight className='text-paragraph group-hover:rotate-45 transition-all scale-75' />
                    </Link>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, translateY: 100 }}
                whileInView={{ opacity: "100%", translateY: -100 }}
                exit={{ opacity: 0, translateY: 100 }}
                transition={{
                    duration: .8,
                    ease: "easeOut"
                }}
                viewport={{
                    once: false,
                    margin: "80%",
                    amount: 1
                }} className='md:block hidden h-[100px]  object-contain overflow-hidden '>
                <Image alt='Image-illustration max-w-[40%] max-h-[30%]' src={ServicesImage} width={400} height={400} />
            </motion.div>
        </div >
    )
}
