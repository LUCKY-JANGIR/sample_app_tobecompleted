'use client';
import { useEffect, useState } from 'react';

export default function Customcursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <div
            className="fixed pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            {/* Ping Ball Effect */}
            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full  bg-white" />
            {/* Solid Ball */}
            <span className="relative inline-flex rounded-full h-4 w-4 border-2 border-gray-400 bg-white " />
        </div>
    );
}