"use client";
import React, { useEffect, useRef } from "react";

interface InfiniteScrollProps {
    text?: string; // Default text
    speed?: number; // Pixels per frame
    separator?: string; // Separator between text repeats
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
    text = "Say Hello!",
    speed = 1, // Adjust speed dynamically
    separator = " • ",
}) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        const contentElement = contentRef.current;
        if (!scrollElement || !contentElement) return;

        // Ensure enough repetitions for infinite scrolling
        const containerWidth = scrollElement.offsetWidth;
        const contentWidth = contentElement.scrollWidth;

        // Determine how many times to repeat text
        const requiredCopies = Math.ceil((containerWidth * 2) / contentWidth) + 2;

        // Set repeated text in content
        contentElement.innerHTML = Array(requiredCopies)
            .fill(text)
            .join(` ${separator} `);

        let position = 0;
        let animationFrameId: number;

        const scroll = () => {
            position -= speed;

            // Reset when it has fully scrolled one full cycle
            if (Math.abs(position) >= contentElement.scrollWidth / 2) {
                position = 0;
            }

            contentElement.style.transform = `translateX(${position}px)`;

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [text, speed, separator]);

    return (
        <div className="relative w-full overflow-hidden py-4">
            <div ref={scrollRef} className="relative w-full">
                <div
                    ref={contentRef}
                    className="inline-block whitespace-nowrap text-heading font-satisfies my-10"
                    style={{ willChange: "transform" }} // Optimization for smooth rendering
                >
                    {text}
                </div>
            </div>
        </div>
    );
};

export default InfiniteScroll;
