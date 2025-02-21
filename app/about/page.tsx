"use client"
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import { motion } from 'motion/react';

import css from "@/public/assets/svg/Css.svg";
import Firebase from "@/public/assets/svg/Firebase.svg";
import Html from "@/public/assets/svg/Html.svg";
import JavaScript from "@/public/assets/svg/JavaScript.svg";
import MongoDb from "@/public/assets/svg/MongoDb.svg";
import NextJs from "@/public/assets/svg/NextJs.svg";
import NodeJs from "@/public/assets/svg/NodeJs.svg";
import ReactJs from "@/public/assets/svg/React.svg";
import Redis from "@/public/assets/svg/Redis.svg";
import Redux from "@/public/assets/svg/Redux.svg";
import TailwindCss from "@/public/assets/svg/TailwindCss.svg";
import TypeScript from "@/public/assets/svg/TypeScript.svg";

export default function page() {

    const size = 40;



    return (
        <div className='px-5 md:px-10'>
            <p className='text-supHeading text-center font-satisfies mb-10 mt-20'>Who I Am ?</p>

            {/* <p className='text-center text-button font-poppins mb-10 w-3/4 mx-auto'>
                I’m a full-stack developer, AI enthusiast, and tech innovator who loves solving real-world problems through code. With a strong background in Next.js, MERN stack, TypeScript, AI, and system design, I specialize in building scalable applications, real-time systems, and even custom programming languages!

                Currently, I’m a CSE student {"(5th semester)"} and an active contributor to the startup ecosystem at BFSoE {"(Baba Farid School of Entrepreneurship)"}. Whether it's building a business-oriented tech solution or optimizing performance for a real-time application, I thrive on turning ideas into reality.
            </p>
            <div className='flex items-center justify-center gap-5  flex-col font-poppins text-button'>
                <Link href={'/projects'} className='w-full md:w-[17rem] lg:w-72 border-[1px] border-white rounded-full h-14 px-6 flex items-center justify-between bg-foreground text-background group'>
                    See my work
                    <ArrowUpRight className='text-button group-hover:rotate-45 transition-all' />
                </Link>
                <Link href={'/contact'} className='w-full md:w-[17rem] lg:w-72 border-[1px] border-white border-opacity-50  rounded-full h-14 px-6 flex items-center justify-between group'>
                    Contact
                    <ArrowUpRight className='text-button group-hover:rotate-45 transition-all' />
                </Link>
            </div> */}

            <div className='w-full md:w-1/2 place-self-end h-min  flex gap-10 flex-col items-start justify-between mt-8'>
                <p className='text-paragraph font-amita text-secondary lowercase'>Intro</p>
                <div className='w-full flex items-center gap-2 my-10 mt-0 flex-wrap text-button text-center font-poppins'>
                    <p className='text-button text-start text-secondary'>Hi, I’m <b>Madhav Jangid</b> currently <b>pursuing B.Tech in Computer Science</b> with a passion for building scalable tech solutions. I specialize in <b>full-stack development, problem-solving, and system optimization</b>. Whether it's developing a programming language, optimizing databases, or crafting intuitive user experiences, I love turning ideas into reality.</p>
                </div>
            </div>
            <motion.span
                initial={{ maxWidth: 0, height: 3 }}
                whileInView={{ maxWidth: "100%", height: 3 }}
                exit={{ maxWidth: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
                viewport={{
                    once: false,
                    margin: "20%"
                }}
                className='block rounded-full w-full bg-neutral-700' />

            <div className='w-full md:w-1/2 place-self-end h-min  flex gap-10 flex-col items-start justify-between mt-8'>
                <p className='text-paragraph font-amita text-secondary lowercase'>Work experience</p>
                <div className='w-full flex items-center gap-2 my-10 mt-0 flex-wrap text-button text-center font-poppins'>
                    <ul className='w-full flex flex-col gap-4 text-button '>
                        <li className='grid grid-cols-3  w-full text-start'>
                            <span>BFSoE</span>
                            <p>Summer Intern</p>
                            <span>Jun 2024 - Aug 2024</span>
                        </li>
                        <li className='grid grid-cols-3 w-full text-start'>
                            <span>CodeSoft</span>
                            <p>Front-End Developer</p>
                            <span>Oct 2023 - Oct 2023</span>
                        </li>

                    </ul>
                </div>
            </div>
            <motion.span
                initial={{ maxWidth: 0, height: 3 }}
                whileInView={{ maxWidth: "100%", height: 3 }}
                exit={{ maxWidth: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
                viewport={{
                    once: false,
                    margin: "20%"
                }}
                className='block rounded-full w-full bg-neutral-700' />



            <div className='w-full md:w-1/2 place-self-end h-min  flex gap-10 flex-col items-start justify-between mt-8'>
                <p className='text-paragraph font-amita text-secondary lowercase'>Tech Stack</p>
                <div className='w-full flex items-center gap-2 my-10 mt-0 flex-wrap text-button text-center font-poppins'>

                    {/* CSS */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            CSS
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={css} alt='CSS Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* Firebase */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            Firebase
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={Firebase} alt='Firebase Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* HTML */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            HTML
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={Html} alt='HTML Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            JavaScript
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={JavaScript} alt='JavaScript Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* MongoDB */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            MongoDB
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={MongoDb} alt='MongoDB Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* Next.js */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            Next.js
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={NextJs} alt='Next.js Icon' width={size + 2} height={size + 2} />
                        </div>
                    </div>

                    {/* Node.js */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            Node.js
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={NodeJs} alt='Node.js Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* React.js */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            React.js
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={ReactJs} alt='React.js Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* Redis */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            Redis
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={Redis} alt='Redis Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* Redux */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            Redux
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={Redux} alt='Redux Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* Tailwind CSS */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            Tailwind CSS
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={TailwindCss} alt='Tailwind CSS Icon' width={size} height={size} />
                        </div>
                    </div>

                    {/* TypeScript */}
                    <div className='relative group mt-6'>
                        <p className='border border-secondary border-opacity-30 p-2 px-4 rounded-full p'>
                            TypeScript
                        </p>
                        <div className='absolute w-16 place-items-center aspect-square rounded-2xl bg-[#171717] border border-[#444] -top-[150%] left-1/2 transform -translate-x-1/2 hidden group-hover:grid transition-opacity duration-200'>
                            <Image src={TypeScript} alt='TypeScript Icon' width={size} height={size} />
                        </div>
                    </div>

                </div>
            </div>
            <motion.span
                initial={{ maxWidth: 0, height: 3 }}
                whileInView={{ maxWidth: "100%", height: 3 }}
                exit={{ maxWidth: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
                viewport={{
                    once: false,
                    margin: "20%"
                }}
                className='block rounded-full w-full bg-neutral-700' />

            <div className='h-min  flex gap-10 flex-col items-start justify-between mt-8 w-full md:w-1/2 place-self-end'>
                <p className='text-paragraph font-amita text-secondary lowercase'>My Hobbies</p>
                <div className='w-full flex items-center gap-2 my-10 mt-0 flex-wrap text-button text-center font-poppins'>
                    <p className='text-button text-start text-secondary'>Apart from coding, I enjoy <b>chess</b>, where I apply strategic thinking beyond programming. I also love <b>sketching</b> which helps me visualize creative ideas. Additionally, I’m passionate about listening to <b>rap (DHH) music</b> finding motivation and storytelling in its beats and lyrics.</p>
                </div>
            </div>
            <motion.span
                initial={{ maxWidth: 0, height: 3 }}
                whileInView={{ maxWidth: "100%", height: 3 }}
                exit={{ maxWidth: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
                viewport={{
                    once: false,
                    margin: "20%"
                }}
                className='block rounded-full w-full bg-neutral-700' />
        </div>
    )
}
