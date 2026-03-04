import React from 'react'
import { Parallax } from 'react-scroll-parallax'

function Hero1() {
    return (
        <Parallax speed={-5} className="bg-gray-900 ">
            <div className="mx-auto max-w-2xl py-15 pt-25">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                        Start everything online don't be a minimun. <a href="#" className="font-semibold text-indigo-400"><span aria-hidden="true" className="absolute inset-0"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">Hello ! I am Vishal.. Visual Designer</h1>
                    <br />
                    <p className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-3xl">
                        <div className="text">
                            <p>I CAN
                                <span className='text-green-600' >
                                    <span> CREATE</span>
                                    <span> DESIGN</span>
                                    <span> ANIMATE</span>
                                    <span> CREATE</span>
                                </span>
                                YOUR IMAGINATION
                            </p>
                            <div class="My-Domains-container text-base text-gray-400">
                                <div class="My-Domains-content ">
                                    {/* <!-- Your repeating content goes here --> */}
                                    <span>Video Editing</span>
                                    <span>Website Development</span>
                                    <span>Graphic Designing</span>
                                    <span>UI UX Design</span>
                                    <span>Photo Editing</span>
                                    <span>Buisness Plan Execution</span>
                                </div>
                                <div class="My-Domains-content">
                                    {/* Duplicate your repeating content here */}
                                    <span>Video Editing</span>
                                    <span>Website Development</span>
                                    <span>Graphic Designing</span>
                                    <span>UI UX Design</span>
                                    <span>Photo Editing</span>
                                    <span>Buisness Plan Execution</span>
                                </div>
                            </div>
                        </div>
                    </p>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">  I am here to create your digital presence in the market.

                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {/* <a href="#" className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-white text-sm font-semibold transition duration-300 transform 
                   hover:scale-110 hover:text-blue-400
                   hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:text-black">Get started</a> */}
                        <a href='#technologies'
                            className="relative px-7.5 py-3.5 rounded-full bg-gray-800 text-gray-300
             transition duration-300 transform
             hover:scale-110 hover:text-blue-400
             hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
                        >
                            Learn More
                        </a>
                        {/* <a href="#" className="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a> */}
                    </div>
                </div>
            </div>
        </Parallax>

    )
}

export default Hero1