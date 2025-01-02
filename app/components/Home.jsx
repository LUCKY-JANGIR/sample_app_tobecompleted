"use client";

import { useState, useEffect } from "react";
import Contect from "./Contect";
import About from "./About";
import Projects from "./Projects";
import Slide1 from "./Home/slide1";

export default function Home() {
    const [start, setStart] = useState(false); // Toggle slideshow
    const [slideIndex, setSlideIndex] = useState(0); // Track the current slide index

    // Define slides with the components
    const slides = [
        <Slide1 key="slide1" />,
        <Contect key="slide2" />, // Contect component
        <About key="slide3" />,   // About component
        <Projects key="slide4" />, // Projects component
    ];

    // Handle arrow key navigation (only when start is true)
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (start) {
                if (event.key === "ArrowRight") {
                    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length); // Move to next slide
                } else if (event.key === "ArrowLeft") {
                    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length); // Move to previous slide
                }
                else if (event.key === "Enter") {
                    setStart(!start); // Toggle the start state
                }
            } else if (event.key === "Enter") {
                setStart(!start); // Toggle the start state
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [start, slides.length]);

    return (
        <div
            className={`max-h-screen items-center justify-between flex h-[80vh] w-[80vw] border-2 p-4 ${start ? "scale-125" : ""
                } transition-all ease-out duration-700`}
        >
            {/* Slideshow Container (only active when start is true) */}
            <div className="flex overflow-hidden h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        style={{
                            transform: `translateX(${-slideIndex * 100}%)`, // Slide the container
                            transition: "transform 0.5s ease-in-out",
                            minWidth: "100%", // Ensure each slide takes full width
                        }}
                    >
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
}