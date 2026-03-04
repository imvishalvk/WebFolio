import React from "react";
import compPics from '../../assets/Web Designs/Drink Rent.png'
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";


function DrinkRent() {
  return (
    <Parallax speed={-5}  className="overflow-hidden bg-gray-900 py-15 items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          {/* Left Text Section */}
          <div className="">
            <div className="lg:max-w-lg">

              <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Drink Rent RO
              </p>

              <p className="mt-6 text-lg text-gray-300">
                Drink rent RO is a water filter company which needed web page for display the products and to connect with the users.
              </p>

              {/* Tech Stack */}
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-400 lg:max-w-none">

                <div className="relative pl-10">
                  <dt className="font-semibold text-white flex items-center gap-3">
                    <FaHtml5 className="text-orange-500 text-2xl" />
                    HTML
                  </dt>
                  <dd className="mt-1">
                    Structured and semantic markup used to build the landing page.
                  </dd>
                </div>

                <div className="relative pl-10">
                  <dt className="font-semibold text-white flex items-center gap-3">
                    <FaCss3 className="text-blue-500 text-2xl" />
                    CSS
                  </dt>
                  <dd className="mt-1">
                    Responsive styling with modern layout techniques.
                  </dd>
                </div>

                <div className="relative pl-10">
                  <dt className="font-semibold text-white flex items-center gap-3">
                    <FaJs className="text-yellow-400 text-2xl" />
                    JavaScript
                  </dt>
                  <dd className="mt-1">
                    Added interactivity and dynamic behavior.
                  </dd>
                </div>

              </dl>
            </div>
          </div>

          {/* Right Image with Hover Effect */}
          <a href="https://drinkrentro.in/" target="_blank" className="relative group overflow-hidden rounded-xl items-center flex">

            {/* Image */}
            <img
              src={compPics}
              alt="SOEL Project"
              className="w-full rounded-xl shadow-xl ring-1 ring-white/10 transition duration-500 group-hover:blur-sm group-hover:scale-105"
            />

            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Centered Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition duration-500">
                View Project
              </button>
            </div>

          </a>

        </div>
      </div>
    </Parallax>
  );
}

export default DrinkRent;