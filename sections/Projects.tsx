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


export default function Projects() {



    return (
        <div className='w-full h-auto relative overflow-x-clip'>

            {/* <div className='w-full px-[7vw] text-center mb-32'>
                <p className='text-subHeading font-amita'>Selceted works</p>
                </div> */}
            <div className='px-5 md:px-10 w-full'>
                <div className='relative h-min w-[90%] mx-auto'>
                    <div className='z-10 relative'>
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
                    </div>
                    <p className='text-paragraph text-end mt-20  font-amita underline underline-offset-8'>Yeah I Work Hard..</p>
                </div>
                {/* <div className='absolute right-0 md:left-0 md:top-0 -top-16  h-[100px] w-[40%] object-contain overflow-hidden z-0'>
                    <Image width={500} height={700} src={imgIllustration} alt='Illustration' />
                </div> */}
            </div>


            <PinnedScroll>
                <ProjectCard
                    img={BROCODE}
                    href='https://brocode-cli.vercel.app'
                    title='Brocode'
                    stamp='2024'
                    techStack={['TypeScript', 'NextJS', 'Tailwind CSS']}
                    discription='A custom programming language designed to simplify coding with a unique syntax. It allows for a fun, intuitive way to write code with a focus on scalability and ease of use.'
                />
                <ProjectCard
                    img={CodeMilitia}
                    href='https://codemilitia.vercel.app'
                    title='CodeMilitia'
                    stamp='2024'
                    techStack={['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS', 'Material UI']}
                    discription='A collaborative platform that connects developers for real-time problem-solving. Built using the MERN stack, it allows users to work together on coding challenges and projects.'
                />
                <ProjectCard
                    img={ChillChat}
                    href='https://chillchat.vercel.app'
                    title='ChillChat'
                    stamp='2024'
                    techStack={['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS', 'Material UI']}
                    discription='A messaging app designed for seamless, real-time communication. It provides a simple yet efficient platform for users to connect and interact with each other.'
                />
                <ProjectCard
                    img={TwitBird}
                    href='https://twitbird.vercel.app'
                    title='TwitBird'
                    stamp='2023'
                    techStack={['HTML', 'CSS', 'JS', 'Firebase']}
                    discription='A social media application inspired by Twitter, focusing on user interactions through short posts. Built with scalability in mind, it offers a user-friendly interface and responsive design.'
                />
                <ProjectCard
                    img={Eportal}
                    href='https://madhav-jangid.github.io/E-Portal/'
                    title='E-GramSangam'
                    stamp='2023'
                    techStack={['HTML', 'CSS', 'JS']}
                    discription='An e-portal that streamlines communication and management within rural communities. It provides a platform for access to essential services, ensuring efficient governance and better citizen engagement.'
                />
            </PinnedScroll>

            <Link
                href={'/works'}
                className='relative z-10 self-end md:self-start 0 w-60 lg:w-72 border-[1px] border-white border-opacity-50  rounded-full h-14 px-6 flex items-center justify-between group font-poppins place-self-end mr-20'>
                More Work <ArrowUpRight className='group-hover:rotate-45 transition-all' /></Link>
        </div >
    )
}
