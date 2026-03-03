import React from 'react'
import image from '../assets/Web Designs/Pasy .png'
import { Parallax } from 'react-scroll-parallax'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function About() {
    return (

        <Parallax speed={-5} className="mx-auto max-w-7xl px-6 lg:px-8 py-20 ">
            <section id='contact' className="mx-auto max-w-2xl lg:mx-0 w-1/2">
                <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Get in Touch</h2>
                <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                    I’m Vishal Kumar, a MERN developer focused on building clean, responsive, and user-friendly websites.
                    I’ve worked with startups and small businesses to create modern websites using platforms like Shopify, WordPress, and Dukaan—crafting engaging visuals and smooth digital experiences that look great on every screen.
                </p>
            </section>
            {/* <div className="mx-auto max-w-2xl w-1/2">
                <img src={image} alt="" />
            </div> */}

            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col-reverse gap-1 text-center">
                        <a href='linkedin.com/in/vishalvk29/' className="text-lg text-gray-300">LinkedIn</a>
                        <a href='linkedin.com/in/vishalvk29/' className="text-4xl font-semibold relative p-4 rounded-full bg-gray-800 text-gray-300 
                   transition duration-300 transform 
                   hover:scale-110 hover:text-blue-400
                   hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] mx-auto"><FaLinkedin /></a>
                    </div>
                    <div className="flex flex-col-reverse gap-1 text-center">
                        <a href='https://github.com/imvishalvk/' className="text-base/7 text-gray-300">GitHub</a>
                        <a href='https://github.com/imvishalvk/' className="text-4xl font-semibold relative p-4 rounded-full bg-gray-800 text-gray-300 
                   transition duration-300 transform 
                   hover:scale-110 hover:text-white
                   hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] mx-auto"><FaGithub /></a>
                    </div>
                    <div className="flex flex-col-reverse gap-1 text-center">
                        <a href='mailto:vkvishalkr29@gmail.com' className="text-base/7 text-gray-300">Gmail</a>
                        <a href='mailto:vkvishalkr29@gmail.com' className="text-4xl font-semibold relative p-4 rounded-full bg-gray-800 text-gray-300 
                   transition duration-300 transform 
                   hover:scale-110 hover:text-red-400
                   hover:shadow-[0_0_25px_rgba(248,113,113,0.7)] mx-auto"><FaEnvelope /></a>
                    </div>
                    <div className="flex flex-col-reverse gap-1 text-center">
                        <a href='https://www.instagram.com/imvishalvk/' className="text-base/7 text-gray-300">Instagram</a>
                        <a href='https://www.instagram.com/imvishalvk/' className="text-4xl font-semibold relative p-4 rounded-full bg-gray-800 text-gray-300 
                   transition duration-300 transform 
                   hover:scale-110 hover:text-pink-500
                   hover:shadow-[0_0_25px_rgba(236,72,153,0.7)] mx-auto"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default About