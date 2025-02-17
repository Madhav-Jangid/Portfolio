"use client"
import "./PinnedScroll.css";
import { useEffect, useRef, useState } from "react";
import { animate, scroll } from "motion";

const PinnedScroll = ({ children }: { children: React.ReactNode[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); // Tailwind 'lg' breakpoint (1024px)
        };

        updateScreenSize(); // Set initial state
        window.addEventListener("resize", updateScreenSize);

        return () => window.removeEventListener("resize", updateScreenSize);
    }, []);

    useEffect(() => {
        if (isLargeScreen && containerRef.current && contentRef.current) {
            const itemCount = contentRef.current.children.length;
            contentRef.current.style.width = `${itemCount * 100}vw`;

            scroll(
                animate(contentRef.current, {
                    transform: ["translateX(0)", `translateX(-${(itemCount - 1) * 100}vw)`],
                }),
                { target: containerRef.current }
            );
        }
    }, [isLargeScreen]);

    return (
        <>
            {isLargeScreen ?

                <div className="gallery">
                    <div className="scroll-container" ref={containerRef}>
                        <div
                            className={`scroll-content`}
                            ref={contentRef}
                        >
                            {children.map((child, index) => (
                                <div key={index} className="scroll-item px-[7vw]">
                                    {child}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                :
                <div>
                    {children.map((child, index) => (
                        <div key={index} className="scroll-item px-[7vw]">
                            {child}
                        </div>
                    ))}
                </div>
            }
        </>
    );
};

export default PinnedScroll;
