import { ArrowUpRight, CircleEllipsis, Heart, MessagesSquare, MoveRight } from 'lucide-react'
import { Link as LinkIcon } from "lucide-react"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard({
    img,
    title,
    stamp,
    href,
    discription,
    techStack,
}: {
    img: StaticImageData,
    title: string,
    stamp?: string,
    href: string,
    discription: string,
    techStack: string[],
}) {
    return (
        <div key={`${title + stamp}`} className='rounded-2xl pb-4 bg-background my-5'>
            <div className='flex items-center justify-between w-full mb-10'>
                <p className='font-markpro text-title flex w-full items-center gap-5'>{title}
                    <span className='md:block hidden'>
                        <MoveRight strokeWidth={2} className='text-subHeading' size={60} />
                    </span>
                </p>


                <div className='hidden md:flex px-3 w-full items-center justify-end gap-2'>
                    <Link title={`See ${title} live`} className='w-32 lg:w-48 border-[1px] border-white border-opacity-50  rounded-full h-14 px-6 flex items-center justify-between group font-poppins text-button font-thin' href={href || 'https://madhav-dev.vercel.app/'} target='_blank'>
                        Visit Site
                        <ArrowUpRight className='text-button group-hover:rotate-45 transition-all scale-75' />
                    </Link>
                    <Link href={`/work/${title.toLowerCase().replace(" ", "-")}`} title={`Read more about ${title}`} type='button' className='bg-foreground text-background w-32 lg:w-48 border-[1px] border-white border-opacity-50  rounded-full h-14 px-6 flex items-center justify-between group font-poppins text-button font-thin'>
                        See more
                        <ArrowUpRight className='text-button group-hover:rotate-45 transition-all scale-75' />
                    </Link>
                </div>

                <div className='flex md:hidden items-center gap-2'>
                    <LinkIcon strokeWidth={1.5} />
                    <span className='block min-w-1 h-6 rounded-full bg-red-300'></span>
                    <CircleEllipsis strokeWidth={1.5} />
                </div>

            </div>

            <div className='w-full h-full flex items-start justify-between gap-3'>
                <div className='max-w-full md:max-w-[40%]'>
                    <div className='w-full my-2 text-paragraph font-poppins'>

                        {discription}
                    </div>
                    <div className='w-full flex gap-2 md:px-3 flex-wrap mt-10 '>
                        {techStack && techStack.map((lang) => {
                            return (
                                <div key={lang} className='w-max'>
                                    <p className='text-sm p-4 py-2 rounded-full border border-white border-opacity-40'>{lang}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='block my-2 md:hidden relative overflow-hidden rounded-lg w-full aspect-video'>
                        <Image alt={`${title}'s Image`} src={img} className='rounded-xl w-full'></Image>
                    </div>
                    {/* <div className='mt-40 rounded-xl p-2 w-full md:text-lg h-max items-center justify-start gap-5 hidden md:flex'>
                        <div className='flex items-center gap-2 hover:bg-background-blur p-2 rounded-full px-4 cursor-pointer'>
                            <Heart strokeWidth={1.5} color='var(--text-secondary)' />
                            <p className='text-text-secondary'>Like</p>
                        </div>
                        <Link href={`/work/${title.toLowerCase().replace(" ", "-")}#discussion`} title={`Give your review on ${title}`} className='flex items-center gap-2 hover:bg-background-blur p-2 rounded-full px-4'>
                            <MessagesSquare strokeWidth={1.5} color='var(--text-secondary)' />
                            <p className='text-text-secondary'>Join Discussion</p>
                        </Link>
                    </div> */}
                </div>
                <div className='hidden md:block relative overflow-hidden rounded-lg w-full aspect-video max-w-[50%] '>
                    <Image alt={`${title}'s Image`} src={img} className='rounded-xl border-[1px] border-border w-full hover:scale-105 transition-all'></Image>
                </div>
            </div>
        </div >
    )
}