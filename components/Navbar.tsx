import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { logo, menu, close } from "../public/assets/list"
import ButtonContact from "./ButtonContact"

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <section className="w-full flex justify-between items-center bg-black shadow-xl fixed left-0 top-0 py-5 px-6">
                <div className="font-bold text-xl text-white">
                    <Link href="/" className="flex justify-start items-center cursor-pointer">
                        <Image src={logo} alt="logo" className="mr-2" />
                        My Resume
                    </Link>
                </div>
                <ul className="list-none md:flex hidden justify-center items-center flex-1">
                    <li className="mx-10 font-normal cursor-pointer text-lg">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="mx-10 font-normal cursor-pointer text-lg">
                        <Link href="/skill">Skills</Link>
                    </li>
                    <li className="mx-10 font-normal cursor-pointer text-lg">
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                </ul>
                <div className="md:flex hidden">
                    <ButtonContact />
                </div>
                <div className="md:hidden flex justify-end items-center flex-1">
                    <Image
                        src={toggle ? close : menu}
                        alt="Menu"
                        width={6}
                        height={6}
                        className="w-6 h-6"
                        onClick={() => setToggle((prev) => !prev)}
                    />
                </div>
                <div className={`${toggle ? "flex" : "hidden"} mt-16 fixed inset-0 bg-black bg-opacity-50`} />
                <div className={`${toggle ? "flex" : "hidden"} w-full absolute top-16 left-0 border-t border-b border-b-white bg-black`}>
                    <ul className="w-full flex flex-col fixed left-0 bg-black">
                        <li className="text-center px-6 py-2 border-b-2 font-normal cursor-pointer text-lg">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="text-center px-6 py-2 border-b-2 font-normal cursor-pointer text-lg">
                            <Link href="/skill">Skills</Link>
                        </li>
                        <li className="text-center px-6 py-2 border-b-2 font-normal cursor-pointer text-lg">
                            <Link href="/portfolio">Portfolio</Link>
                        </li>
                        <div className="flex justify-center px-6 py-2 border-b-2 font-normal cursor-pointer text-lg">
                            <ButtonContact />
                        </div>
                    </ul>
                </div>
            </section>
        </>
    )
}
