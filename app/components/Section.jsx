"use client"
import React, { useState } from 'react'

export default function Section() {
    const [size, setSize] = useState(false)
    const buttonclick = () => {
        setSize(!size);
    }
    return (
        <button
            onClick={buttonclick}
            className={` self-center m-auto relative border-2 rounded-lg transition-all duration-300 ${size ? 'h-full w-full' : 'h-[45%] w-[45%]'
                }`}
        >
            hi
        </button>
    )
}