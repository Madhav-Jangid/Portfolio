import { Building2, Laptop, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import imgIllustration from "@/public/assets/images/Expernce.png";
export default function Experence() {
    return (
        <div className='w-full my-10 relative  px-5 md:px-10 '>
            <div className='w-full grid place-items-center '>
                <div className='relative h-min w-full'>
                    <div className='z-10 relative'>
                        <p className='text-supHeading font-semibold  font-poppins  leading-[.90] uppercase flex items-end justify-start'>
                            <span className='text-secondary text-title font-amita pb-3 lowercase'>
                                from
                            </span>
                            Expertise
                        </p>
                        <p className='text-supHeading  font-semibold  font-poppins leading-[.90] uppercase flex items-start justify-end'>
                            <span className='text-secondary text-title font-amita pt-3 lowercase'>
                                to
                            </span>
                            Execution
                        </p>
                    </div>
                    <div className='absolute right-0 md:left-0 md:top-0 -top-16  h-[100px] w-[40%] object-contain overflow-hidden z-0'>
                        <Image width={500} height={700} src={imgIllustration} alt='Illustration' />
                    </div>
                </div>
                {/* <p>My Experence</p> */}
            </div>
            <div className='h-min px-10 py-20 '>
                <div className='w-full place-self-end  md:w-[55%] flex flex-col gap-5 z-10 relative'>
                    <p className='w-full text-paragraph font-amita text-end mb-10 underline underline-offset-8 h-min'>Real-World Experience</p>
                    <div>
                        <div className='flex items-center justify-between w-full py-3'>
                            <p className='text-paragraph flex items-center gap-2 font-poppins font-bold'>
                                <Building2 strokeWidth={1.5} color='lightblue' size={30} />
                                Baba Farid School of Entrepreneurship (BFSoE)</p>
                            <p className='flex items-center gap-3 font-poppins text-button text-secondary '><MapPin color='orange' strokeWidth={1.5} /> Deon</p>
                        </div>
                        <p className='my-5 text-button font-poppins text-secondary'>
                            Gained in-depth knowledge of the startup ecosystem, organized events like PITCHPULSE, updated the official website, and developed problem-solving skills through design thinking while serving as co-editor for the BFSoE newsletter.
                        </p>

                        <div className='flex items-center gap-2 my-10 flex-wrap'>
                            <p className='border border-secondary border-opacity-30 p-1 px-2 rounded-full text-[13px] md:text-md'>Startup Ecosystem</p>
                            <p className='border border-secondary border-opacity-30 p-1 px-2 rounded-full text-[13px] md:text-md'>Event Management</p>
                            <p className='border border-secondary border-opacity-30 p-1 px-2 rounded-full text-[13px] md:text-md'>Design Thinking</p>
                        </div>
                    </div>
                    <span className='block h-[2px]  rounded-full w-full bg-foreground'></span>
                    <div>
                        <div className='flex items-center justify-between w-full py-3'>
                            <p className='text-paragraph flex items-center gap-2 font-poppins font-bold'>
                                <Building2 strokeWidth={1.5} color='lightblue' size={30} />
                                CodeSoft</p>
                            <p className='flex items-center gap-3 font-poppins text-button text-secondary '><Laptop color='orange' strokeWidth={1.5} />Remote</p>
                        </div>
                        <p className='my-5 text-button font-poppins text-secondary'>
                            Developed three dynamic websites using modern frameworks, collaborated with the design team for responsive UI/UX, and ensured optimal performance through testing and debugging.
                        </p>


                        <div className='flex items-center gap-2 my-10 flex-wrap'>
                            <p className='border border-secondary border-opacity-30 p-1 px-2 rounded-full text-[13px] md:text-md'>Web Development</p>
                            <p className='border border-secondary border-opacity-30 p-1 px-2 rounded-full text-[13px] md:text-md'>UI/UX</p>
                            <p className='border border-secondary border-opacity-30 p-1 px-2 rounded-full text-[13px] md:text-md'>Testing</p>
                        </div>
                    </div>
                    <span className='block h-[2px]  rounded-full w-full bg-foreground'></span>
                </div>
            </div>

        </div>
    )
}
