import Head from "next/head"
import { Navbar, Hero, SocialMedia, Footer } from "../components/list"

export default function Home() {
    return (
        <>
            <Head>
                <title>My Resume | Novian MW</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="bg-black overflow-hidden w-full">
                <div className="md:px-14 px-5 flex justify-center items-center w-full">
                    <div className="text-white xl:max-w-[1280px] py-5 w-full z-[10]">
                        <Navbar />
                    </div>
                </div>
                <div className="md:px-14 px-5 flex justify-center items-start">
                    <div className="text-white xl:max-w-[1280px] py-6 w-full">
                        <Hero />
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    )
}
