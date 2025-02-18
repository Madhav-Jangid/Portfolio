import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ExternalLink, SquareArrowOutUpRight, SquareArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";

export const ProjectLink = ({ heading, imgSrc, subHeading, href }: { heading: string, imgSrc: StaticImageData, subHeading?: string, href: string }) => {
    const ref = useRef<any>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e: any) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            title={`See ${heading} live`}
            onMouseMove={handleMouseMove}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex flex-col items-start justify-between  py-4 transition-colors duration-500 hover:border-neutral-50 md:py-6 gap-4"
        >
            <div className="flex items-center justify-between w-full">
                <div>
                    <motion.span
                        variants={{
                            initial: { x: 0 },
                            whileHover: { x: -16 },
                        }}
                        transition={{
                            type: "spring",
                            staggerChildren: 0.075,
                            delayChildren: 0.25,
                        }}
                        className="relative z-10 block text-subHeading font-markpro text-neutral-500 transition-colors duration-500 group-hover:text-foreground md:text-6xl"
                    >
                        {heading.split("").map((l: string, i: number) => (
                            <motion.span
                                variants={{
                                    initial: { x: 0 },
                                    whileHover: { x: 16 },
                                }}
                                transition={{ type: "spring" }}
                                className="inline-block"
                                key={i}
                            >
                                {l}
                            </motion.span>
                        ))}
                    </motion.span>
                    <span className="relative z-10 mt-2 block text-paragraph font-poppins text-neutral-500 transition-colors duration-500 group-hover:text-foreground">
                        {subHeading}
                    </span>
                </div>

                <motion.div
                    style={{
                        top,
                        left,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                    variants={{
                        initial: { scale: 0, rotate: "-12.5deg" },
                        whileHover: { scale: 1, rotate: "12.5deg" },
                    }}
                    transition={{ type: "spring" }}
                    className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                >
                    <Image src={imgSrc} alt={`Image representing a link for ${heading}`} />
                </motion.div>

                <motion.div
                    // variants={{
                    //     initial: {
                    //         rotate: 0
                    //     },
                    //     whileHover: {
                    //         // x: "0%",
                    //         // opacity: 1,
                    //         rotate: -45
                    //     },
                    // }}
                    transition={{ type: "spring" }}
                    initial={{ translateX: "150%" }}
                    whileInView={{ translateX: "0%" }}

                    viewport={{
                        once: false,
                        margin: "80%",
                        amount: 0
                    }}
                    className="relative z-10 p-4 "
                >
                    <SquareArrowOutUpRight className="text-supHeading text-neutral-700 block group-hover:hidden group-hover:text-foreground scale-105 md:scale-[260%] transition-all " />
                    <ExternalLink className="text-supHeading text-neutral-700 group-hover:block hidden group-hover:text-foreground scale-105 md:scale-[260%] transition-all " />
                </motion.div>
            </div>
            <motion.span
                initial={{ maxWidth: 0, height: 3 }}
                whileInView={{ maxWidth: "100%", height: 3 }}
                // exit={{ maxWidth: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut"
                }}
                viewport={{
                    once: false,
                    margin: "20%",
                    amount: 0
                }}
                className='block rounded-full w-full bg-neutral-600 group-hover:bg-foreground origin-left' />
        </motion.a>
    );
};