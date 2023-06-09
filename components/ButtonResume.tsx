import Image from "next/image"
import { person } from "../public/assets/list"
import Link from "next/link"

export default function ButtonResume() {
    return (
        <Link target="_blank" href="https://www.cakeresume.com/s--DRhkzS6wOaBA0a7VqlkggA--/novian-mw">
            <button className="flex border border-black bg-gradient-to-r from-red-500 to-orange-500 rounded-lg py-2 px-6 font-medium text-lg cursor-pointer ">
                <Image src={person} width={30} alt="contact" className="mr-2" />
                Download Resume
            </button>
        </Link>
    )
}
