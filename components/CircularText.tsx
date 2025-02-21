import React from 'react';

export default function CircularText({ text = "SCROLL • DOWN • SCROLL • DOWN • ", radius = 50 }) {
    // Function to calculate the position of each character
    const createTextPath = () => {
        const characters = text.split('');
        const totalChars = characters.length;
        const circumference = 2 * Math.PI * radius;
        const anglePerChar = (360 / circumference) * (circumference / totalChars);

        return characters.map((char, i) => {
            const angle = i * anglePerChar;
            const rotation = angle - 90; // Start from top

            return (
                <div
                    key={i}
                    className="absolute left-1/2 top-1/2 origin-[0_-100px] transform"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transformOrigin: `0 ${radius}px`
                    }}
                >
                    {char}
                </div>
            );
        });
    };

    return (
        <div className="md:block hidden animate-spin-slow relative ">
            {/* Circle background */}
            <div
                className="rounded-full border-2 border-gray-300 scale-50"
                style={{
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`
                }}
            />

            {/* Text container */}
            <div
                className="absolute inset-0 text-center"
                style={{ fontSize: `10px` }}
            >
                {createTextPath()}
            </div>
        </div>
    );
};

// Example usage