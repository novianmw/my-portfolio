import Image from 'next/image'
import { webSkills } from '../constant'
export default function SkillHero() {
    return (
        <>
            <section className='flex justify-center items-center py-32'>
                <div className='flex flex-1 flex-col'>
                    <div className='flex border-b-2 w-full'>
                        <h1 className='text-3xl mx-5'>Web Skills</h1>
                    </div>
                    <div className='flex flex-1 md:flex-row flex-col flex-wrap justify-start items-center mr-3 py-10'>
                        {webSkills.map((skill) => (
                            <div key={skill.id} className='flex flex-1 justify-start items-center flex-col'>
                                <Image src={skill.img} alt={skill.content} className='flex flex-row flex-wrap md:w-24 w-14' />
                                <h3 className='py-2 md:text-2xl text-lg mr-3 flex flex-1 flex-row uppercase'>{skill.content}</h3>
                            </div>
                        ))}
                    </div>
                    <div className='flex border-b-2 w-full mt-10'></div>
                    <div className='flex justify-center items-center w-full my-96'>
                        <h1 className='text-3xl mx-5'>
                            <span className='bg-red-400 bg-clip-text text-transparent'>and keep growing . . .</span>
                        </h1>
                    </div>
                    <div className='flex-flex-1 flex-col'>
                        <div className='flex justify-center md:justify-start items-center'>
                            <p className='py-3 md:py-10 md:px-10 px-4 text-4xl md:text-6xl'>
                                <span className='bg-gradient-to-r from-sky-300 to-white bg-clip-text text-transparent'>"Dreams</span>
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='py-3 md:py-10 md:mr-[300px] text-4xl md:text-6xl'>are Fragile</p>
                        </div>
                        <div className='flex justify-center md:justify-end items-center md:mb-32'>
                            <p className='py-3 md:py-10 md:px-10 px-4 text-4xl md:text-6xl'>
                                but <span className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>Indestructible</span>
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <p className='py-3 md:px-10 px-4 text-4xl md:text-6xl text-center'>
                                <span className='bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent'>As long as</span> you{' '}
                                <span className='bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent'>Believe."</span>
                            </p>
                        </div>
                        <div className='flex justify-end items-center'>
                            <p className='py-3 md:py-5 md:px-10 px-4 text-xl'>Magnetized, 2013</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
