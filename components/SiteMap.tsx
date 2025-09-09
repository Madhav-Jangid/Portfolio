"use client"
import Contact from '@/sections/Contact';
import React from 'react'
import Image from "next/image";
import { useEffect, useState } from "react";
import MJ_Logo from "@/public/assets/images/MJ_Logo.png";
import { motion } from 'motion/react';
import Cursor from './Cursor';
import NavBar from './NavBar';
import { ParallaxProvider } from 'react-scroll-parallax';
import SpringModal from './SpringModal';
export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // useEffect(() => {
    //     document.body.style.cursor = "url('../public/assets/images/CursorImage.cur'), auto";
    // }, []);

    const [loading, setLoading] = useState(true);
    const [removeAnimatedLoading, setRemoveAnimatedLoading] = useState(true);
    useEffect(() => {
        const handleLoad = () => {
            setLoading(false)
            setTimeout(() => {
                setRemoveAnimatedLoading(false);
            }, 1000);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);




    return <ParallaxProvider>
        <Cursor />
        {loading ? (
            <div className="w-full h-[100vh] z-[100] overflow-hidden grid place-items-center  bg-[#0b0b0b]">
                <Image className="w-28 md:w-36 animate-pulse" alt="Logo" src={MJ_Logo} height={150} width={150} />
            </div>
        ) : (
            <div className="w-full">
                {removeAnimatedLoading &&
                    <motion.div
                        initial={{ translateY: "0%" }}
                        whileInView={{ translateY: "-100%" }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut"
                        }}
                        className="absolute top-0 w-full h-[100vh] z-[100] overflow-hidden grid place-items-center bg-[#0b0b0b]">
                        <Image className="w-28 md:w-36 animate-pulse" alt="Logo" src={MJ_Logo} height={150} width={150} />
                    </motion.div>
                }
                <NavBar />
                <SpringModal />
                {children}
                {/* <div className='fixed z-50 bottom-0 w-full flex items-center justify-between h-28  pr-0 sm:pr-5  px-5 md:px-10 bg-gradient-to-t from-black to-transparent' /> */}
                <Contact />
            </div>
        )}
    </ParallaxProvider>
}
