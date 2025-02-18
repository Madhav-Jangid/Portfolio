"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react';
import ResumeLink from '@/components/ResumeLink';


export default function Hero() {
    return (
        <div id='heroSection' className="relative h-[100vh] w-full flex flex-col justify-center  pl-[5vw] md:pl-[10vw]">

            <div className="mt-32">
                <motion.span
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: "100%", translateY: -20 }}
                    exit={{ opacity: "100%", translateY: -20 }}
                    transition={{
                        duration: .3,
                        delay: 1,
                        ease: "easeIn"
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="font-satisfies text-secondary text-xl md:text-2xl lg:text-4xl">
                    Hello.. Im
                </motion.span>
                <motion.p
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: "100%", translateY: -20 }}
                    exit={{ opacity: "100%", translateY: -20 }}
                    transition={{
                        duration: .3,
                        delay: 1.1,
                        ease: "easeIn"
                    }}
                    viewport={{
                        once: true,
                    }} className="font-markpro text-heading font-heavy leading-[6vw] text-white mt-6">
                    Madhav Jangid
                    <span className="font-satisfies text-secondary text-xl md:text-2xl lg:text-4xl text-[#ebebeb]">
                        &nbsp; &.. Im a
                    </span>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, translateY: 20 }}
                    whileInView={{ opacity: "100%", translateY: -20 }}
                    exit={{ opacity: "100%", translateY: -20 }}
                    transition={{
                        duration: .3,
                        delay: 1.2,
                        ease: "easeIn"
                    }}
                    viewport={{
                        once: true,
                    }} className="text-heading  font-heavy font-markpro leading-[6vw]">
                    full stack-dev.

                </motion.p>
            </div>
            {/* <Link
                target="_blank"
                href={"https://docs.google.com/document/d/1HlB1qEM3KI_Y5ckd6eIrTfbYNnjMYAVHWRfUx70C8k0/edit?usp=sharing"}
                className="font-amita lowercase text-paragraph group w-max mt-10"
            >
                <p>Resume</p>
                <span className="block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all" />
            </Link> */}
            <ResumeLink />
        </div>
    )
}
