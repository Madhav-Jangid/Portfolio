import { ArrowUpRight, Link } from 'lucide-react'
import React from 'react'

export default function page() {
    return (
        <div>
            <p className='text-supHeading text-center font-satisfies mb-10 mt-20'>Who I Am ?</p>

            <p className='text-center text-paragraph font-poppins mb-10 w-3/4 mx-auto'>
                I’m a full-stack developer, AI enthusiast, and tech innovator who loves solving real-world problems through code. With a strong background in Next.js, MERN stack, TypeScript, AI, and system design, I specialize in building scalable applications, real-time systems, and even custom programming languages!

                Currently, I’m a CSE student {"(5th semester)"} and an active contributor to the startup ecosystem at BFSoE {"(Baba Farid School of Entrepreneurship)"}. Whether it's building a business-oriented tech solution or optimizing performance for a real-time application, I thrive on turning ideas into reality.
            </p>
            <div className='flex items-center justify-center gap-5 px-5 md:px-10 flex-col md:flex-row font-poppins text-button'>
                <Link href={'/about'} className='w-full md:w-[17rem] lg:w-72 border-[1px] border-white rounded-full h-14 px-6 flex items-center justify-between bg-foreground text-background group'>
                    More about me
                    <ArrowUpRight className='text-button group-hover:rotate-45 transition-all' />
                </Link>
                <Link href={'/contact'} className='w-full md:w-[17rem] lg:w-72 border-[1px] border-white border-opacity-50  rounded-full h-14 px-6 flex items-center justify-between group'>
                    Contact
                    <ArrowUpRight className='text-button group-hover:rotate-45 transition-all' />
                </Link>
            </div>

        </div>
    )
}
