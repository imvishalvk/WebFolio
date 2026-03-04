import React from 'react'
import Soel from './Projects/Soel'
import DrinkRent from './Projects/DrinkRent'
import GkInterior from './Projects/GkInterior'
import Pasy from './Projects/Pasy'
import { Parallax } from 'react-scroll-parallax'

function Projects() {
    return (
        <section id='projects' className='bg-gray-900 py-15'>
            <div className="text-center bg-gray-900 ">
                <p className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Projects</p>
                <br />
            </div>
            <Soel />
             <hr className="w-4/5 text-white" />
            <DrinkRent />
             <hr className="w-4/5 text-white" />
            <GkInterior/>
             <hr className="w-4/5 text-white" />
            <Pasy/>
        </section>
    )
}

export default Projects