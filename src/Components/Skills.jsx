import React from 'react'
import { FaHtml5, FaCss3, FaNodeJs, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

function Skills() {
    return (
        <section id='technologies' className="bg-gray-900 py-15">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base/7 font-semibold text-indigo-400">My Tech Stack</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
                        Technologies I Work With
                    </p>
                    <p className="mt-6 text-lg/8 text-gray-300">
                        From crafting pixel-perfect interfaces to building scalable backends, here are the core technologies I use to bring ideas to life.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-white">
                                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                    <FaHtml5 className='text-3xl' />
                                </div>
                                HTML5
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                I write clean, semantic HTML5 markup that improves accessibility, SEO, and browser compatibility — laying a solid foundation for every project I build.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-white">
                                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                    <FaCss3 className='text-3xl' />
                                </div>
                                CSS3
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                From responsive grid layouts to smooth animations and transitions, I use modern CSS3 alongside Tailwind CSS to craft visually polished, mobile-first designs.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-white">
                                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                    <IoLogoJavascript className='text-3xl' />
                                </div>
                                JavaScript
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                JavaScript is my go-to language for adding interactivity and logic. I'm comfortable with ES6+ features, async/await, DOM manipulation, and building dynamic user experiences.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-white">
                                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                    <RiReactjsFill className='text-3xl' />
                                </div>
                                React JS
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                I build fast, component-driven UIs with React — using hooks, context, and libraries like React Router and React Query to create seamless single-page applications.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-white">
                                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                    <FaNodeJs className='text-3xl' />
                                </div>
                                Node JS
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                I use Node.js to build fast, scalable server-side applications. Its non-blocking architecture makes it ideal for handling real-time features, REST APIs, and backend logic.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-white">
                                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                    <SiExpress className='text-3xl' />
                                </div>
                                Express JS
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                Express is my framework of choice for building RESTful APIs. I use it to handle routing, middleware, authentication with JWT, and connecting the frontend to the database layer.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-white">
                                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                    <DiMongodb className='text-3xl' />
                                </div>
                                MongoDB
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                I work with MongoDB for flexible, document-based data storage. Using Mongoose, I design schemas, manage relationships, and build efficient queries for data-driven applications.
                            </dd>
                        </div>

                        <div className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-white">
                                <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                    <FaGithub className='text-3xl' />
                                </div>
                                GitHub
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-400">
                                I use Git and GitHub for version control across all my projects — managing branches, pull requests, and collaborative workflows to keep codebases clean and well-documented.
                            </dd>
                        </div>

                    </dl>
                </div>
            </div>
        </section>
    )
}

export default Skills