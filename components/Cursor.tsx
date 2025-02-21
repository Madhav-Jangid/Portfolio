"use client"
import { useEffect, useRef, useState } from "react"
import CircularText from "./CircularText"
import { motion, useMotionValue, useSpring, animate } from "framer-motion" // Fixed import

const Cursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null)
    const [isLargeScreen, setIsLargeScreen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    // Motion values for smooth cursor movement
    const cursorX = useMotionValue(0)
    const cursorY = useMotionValue(0)

    // Spring physics for smooth following
    const springConfig = { damping: 25, stiffness: 1000 }
    const smoothX = useSpring(cursorX, springConfig)
    const smoothY = useSpring(cursorY, springConfig)

    // Handle screen size changes
    useEffect(() => {
        const updateScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 768)
        }

        updateScreenSize()
        window.addEventListener("resize", updateScreenSize)
        return () => window.removeEventListener("resize", updateScreenSize)
    }, [])

    // Handle mouse movement
    useEffect(() => {
        if (!isLargeScreen) return

        const handleMouseMove = (event: MouseEvent) => {
            // Update cursor position
            cursorX.set(event.clientX + 16) // Offset by half the cursor width
            cursorY.set(event.clientY + 25) // Offset by half the cursor height

            // Check if mouse is in project section
            const projectSection = document.getElementById("projectSection")
            if (projectSection) {
                const rect = projectSection.getBoundingClientRect()
                const isInside =
                    event.clientX >= rect.left &&
                    event.clientX <= rect.right &&
                    event.clientY >= rect.top &&
                    event.clientY <= rect.bottom

                setIsHidden(isInside)
            }

            // Optional: Check if cursor is over hoverable elements
            const hoveredElement = document.elementFromPoint(event.clientX, event.clientY)
            const isHoverable = hoveredElement?.closest('[data-hoverable]')
            setIsHovered(!!isHoverable)
        }

        // Handle cursor leaving the window
        const handleMouseLeave = () => {
            setIsHidden(true)
        }

        // Handle cursor entering the window
        const handleMouseEnter = () => {
            setIsHidden(false)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseleave", handleMouseLeave)
        window.addEventListener("mouseenter", handleMouseEnter)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseleave", handleMouseLeave)
            window.removeEventListener("mouseenter", handleMouseEnter)
        }
    }, [isLargeScreen, cursorX, cursorY])

    // Don't render on mobile/small screens
    if (!isLargeScreen) return null

    return (
        <motion.div
            ref={cursorRef}
            className={`fixed pointer-events-none z-[100] select-none grid place-items-center
                ${isHidden ? 'opacity-0' : 'opacity-100'}
                ${isHovered ? 'scale-150' : 'scale-100'}
            `}
            style={{
                x: smoothX,
                y: smoothY,
                transition: 'opacity 0.3s, transform 0.2s',
                width: '32px', // Explicit size for cursor
                height: '32px',
            }}
            animate={{
                scale: isHovered ? 1.5 : 1,
            }}
            transition={{
                type: "spring",
                damping: 1,
                stiffness: 500
            }}
        >
            <CircularText />
        </motion.div>
    )
}

export default Cursor