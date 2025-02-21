"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, AudioLines } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import singerPlaying from "@/public/assets/videos/singer.gif"
const MusicToggle = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const musicSrc = "/music.mp3"; // Ensure this file is inside /public

    useEffect(() => {
        // Initialize audio only once
        audioRef.current = new Audio(musicSrc);
        audioRef.current.loop = true;


        const handleVisibilityChange = () => {
            if (document.hidden) {
                audioRef.current?.pause();
                setIsPlaying(false);
            } else {
                if (isPlaying) {
                    audioRef.current?.play();
                }
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            audioRef.current?.pause();
        };
    }, []); // Empty dependency ensures this runs only once

    const toggleMusic = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((err) => {
                console.error("Audio playback error:", err);
            });
        }
        setIsPlaying(!isPlaying);
    };



    return (
        <motion.button
            onClick={toggleMusic}
            whileTap={{ scale: 0.9 }}
            className="p-4 bg-[#111] text-white  border border-[#444] rounded-full   hover:bg-gray-800 transition duration-300"
        >
            {isPlaying ? <AudioLines className="animate-pulse" size={24} /> : <Play strokeWidth={2.5} size={22} />}
        </motion.button>
    );
};

export default MusicToggle;
