import Link from 'next/link'
import Image from 'next/image'
import { logo } from '../public/assets/list'
export default function Footer() {
    return (
        <>
            <section className='flex justify-center items-start p-10 md:pt-20 md:pb-10'>
                <div className='flex flex-1 flex-col justify-between max-w-[500px]'>
                    <div className='md:flex py-3 md:mx-0 mx-auto hidden'>
                        <Link href='/' className='flex justify-start items-center cursor-pointer text-lg'>
                            <Image src={logo} width={50} alt='logo' className='mr-2' />
                            <p className='text-3xl'>My Resume</p>
                        </Link>
                    </div>
                    <div className='flex flex-1 md:hidden flex-col justify-between'>
                        <div className='flex text-center flex-col py-1 md:py-5'>
                            <h1 className='text-lg font-light'>Location :</h1>
                            <h1 className='text-lg py-1'>Central of Java, Indonesia</h1>
                        </div>
                        <div className='flex text-center flex-col py-1 md:py-5'>
                            <h1 className='text-lg font-light'>E-mail :</h1>
                            <h1 className='text-lg py-1'>
                                <a href='mailto:novianmw@gmail.com'>novian.mulyoadi.w@gmail.com</a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex flex-1 md:flex-row flex-col justify-between'>
                    <div className='flex text-left flex-col'>
                        <h1 className='text-lg font-light'>Location :</h1>
                        <h1 className='text-lg py-1'>Central of Java, Indonesia</h1>
                    </div>
                    <div className='flex text-left flex-col'>
                        <h1 className='text-lg font-light'>E-mail :</h1>
                        <h1 className='text-lg py-1'>
                            <a href='mailto:novianmw@gmail.com'>novian.mulyoadi.w@gmail.com</a>
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}
