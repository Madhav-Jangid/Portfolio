import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <div id='aboutSection' className='w-full min-h-min h-min md:h-[100vh] py-24 md:py-0 grid place-items-center'>
            <div className='md:w-[55%] w-4/5'>
                <p className='text-center text-paragraph font-poppins mb-10'>
                    I have over <b>2 years of experience</b> in JavaScript, specializing in building efficient and scalable applications using <b>Next.js, React.js, TypeScript, and Node.js</b>. My work spans both frontend and backend development, with a focus on creating clean and maintainable solutions. Outside of coding, I have a keen interest in <b>chess</b> and enjoy <b>sketching portraits</b>, combining strategy and creativity in my pursuits.
                </p>
                <div className='flex items-center justify-center gap-5 px-5 md:px-10 flex-col md:flex-row font-poppins text-button'>
                    <Link href={'/about'} title='see more about me' className='w-full md:w-[17rem] lg:w-72 border-[1px] border-white rounded-full h-14 px-6 flex items-center justify-between bg-foreground text-background group'>
                        More about me
                        <ArrowUpRight className='text-button group-hover:rotate-45 transition-all' />
                    </Link>
                    <Link href={'/contact'} title='Get in touch with me' className='w-full md:w-[17rem] lg:w-72 border-[1px] border-white border-opacity-50  rounded-full h-14 px-6 flex items-center justify-between group'>
                        Contact
                        <ArrowUpRight className='text-button group-hover:rotate-45 transition-all' />
                    </Link>
                </div>
            </div>
        </div>
    )
}
