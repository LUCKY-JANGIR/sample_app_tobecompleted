"use client";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contect from "./components/Contect";
import Projects from "./components/Projects";
import Customcursor from "./components/Customecursor";

export default function Page() {
  const pages = ["home", "about", "contectus", "projects"];
  const color = ["#059669", "#e11d48", "#d97706", "#3b82f6"]; // Colors for shadows and borders (last color changed to bluish)
  const [activeIndex, setActiveIndex] = useState(null); // Track the active card index

  // Map index to corresponding components
  const components = [
    <Home key="home" />,
    <About key="about" />,
    <Contect key="contectus" />,
    <Projects key="projects" />,
  ];

  // Handle card click
  const handleCardClick = (index) => {
    setActiveIndex(index); // Set the active card index
  };

  // Handle Escape key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null); // Reset the active card index
      }
    };

    window.addEventListener("keydown", handleKeyDown); // Add event listener
    return () => window.removeEventListener("keydown", handleKeyDown); // Cleanup
  }, []);

  return (
    <div className="flex flex-wrap max-h-screen h-full overflow">
      <Customcursor />

      {pages.map((page, index) => (
        <div
          key={index}
          onClick={() => handleCardClick(index)}
          style={{
            borderColor: "#d1d5db", // Default gray border color
          }}
          className={`self-center m-auto border-2 rounded-lg transition-all duration-300  flex items-center justify-center ${activeIndex === index
            ? "fixed top-0 left-0 w-full h-full z-20 border-none rounded-none" // Full-screen styles for the clicked card
            : activeIndex !== null
              ? "hidden " // Hide other cards when one is active
              : "h-[45%] w-[45%]" // Grid styles for inactive cards
            }`}
          // Apply hover styles dynamically
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = color[index]; // Change border color on hover
            e.currentTarget.style.boxShadow = `0 6px 12px -1px rgba(${hexToRgb(
              color[index]
            )}, 0.4), 0 4px 8px -1px rgba(${hexToRgb(color[index])}, 0.3)`; // Larger and dimmer shadow
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#d1d5db"; // Reset border color to gray
            e.currentTarget.style.boxShadow = "none"; // Remove shadow
          }}
        >
          {activeIndex === index ? components[index] : page}
        </div>
      ))}
    </div>
  );
}

// Helper function to convert hex color to RGB
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}