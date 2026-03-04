import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function About() {
    return (
        <Parallax speed={-5} className="mx-auto max-w-7xl px-6 lg:px-8 py-20" id='contact'>
            <section  className="mx-auto max-w-2xl lg:mx-0 w-full lg:w-1/2">
                <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                    Get in Touch
                </h2>
                <p className="mt-6 text-base font-medium text-gray-300 sm:text-lg lg:text-xl leading-relaxed">
                    I'm Vishal Kumar, a MERN developer focused on building clean, responsive, and user-friendly websites.
                    I've worked with startups and small businesses to create modern websites using platforms like Shopify, WordPress, and Dukaan—crafting engaging visuals and smooth digital experiences that look great on every screen.
                </p>
            </section>

            <div className="mt-10 lg:mt-16">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">

                    <div className="flex flex-col items-center gap-2">
                        <a
                            href='https://linkedin.com/in/vishalvk29/'
                            className="text-3xl sm:text-4xl p-4 rounded-full bg-gray-800 text-gray-300
                                transition duration-300 transform
                                hover:scale-110 hover:text-blue-400
                                hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
                        >
                            <FaLinkedin />
                        </a>
                        <a href='https://linkedin.com/in/vishalvk29/' target="_blank" className="text-sm sm:text-base text-gray-300">
                            LinkedIn
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <a
                            href='https://github.com/imvishalvk/'
                            className="text-3xl sm:text-4xl p-4 rounded-full bg-gray-800 text-gray-300
                                transition duration-300 transform
                                hover:scale-110 hover:text-white
                                hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]"
                        >
                            <FaGithub />
                        </a>
                        <a href='https://github.com/imvishalvk/' target="_blank" className="text-sm sm:text-base text-gray-300">
                            GitHub
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <a
                            href='mailto:vkvishalkr29@gmail.com' target="_blank"
                            className="text-3xl sm:text-4xl p-4 rounded-full bg-gray-800 text-gray-300
                                transition duration-300 transform
                                hover:scale-110 hover:text-red-400
                                hover:shadow-[0_0_25px_rgba(248,113,113,0.7)]"
                        >
                            <FaEnvelope />
                        </a>
                        <a href='mailto:vkvishalkr29@gmail.com' target="_blank" className="text-sm sm:text-base text-gray-300">
                            Gmail
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <a
                            href='https://www.instagram.com/imvishalvk/'
                            className="text-3xl sm:text-4xl p-4 rounded-full bg-gray-800 text-gray-300
                                transition duration-300 transform
                                hover:scale-110 hover:text-pink-500
                                hover:shadow-[0_0_25px_rgba(236,72,153,0.7)]"
                        >
                            <FaInstagram />
                        </a>
                        <a href='https://www.instagram.com/imvishalvk/' target="_blank" className="text-sm sm:text-base text-gray-300">
                            Instagram
                        </a>
                    </div>

                </div>
            </div>
        </Parallax>
    )
}

export default About