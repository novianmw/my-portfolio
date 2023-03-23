import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { logo, menu, close } from '../public/assets/list'
import ButtonContact from './ButtonContact'

export default function Navbar() {
    const [toggle, settoggle] = useState(false)
    return <>
        <section className="w-full flex justify-between items-center bg-black shadow-xl ">
            <div className="font-bold text-xl text-white">
                <Link href='/' className='flex justify-start items-center cursor-pointer'>
                    <Image src={logo} alt="logo" className='mr-2' />My Resume
                </Link>
            </div>
            <ul className='list-none md:flex hidden justify-center items-center flex-1'>
                <li className="mx-10 font-normal cursor-pointer text-lg"><Link href="/About">About</Link></li>
                <li className="mx-10 font-normal cursor-pointer text-lg"><Link href="/Skill">Skill</Link></li>
                <li className="mx-10 font-normal cursor-pointer text-lg"><Link href="/Portfolio">Portfolio</Link></li>
            </ul>
            <div className="md:flex hidden">
                <ButtonContact/>
            </div>
            <div className="md:hidden flex justify-end items-center flex-1">
                <Image src={`${toggle ? close : menu}`} width={30} height={30} alt="Menu" className='w-6 h-6' 
                onClick={() => settoggle((prev) => !prev)}/>
            </div>
        </section>
    </>
}
