
"use client"
import { useEffect, useState } from "react";
import CircularText from "./CircularText";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Get the project section element
            const projectSection = document.getElementById("projectSection");

            if (projectSection) {
                const rect = projectSection.getBoundingClientRect();
                const isInside =
                    e.clientX >= rect.left &&
                    e.clientX <= rect.right &&
                    e.clientY >= rect.top &&
                    e.clientY <= rect.bottom;

                setHidden(isInside);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 ${hidden ? "opacity-0" : "opacity-100 grid place-items-center "
                }`}
            style={{
                transform: `translate(${position.x - 50}px, ${position.y - 50}px)`,
            }}
        >

            <CircularText />
        </div>
    );
};

export default Cursor;
