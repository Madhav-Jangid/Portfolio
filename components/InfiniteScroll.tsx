
"use client"
import React, { useEffect, useRef } from 'react';

interface InfiniteScrollProps {
    /**
     * The text content to be scrolled
     * @default "Say Hello!"
     */
    text?: string;
    /**
     * Animation speed in pixels per frame
     * @default 50
     */
    speed?: number;
    /**
     * Character used to separate repeated text
     * @default "•"
     */
    separator?: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
    text = "Say Hello!",
    speed = 50,
    separator = " • "
}) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollElement = scrollRef.current;
        const contentElement = contentRef.current;

        if (!scrollElement || !contentElement) return;

        // Calculate required duplicates to ensure smooth infinite scroll
        const containerWidth: number = scrollElement.offsetWidth;
        const contentWidth: number = contentElement.offsetWidth;
        const requiredCopies: number = Math.ceil((containerWidth * 2) / contentWidth) + 1;

        // Create duplicates of the text
        const textContent: string = Array(requiredCopies).fill(text).join(` ${separator} `);
        contentElement.textContent = textContent;

        let position: number = 0;
        let animationFrameId: number;

        const scroll = (): void => {
            position -= 1;

            // Reset position when one text length is scrolled
            if (Math.abs(position) >= contentElement.offsetWidth / requiredCopies) {
                position = 0;
            }

            contentElement.style.transform = `translateX(${position}px)`;
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [text, speed, separator]);

    return (
        <div className="relative w-full overflow-hidden  py-4">
            <div
                ref={scrollRef}
                className="relative w-full"
            >
                <div
                    ref={contentRef}
                    className="inline-block whitespace-nowrap text-heading font-satisfies my-10"
                >
                    {text}
                </div>
            </div>
        </div>
    );
};

export default InfiniteScroll;