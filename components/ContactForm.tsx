import { ImgContact } from "@/components/public/assets/list"
import Image from "next/image"
import { ButtonSubmit } from "./list"
export default function ContactForm() {
    return (
        <div className="md:px-14 px-5 my-10 flex justify-center items-center">
            <div className="flex justify-between items-center flex-1 flex-row border rounded-xl">
                <div className="hidden md:flex justify-center items-center">
                    <Image src={ImgContact} alt="contact cover" className="w-[500px] h-auto border border-transparent rounded-xl" />
                </div>
                <div className="flex justify-center items-center">
                    <div className="mx-14 md:mt-14 mt-5 w-[400px] md:w-[500px] text-justify">
                        <form className="border border-slate-500 rounded-xl p-10" action="" method="post">
                            <div className="mb-5">
                                <label htmlFor="first name" className="mb-3 block text-base font-medium">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="first name"
                                    placeholder="First Name"
                                    className="w-full text-black rounded-md border border-white bg-white py-3 px-9 text-base font-medium outline-none focus:border-gray-400 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="last name" className="mb-3 block text-base font-medium">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="last name"
                                    id="last name"
                                    placeholder="Last Name"
                                    className="w-full text-black rounded-md border border-white bg-white py-3 px-9 text-base font-medium outline-none focus:border-gray-400 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="name" className="mb-3 block text-base font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className="w-full text-black rounded-md border border-white bg-white py-3 px-9 text-base font-medium outline-none focus:border-gray-400 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="" className="mb-3 block text-base font-medium">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Type your message . . ."
                                    className="w-full text-black rounded-md border border-white bg-white py-3 px-9 text-base font-medium outline-none focus:border-gray-400 focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <ButtonSubmit />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
