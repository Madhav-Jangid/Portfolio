import ContactForm from '@/components/ContacForm'
import InfiniteScroll from '@/components/InfiniteScroll'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MJ_Logo from "@/public/assets/images/MJ_Logo.png"
export default function Contact() {
    return (
        <>
            <InfiniteScroll />
            <div className='w-full min-h-min h-min md:h-[100vh]  px-[7%]'>
                <div className='w-full py-4 md:py-0 flex flex-col md:flex-row gap-20 md:gap-0 justify-between items-start'>
                    <p className='text-paragraph font-poppins   max-w-full md:max-w-[40%]'>
                        Got an idea or a project in mind? Whether it’s coding, scaling a startup, or solving complex challenges, I’m all in! Let’s connect and bring your vision to life with seamless solutions and innovative thinking. Just a message away—let’s build something extraordinary together! 🚀
                    </p>
                    <div className='w-full md:w-[50%] flex justify-end'>
                        <ContactForm />
                    </div>
                </div>


                <div className='flex items-start justify-between mb-16 mt-40 md:flex-row flex-col py-4 md:py-0'>
                    <div className='w-full md:w-2/5 py-10  flex items-start justify-center md:justify-start'>
                        <div className='flex items-center flex-col w-max gap-5'>
                            <Image className='w-28 md:w-36' alt='Logo' src={MJ_Logo} height={150} width={150} />
                            <p className='font-amita md:text-start text-center w-full text-xl md:text-2xl lg:text-4xl'>Madhav Jangid</p>
                        </div>
                    </div>

                    <div className='footer w-full md:w-[55%] flex items-start justify-around flex-wrap text-center md:text-start gap-8 md:gap-0 font-poppins text-secondary'>
                        <ul className='flex flex-col gap-3 items-center md:items-start'>
                            <li className='group text-button font-bold  text-white'>Usefull Links</li>
                            <Link href={'/'} className='hover:text-white group w-max  text-button'>Home
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                            <Link href={'/about'} className='hover:text-white group w-max  text-button'>About
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                            <Link href={'/projects'} className='hover:text-white group w-max  text-button'>Project
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                            <Link href={'/contact'} className='hover:text-white group w-max  text-button'>Contact
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                        </ul>
                        <ul className='flex flex-col gap-3 items-center md:items-start'>
                            <li className='group text-button font-bold text-white'>Featured Projects</li>
                            <Link target="_blank" href={'https://brocode-cli.vercel.app'} className='hover:text-white group w-max  text-button'>BroCode
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                            <Link target="_blank" href={'https://codemilitia.vercel.app'} className='hover:text-white group w-max  text-button'>CodeMilitia
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                            <Link target="_blank" href={'https://vyapari-sathi.vercel.app'} className='hover:text-white group w-max  text-button'>Vyapari Sathi
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                            <Link target="_blank" href={'https://twitbird.vercel.app'} className='hover:text-white group w-max  text-button'>Twitbird
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                            <Link target="_blank" href={'https://chillchat.vercel.app'} className='hover:text-white group w-max  text-button'>Chill Chat
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                        </ul>
                        <ul className='flex flex-col gap-3 items-center md:items-start'>
                            <li className='group text-button font-bold text-white'>Social Contacts</li>
                            <Link target="_blank" href={'https://github.com/Madhav-Jangid'} className='hover:text-white group w-max  text-button'>Github
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                            <Link target="_blank" href={'https://www.instagram.com/madhav.ace/'} className='hover:text-white group w-max  text-button'>Instagram
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                            <Link target="_blank" href={'https://www.linkedin.com/in/madhav-jangid'} className='hover:text-white group w-max  text-button'>LinkedIn
                                <span className='block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all'></span>
                            </Link>
                        </ul>
                    </div>
                </div>

                <p className='text-center text-secondary text-button w-full h-20'>Madhav Jangid 2025 | All rights reserved ©</p>
            </div>
        </>
    )
}
