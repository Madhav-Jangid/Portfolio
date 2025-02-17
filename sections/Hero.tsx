import Link from 'next/link'
import React from 'react'
import leftHand from '@/public/assets/images/LeftHand.png';
import rightHand from '@/public/assets/images/RightHand.png';
import Image from 'next/image';
export default function Hero() {
    return (
        <div className="relative h-[100vh] w-full flex flex-col justify-center  pl-[5vw] md:pl-[10vw]">
            <Image className='w-36 absolute top-0 left-0' src={leftHand} alt='left hand image' />

            <div className="mt-32">
                <span className="font-satisfies text-secondary text-xl md:text-2xl lg:text-4xl">
                    Hello.. Im
                </span>
                <p className="font-markpro text-heading font-heavy leading-[6vw] text-white">
                    Madhav Jangid
                    <span className="font-satisfies text-secondary text-xl md:text-2xl lg:text-4xl text-[#ebebeb]">
                        &nbsp; &.. Im a
                    </span>
                </p>
                <p className="text-heading  font-heavy font-markpro leading-[6vw]">
                    full stack-dev.
                </p>
            </div>
            <Link
                target="_blank"
                href={"https://docs.google.com/document/d/1HlB1qEM3KI_Y5ckd6eIrTfbYNnjMYAVHWRfUx70C8k0/edit?usp=sharing"}
                className="font-amita lowercase text-paragraph group w-max mt-10"
            >
                <p>Resume</p>
                <span className="block w-1/3 group-hover:w-full h-[2px] rounded-md bg-white transition-all" />
            </Link>
            <Image className='w-48 absolute bottom-0 right-0' src={rightHand} alt='Right hand image' />
        </div>
    )
}
