import Image from 'next/image'
import { cover } from '../public/assets/list'
import ButtonHire from './ButtonHire'

export default function Hero() {
    return (
        <>
            <section className='flex justify-center items-center'>
                {/* <div className='flex flex-wrap md:hidden justify-center items-center -mt-24'>
                    <Image src={cover} alt='cover' className='w-[100%]' />
                </div> */}
                <div className='flex flex-1 md:flex-row flex-col'>
                    <div className='flex flex-1 flex-col md:text-left text-center'>
                        <h1 className='text-6xl py-2 '>Hi,</h1>
                        <h1 className='text-6xl py-2'>
                            I'm <span className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>Novian</span>
                        </h1>
                        <h3 className='text-3xl py-5'>Front End Web Developer</h3>
                        <div className='md:text-left text-center mt-10 text-white'>
                            <h3 className='text-lg text-orange-500 py-2'>Expert on</h3>
                            <h2 className='text-4xl py-0'>Based in Indonesia.</h2>
                            <h2 className='text-4xl py-2 leading-[px]'>I'm a Developer for making a website more interactive.</h2>
                            <p className='text-lg text-gray-500 py-2'>
                                Hey, if you looking for website design to build your brand and grow up your business? let's make a point
                            </p>
                        </div>
                        <div className='md:mx-0 mx-auto py-2 font-normal text-lg'>
                            <ButtonHire />
                        </div>
                    </div>
                </div>
                <div className='justify-center items-center md:flex flex-1 flex-col -mt-52 ml-20 hidden'>
                    <Image src={cover} alt='cover' className='w-[100%]' />
                </div>
            </section>
        </>
    )
}
