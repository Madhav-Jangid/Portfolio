import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div id='aboutSection' className='relative z-10 w-full min-h-min h-min md:h-[100vh] py-24 md:py-0 grid place-items-center'>
            <div className='md:w-[55%] w-4/5'>
                <p className='text-center text-paragraph font-poppins mb-10'>
                    I have over <b>2 years of experience</b> in JavaScript, specializing in building efficient and scalable applications using <b>Next.js, React.js, TypeScript, and Node.js</b>. My work spans both frontend and backend development, with a focus on creating clean and maintainable solutions. Outside of coding, I have a keen interest in <b>chess</b> and enjoy <b>sketching portraits</b>, combining strategy and creativity in my pursuits.
                </p>
                <div className='flex items-center justify-center gap-0 md:gap-5 flex-col md:flex-row '>
                    <Link href={'/about'} title='see more about me' className='z-40 relative max-w-[16rem] w-full  md:w-[17rem] lg:w-72 border-[1px] border-white border-opacity-50 bg-foreground text-background text-button font-poppins rounded-full h-12 md:h-14 px-6 flex items-center justify-between group mt-5'>
                        More about me
                        <ArrowUpRight className='text-button group-hover:rotate-45 transition-all' />
                    </Link>
                    <Link href={'/contact'} title='Get in touch with me' className='z-40 relative bg-background  max-w-[16rem] w-full  md:w-[17rem] lg:w-72 border-[1px] border-white border-opacity-50   text-button font-poppins  rounded-full h-12 md:h-14 px-6 flex items-center justify-between group mt-2 md:mt-5'>
                        Contact
                        <ArrowUpRight className='text-button group-hover:rotate-45 transition-all' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
