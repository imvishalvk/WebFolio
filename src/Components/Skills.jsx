import React from 'react'
import { FaHtml5, FaCss3, FaNodeJs,FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

function Skills() {
    return (
            <section id='technologies' class="bg-gray-900 py-15">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:text-center">
                        <h2 class="text-base/7 font-semibold text-indigo-400">Deploy faster</h2>
                        <p class="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">Everything you need to deploy your app</p>
                        <p class="mt-6 text-lg/8 text-gray-300">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
                    </div>
                    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-white">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        <FaHtml5 className='text-3xl' />
                                    </div>
                                    HTML
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-400">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-white">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        
                                        <FaCss3 className='text-3xl'/>

                                    </div>
                                    CSS
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-400">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-white">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        
                                        <IoLogoJavascript className='text-3xl'/>
                                    </div>
                                    JavaScript
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-400">Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-white">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        
                                        <RiReactjsFill className='text-3xl'/>
                                    </div>
                                    React JS
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-400">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-white">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        
                                        <FaNodeJs className='text-3xl'/>
                                    </div>
                                    Node JS
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-400">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-white">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        
                                        <SiExpress className='text-3xl'/>
                                    </div>
                                    Express JS
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-400">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-white">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        
                                        <DiMongodb className='text-3xl'/>
                                    </div>
                                    Mongo DB
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-400">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
                            </div>
                            <div class="relative pl-16">
                                <dt class="text-base/7 font-semibold text-white">
                                    <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                                        
                                        <FaGithub className='text-3xl'/>
                                    </div>
                                    Github
                                </dt>
                                <dd class="mt-2 text-base/7 text-gray-400">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>
    )
}

export default Skills