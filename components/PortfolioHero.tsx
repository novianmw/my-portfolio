import Image from "next/image"
import { useState } from "react"
import { ImgPorto1, ImgPorto2, ImgPorto3 } from "../public/assets/list"
import Slider from "./Slider"
import SlickPorto from "./SlickPorto"

export default function PortfolioHero() {
    return (
        <>
            <section className="flex justify-center items-center pb-32">
                <div className="flex text-center flex-col">
                    <div className="flex justify-center items-center my-32">
                        <h1 className="text-4xl md:text-6xl md:text-[100px]">
                            My <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Portfolio</span> so{" "}
                            <span className="bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent">far . . .</span>
                        </h1>
                    </div>
                    <div className="flex justify-center items-center py-14">
                        {/* <Slider /> */}
                        <SlickPorto />
                    </div>
                </div>
            </section>
        </>
    )
}
