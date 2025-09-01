"use client"
import Link from 'next/link'
import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import ResumeLink from '@/components/ResumeLink'
import { ArrowUpRight, Github, InstagramIcon, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import me from "@/public/assets/images/me.jpg"
import { useParallax } from 'react-scroll-parallax'

export default function Hero() {
    const imageRef = useRef<HTMLDivElement>(null)

    // Initialize parallax without targetElement
    const { ref: parallaxRef } = useParallax<HTMLDivElement>({
        speed: -10,
    })

    return (
        <>
            <div id='heroSection' className="relative h-screen w-full pb-0 sm:pb-10 pt-10 px-5 md:px-10 flex justify-between flex-col">
                <div className="w-full md:w-max  mt-20 md:mt-0  z-40 sm:text-start text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: -20 }}
                        transition={{
                            duration: 0.3,
                            delay: 1,
                            ease: "easeIn"
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="font-satisfies text-secondary text-l md:text-xl lg:text-3xl">
                        <span className=''>Hi👋</span> I&apos;m
                    </motion.span>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: -20 }}
                        transition={{
                            duration: 0.3,
                            delay: 1.1,
                            ease: "easeIn"
                        }}
                        viewport={{
                            once: true,
                        }}>
                        <p className="font-markpro text-title font-heavy md:leading-tight text-white mt-6">
                            Madhav Jangid,
                            <span className="font-satisfies text-secondary text-l md:text-xl lg:text-3xl text-[#ebebeb]">
                                &nbsp; a
                            </span>
                        </p>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: -20 }}
                        transition={{
                            duration: 0.3,
                            delay: 1.2,
                            ease: "easeIn"
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="text-title font-heavy font-markpro ">
                        full stack-dev.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: -20 }}
                        transition={{
                            duration: 0.3,
                            delay: 1,
                            ease: "easeIn"
                        }}
                        viewport={{
                            once: true,
                        }}
                        className='relative'
                    >
                        <ResumeLink />
                    </motion.div>
                </div>

                <div ref={parallaxRef} className="relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.8 }}
                        transition={{
                            duration: 0.3,
                            delay: 1.3,
                            ease: "easeIn"
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="select-none absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full md:w-auto h-3/4 overflow-hidden">
                        <div className='absolute bg-gradient-to-tr from-black via-transparent to-transparent w-full h-full'></div>
                        <div className='absolute bg-gradient-to-tl from-black via-transparent to-transparent w-full h-full'></div>
                        <div className='absolute bg-gradient-to-t from-black via-transparent to-transparent w-full h-full'></div>

                        <Image
                            className="aspect-auto object-contain w-full"
                            alt="My Image"
                            src={me}
                            width={650}
                            priority
                        />
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: -20 }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                        ease: "easeIn"
                    }}
                    viewport={{
                        once: true,
                    }}
                    className='w-full flex items-end justify-between flex-wrap-reverse z-10'>
                    <div className='my-4 md:my-0 place-self-end hidden sm:flex items-end justify-start gap-1 text-secondary flex-wrap'>
                        <Link title='My Github Account' target="_blank" href='https://github.com/Madhav-Jangid' className="text-xs md:text-sm lg:text-base bg-[#111] p-3 border border-[#444] rounded-full">
                            <Github className='w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5' />
                        </Link>
                        <Link title='My LinkedIn Account' target="_blank" href='https://www.linkedin.com/in/madhav-jangid' className="text-xs md:text-sm lg:text-base bg-[#111] p-3 border border-[#444] rounded-full">
                            <Linkedin className='w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5' />
                        </Link>
                        <Link title='My Instagram Account' target="_blank" href='https://www.instagram.com/madhav.ace/' className="text-xs md:text-sm lg:text-base bg-[#111] p-3 border border-[#444] rounded-full">
                            <InstagramIcon className='w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5' />
                        </Link>
                        <Link title='Send me a mail' href='mailto:manumadhavjangid@gmail.com' className="text-xs md:text-sm lg:text-base flex items-center gap-4 bg-[#111] p-3 border border-[#444] rounded-full">
                            <Mail className='w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5' />
                            <p className='max-[410px]:hidden block'>manumadhavjangid@gmail.com</p>
                        </Link>
                    </div>

                    <div className='w-full md:w-[38%] place-self-end'>
                        <p className='text-center sm:text-start text-button font-poppins text-secondary'>
                            <b>Specializing in Next.js and the MERN stack.</b> Let&apos;s turn ideas into reality! I craft seamless digital experiences that bring innovation to life. <b>Ready to build something amazing?</b>
                        </p>
                        <Link href='/contact' title='Get in touch with me' className='max-w-[16rem] w-full md:w-[17rem] lg:w-72 border-[1px] border-white border-opacity-50 bg-background text-button font-poppins rounded-full h-12 md:h-14 px-6 hidden sm:flex items-center justify-between group mt-5 '>
                            Contact
                            <ArrowUpRight className='text-button group-hover:rotate-45 transition-all' />
                        </Link>

                        <div className='relative z-10 my-4 md:my-0 flex sm:hidden items-end justify-center gap-5 text-secondary flex-wrap'>
                            <Link title='My Github Account' target="_blank" href='https://github.com/Madhav-Jangid' className="text-xs md:text-sm lg:text-base bg-[#111] p-3 border border-[#444] rounded-full">
                                <Github className='w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7' />
                            </Link>
                            <Link title='My LinkedIn Account' target="_blank" href='https://www.linkedin.com/in/madhav-jangid' className="text-xs md:text-sm lg:text-base bg-[#111] p-3 border border-[#444] rounded-full">
                                <Linkedin className='w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7' />
                            </Link>
                            <Link title='My Instagram Account' target="_blank" href='https://www.instagram.com/madhav.ace/' className="text-xs md:text-sm lg:text-base bg-[#111] p-3 border border-[#444] rounded-full">
                                <InstagramIcon className='w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7' />
                            </Link>
                            <Link title='Send me a mail' href='mailto:manumadhavjangid@gmail.com' className="text-xs md:text-sm lg:text-base flex items-center gap-4 bg-[#111] p-3 border border-[#444] rounded-full">
                                <Mail className='w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7' />
                                <p className='max-[410px]:hidden block'>manumadhavjangid@gmail.com</p>
                            </Link>
                        </div>

                    </div>
                </motion.div>
            </div>
        </>
    )
}