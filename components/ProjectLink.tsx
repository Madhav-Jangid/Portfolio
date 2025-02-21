import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useState, useEffect } from "react";

export const ProjectLink = ({ heading, imgSrc, subHeading, href }: { heading: string, imgSrc: StaticImageData, subHeading?: string, href: string }) => {
    const ref = useRef<any>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const hoverTextX = useSpring(x, { stiffness: 150, damping: 20 });
    const hoverTextY = useSpring(y, { stiffness: 150, damping: 20 });

    const [isHovered, setIsHovered] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768); // Tailwind `md` breakpoint is 768px
        };

        updateScreenSize();
        window.addEventListener("resize", updateScreenSize);
        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    const handleMouseMove = (e: any) => {
        if (!isLargeScreen) return;

        const rect = ref.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        x.set(mouseX);
        y.set(mouseY);
    };

    return (
        <motion.a
            href={href}
            ref={ref}
            title={`Visit ${heading}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial="initial"
            whileHover="whileHover"
            {...(!isLargeScreen && { whileInView: "whileHover", exit: "whileHover" })} // Disable inView on large screens
            viewport={{ once: false, margin: "-50%" }}
            className="group relative flex flex-col items-start justify-between py-4 transition-colors duration-75 md:duration-200 hover:border-neutral-50 md:py-6 gap-4 w-full"
        >
            <div className="relative flex items-center justify-between w-full">
                <div>
                    <motion.span
                        variants={{
                            initial: { x: 0, color: "#404040" },
                            whileHover: { x: -16, color: "var(--foreground)" },
                        }}
                        transition={{
                            type: "spring",
                            staggerChildren: 0.075,
                            delayChildren: 0.25,
                        }}
                        className="relative z-10 block text-subHeading font-markpro transition-colors duration-75 md:duration-200 group-hover:text-foreground md:text-6xl"
                    >
                        {heading.split("").map((l: string, i: number) => (
                            <motion.span
                                key={i}
                                variants={{
                                    initial: { x: 0 },
                                    whileHover: { x: 16 },
                                }}
                                transition={{ type: "spring" }}
                                className="inline-block"
                            >
                                {l}
                            </motion.span>
                        ))}
                    </motion.span>
                    <motion.span
                        variants={{
                            initial: { color: "#404040" },
                            whileHover: { color: "var(--foreground)" },
                        }}
                        className="relative z-10 mt-2 block text-paragraph font-poppins transition-colors duration-75 md:duration-200 group-hover:text-foreground"
                    >
                        {subHeading}
                    </motion.span>
                </div>

                <motion.div
                    style={{
                        position: isHovered ? "absolute" : "relative",
                        left: isHovered ? hoverTextX : "50%",
                        top: isHovered ? hoverTextY : "50%",
                        translateX: "10%",
                        translateY: "-35%",
                    }}
                    className="hidden md:block absolute pointer-events-none z-50 px-4 py-2 mx-auto text-button font-poppins text-background bg-foreground rounded-md shadow-lg"
                >
                    Visit {heading}
                </motion.div>

                <motion.div
                    variants={{
                        initial: { rotate: 0, color: "#404040", translateX: "150%" },
                        whileHover: { rotate: -45, color: "var(--foreground)", translateX: "0%" },
                    }}
                    transition={{ type: "spring" }}
                    viewport={{ once: false, margin: "80%", amount: 0 }}
                    className="relative z-10 p-4 text-neutral-700 group-hover:text-foreground"
                >
                    <ArrowRight className="text-supHeading scale-105 md:scale-[260%] transition-all" />
                </motion.div>
            </div>

            <motion.span
                initial={{ maxWidth: 0, height: 3 }}
                whileInView={{ maxWidth: "100%", height: 3 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, margin: "20%", amount: 0 }}
                className="block rounded-full w-full bg-neutral-600 group-hover:bg-foreground origin-left"
            />
        </motion.a>
    );
};
