import Image from "next/image"
import { slides } from "../constant"
import Link from "next/link"
export default function SlickPorto() {
    return (
        <div id="wrapper" className="flex flex-col items-center w-full">
            {slides.map((slide, index) => (
                <div key={index} className="w-full flex flex-col items-center p-12 gap-3">
                    <Image src={slide.img} alt={slide.id} className="rounded-xl w-[800px]" />
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-[32px]">{slide.name}</div>
                    <div className="bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent text-[24px]">{slide.content}</div>
                    <Link target="_blank" href={slide.href}>
                        <button className="border rounded-xl px-4 py-2 hover:text-black hover:bg-white transition-opacity ">{slide.label}</button>
                    </Link>
                </div>
            ))}
        </div>
    )
}
