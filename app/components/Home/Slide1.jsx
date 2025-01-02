import React from 'react'
import Image from "next/image";
import img from "../../../public/111122.jpg";
export default function Slide1() {
    return (
        <div>
            <div className="flex items-center justify-between h-full w-full">
                <div>
                    <div className="uppercase font-sans">
                        <span className="text-gray-500 font-bold font-mono">Web Developer</span>
                        <div className="my-3">
                            <p className="text-6xl text-zinc-400">hi! i am</p>
                            <h1 className="text-6xl text-teal-400">mayank jangir</h1>
                        </div>
                    </div>
                    <div className="text-zinc-400 font-mono">
                        here we create some awesome web sites Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem cumque nostrum consequatur iure vero alias perferendis pariatur assumenda ducimus. Illo repudiandae quia eveniet iste quidem, eum dolorum asperiores natus iure.
                    </div>
                </div>
                <div className="h-[55vh] w-[55vh] rounded-full overflow-hidden flex items-center border-4 border-double border-teal-600 justify-center bg-slate-900">
                    <Image src={img} width={0} alt="img" height={0} className="h-full"></Image>
                </div>
            </div>
        </div>
    )
}
