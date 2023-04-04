import { useState } from "react"
import { ImgPorto1, ImgPorto2, ImgPorto3 } from "../public/assets/list"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        ImgPorto1,
        ImgPorto2,
        ImgPorto3
    ]

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const dotClick = (index) => {
        setCurrentSlide(index)
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="relative md:w-[1280px] md:h-[800px] w-[300px] h-[200px]">
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                        {slides.map((slide, index)=> (
                            <Image key={null} src={slide} alt={`Slide ${index}`} className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}/>
                            ))}
                    </div>
                    <button onClick={prevSlide} className="absolute top-1/2 md:-left-14 left-1 z-10 p-3 text-white rounded-full bg-gray-500 hover:bg-gray-700">
                        <FaChevronLeft/>
                    </button>
                    <button onClick={prevSlide} className="absolute top-1/2 md:-right-14 right-1 z-10 p-3 text-white rounded-full bg-gray-500 hover:bg-gray-700">
                        <FaChevronRight/>
                    </button>
                    <div className=""></div>
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((slide, index) => (
                        <button key={index} className={`w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none ${index === currentSlide ? 'bg-gray-500' : 'bg-gray-100'}`} 
                        onClick={() => dotClick(index)}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}