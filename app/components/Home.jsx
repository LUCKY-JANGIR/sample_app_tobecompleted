"use client";
import Image from "next/image";
import img from "../../public/111122.jpg";
import { useState, useEffect } from "react";
import Contect from "./Contect";
import About from "./About";
import Projects from "./Projects";

export default function Home() {
    const [start, setStart] = useState(false); // Toggle slideshow
    const [slideIndex, setSlideIndex] = useState(0); // Track the current slide index

    // Define slides with the components
    const slides = [
        <div key="slide1" className="flex items-center justify-between h-full w-full">
            <div>
                <div className="uppercase font-sans">
                    <span className="text-gray-500 font-bold font-mono">Web Developer</span>
                    <div className="my-3">
                        <p className="text-6xl text-zinc-400">hi! i am</p>
                        <h1 className="text-6xl text-teal-400">mayank jangir</h1>
                    </div>
                </div>
                <div className="text-zinc-400 font-mono">
                    here we create some awesome web sites
                </div>
            </div>
            <div className="h-[55vh] w-[55vh] rounded-full overflow-hidden flex items-center border-4 border-double border-teal-600 justify-center bg-slate-900">
                <Image src={img} width={0} alt="img" height={0} className="h-full"></Image>
            </div>
        </div>,
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