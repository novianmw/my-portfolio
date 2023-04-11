import Image from 'next/image'
import { telegram } from '../public/assets/list'
import Link from 'next/link'

export default function ButtonContact() {
    return (
        <Link href='/contact'>
            <button className='flex border bg-gradient-to-r from-sky-300 to-white text-transparent bg-clip-text rounded-lg py-2 px-6 font-medium text-lg '>
                <Image src={telegram} width={30} alt='contact' className='mr-2' />
                Contact
            </button>
        </Link>
    )
}
