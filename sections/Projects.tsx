"use client"
import ProjectCard from '@/components/ProjectCards';
import React from 'react';
import Eportal from "@/public/assets/images/E-Portal.png";
import TwitBird from "@/public/assets/images/TwitbirdImage.png";
import CodeMilitia from "@/public/assets/images/CodeMilitia.png";
import ChillChat from "@/public/assets/images/ChillChat.png";
import BROCODE from "@/public/assets/images/BROCODE.png";
import PinnedScroll from '@/components/PinnedScroll';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ProjectLink } from '@/components/ProjectLink';
import Image from 'next/image';
import imgIllustration from "@/public/assets/images/image.png";
// import vedioDonot from "@/public/assets/videos/Donout.mp4";

export default function Projects() {



    return (
        <div className='w-full h-auto relative overflow-x-clip'>

            {/* <div className='w-full px-[7vw] text-center mb-32'>
                <p className='text-subHeading font-amita'>Selceted works</p>
                </div> */}
            <div className='relative px-5 md:px-10 w-full flex items-start h-min'>
                <div className='relative h-min w-[90%] mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, translateY: 20 }}
                        whileInView={{ opacity: "100%", translateY: -20 }}
                        exit={{ opacity: "100%", translateY: -20 }}
                        transition={{
                            duration: .4,
                            ease: "easeIn"
                        }}
                        viewport={{
                            once: true,
                            margin: "-60%",
                            amount: 0
                        }} className='z-10 relative'>
                        <p className='text-supHeading font-semibold  font-poppins  leading-[.90] uppercase flex items-end justify-start'>
                            <span className='text-secondary text-title font-amita pb-3 lowercase'>
                                Turning
                            </span>
                            Ideas
                        </p>
                        <p className='text-supHeading  font-semibold  font-poppins leading-[.90] uppercase flex items-start justify-end'>
                            <span className='text-secondary text-title font-amita pt-3 lowercase'>
                                into
                            </span>
                            reality
                        </p>
                    </motion.div>
                    {/* <p className='text-paragraph text-end mt-20  font-amita underline underline-offset-8'>Yeah I Work Hard..</p> */}
                </div>
                {/* <div className='absolute right-0 md:left-0 md:top-0 -top-16  h-[100px] w-[40%] object-contain overflow-hidden z-0'>
                    <Image width={500} height={700} src={imgIllustration} alt='Illustration' />
                </div> */}
                {/* <motion.div
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: "100%", translateY: -100 }}
                    exit={{ opacity: 0, translateY: 100 }}
                    transition={{
                        duration: .8,
                        ease: "easeOut"
                    }}
                    viewport={{
                        once: false,
                        margin: "-60%",
                        // amount: 0
                    }}
                    className='w-[40%]'
                > */}
                {/* <motion.div
                    initial={{ opacity: 0, translateY: 0 }}
                    whileInView={{ opacity: "100%", translateY: -100 }}
                    exit={{ opacity: 0, translateY: -100 }}
                    transition={{
                        duration: .8,
                        ease: "easeOut"
                    }}
                    viewport={{
                        once: false,
                        margin: "40%",
                        amount: 0
                    }} className='w-[30%] overflow-hidden z-0'>
                    <div>

                        <video autoPlay muted loop className='-skew-x-12'>
                            <source src='/assets/videos/Donout.mp4' type='video/mp4' />
                        </video>
                    </div>
                </motion.div> */}
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
                        margin: "70%",
                        amount: 1
                    }}
                    className='absolute right-0 z-0 '
                >
                    <div>
                        <video autoPlay muted loop className='-skew-x-12 w-[45%] place-self-end mr-10'>
                            <source src='/assets/videos/Donout.mp4' type='video/mp4' />
                        </video>
                    </div>
                </motion.div>
                {/* </motion.div> */}
            </div>


            <div id='projectSection' className='px-5 md:px-10'>
                <ProjectLink
                    imgSrc={BROCODE}
                    href='https://brocode-cli.vercel.app'
                    heading='Brocode'
                    // stamp='2024'
                    // techStack={['TypeScript', 'NextJS', 'Tailwind CSS']}
                    subHeading='A fun and intuitive programming language with a unique syntax.'
                />
                <ProjectLink
                    imgSrc={CodeMilitia}
                    href='https://codemilitia.vercel.app'
                    heading='CodeMilitia'
                    // stamp='2024'
                    // techStack={['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS', 'Material UI']}
                    subHeading='A real-time collaborative platform for developers.'
                />
                <ProjectLink
                    imgSrc={ChillChat}
                    href='https://chillchat.vercel.app'
                    heading='ChillChat'
                    // stamp='2024'
                    // techStack={['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS', 'Material UI']}
                    subHeading='A seamless messaging app for real-time communication.'
                />
                <ProjectLink
                    imgSrc={TwitBird}
                    href='https://twitbird.vercel.app'
                    heading='TwitBird'
                    // stamp='2023'
                    // techStack={['HTML', 'CSS', 'JS', 'Firebase']}
                    subHeading='A social media platform inspired by Twitter.'
                />
                <ProjectLink
                    imgSrc={Eportal}
                    href='https://madhav-jangid.github.io/E-Portal/'
                    heading='E-GramSangam'
                    // stamp='2023'
                    // techStack={['HTML', 'CSS', 'JS']} 
                    subHeading='An e-portal enhancing rural communication and governance.'
                />
            </div>

            <Link
                href={'/projects'}
                title='Click to view projects in detail'
                className='w-full md:w-[17rem] lg:w-72 border-[1px] rounded-full h-14 px-6 flex items-center justify-between my-10  group font-poppins text-button font-thin place-self-end mr-20'>
                More details
                <ArrowUpRight className='text-paragraph group-hover:rotate-45 transition-all scale-75' />
            </Link>
        </div >
    )
}
