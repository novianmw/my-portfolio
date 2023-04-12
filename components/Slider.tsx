import { useState } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { slides } from "../constant"

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const dotClick = (index: any) => {
        setCurrentSlide(index)
    }

    return (
        <>
            <section className="flex justify-center items-center flex-col">
                <div className="relative flex-col md:w-[1280px] md:h-[800px] w-[300px] h-[200px]">
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                        {slides.map((slide, index) => (
                            <Image
                                key={slide.id}
                                src={slide.img}
                                alt={`Slide ${slide.name}`}
                                className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-500 ${
                                    index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 md:-left-14 left-1 z-1 p-3 text-white rounded-full bg-gray-500 hover:bg-gray-700">
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 md:-right-14 right-1 z-1 p-3 text-white rounded-full bg-gray-500 hover:bg-gray-700">
                        <FaChevronRight />
                    </button>
                    <div className="absolute md:bottom-5 bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none ${
                                    index === currentSlide ? "bg-gray-500" : "bg-gray-100"
                                }`}
                                onClick={() => dotClick(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="-my-64 hidden md:flex flex-col justify-center items-center z-10">
                    <div className="border border-transparent bg-black opacity-80 w-[1280px] rounded-b-xl p-32 relative">
                        {slides.map((slide, index) => (
                            <h1
                                key={slide.id}
                                className={`bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent absolute inset-0 mt-10 text-4xl transition-opacity duration-500 ${
                                    index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}>
                                {slide.name}
                            </h1>
                        ))}
                    </div>
                    <div className="border border-transparent bg-black opacity-80 w-[1280px] rounded-b-xl p-32 relative">
                        {slides.map((slide, index) => (
                            <h1
                                key={slide.id}
                                className={`bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent absolute inset-0 text-xl -mt-36  transition-opacity duration-500 ${
                                    index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}>
                                {slide.content}
                            </h1>
                        ))}
                    </div>
                </div>
                <div className="mt-5 flex justify-center items-center md:hidden">
                    <div className="border border-transparent bg-black opacity-80 w-[300px] h-[100px] rounded-b-xl">
                        {slides.map((slide, index) => (
                            <h1
                                key={slide.id}
                                className={`absolute left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent text-xl transition-opacity duration-500 ${
                                    index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}>
                                {slide.name}
                            </h1>
                        ))}
                    </div>
                </div>
                <div className="-mt-14 flex justify-center items-center md:hidden">
                    <div className="border border-transparent bg-black opacity-80 w-[300px] h-[100px] rounded-b-xl">
                        {slides.map((slide, index) => (
                            <h1
                                key={slide.id}
                                className={`absolute left-0 right-0 bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent text-xl transition-opacity duration-500 ${
                                    index === currentSlide ? "opacity-100" : "opacity-0"
                                }`}>
                                {slide.content}
                            </h1>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
