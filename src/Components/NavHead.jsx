import React from 'react'

function NavHead({ onContactClick }) {
  return (
    <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <header className="inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-auto" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              command="show-modal"
              commandfor="mobile-menu"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#"            className="text-sm/6 font-semibold text-white hover:text-indigo-400 transition">Home</a>
            <a href="#technologies" className="text-sm/6 font-semibold text-white hover:text-indigo-400 transition">Skills</a>
            <a href="#projects"    className="text-sm/6 font-semibold text-white hover:text-indigo-400 transition">Projects</a>
            <a href="#plans"     className="text-sm/6 font-semibold text-white hover:text-indigo-400 transition">Plans</a>
            <a href="#contact"     className="text-sm/6 font-semibold text-white hover:text-indigo-400 transition">Contact</a>
          </div>

          {/* Desktop CTA — opens modal */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              onClick={onContactClick}
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Connect Now
            </button>
          </div>
        </nav>

        {/* Mobile menu dialog */}
        <el-dialog>
          <dialog id="mobile-menu" className="backdrop:bg-transparent lg:hidden">
            <div tabIndex="0" className="fixed inset-0 focus:outline-none">
              <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-auto" />
                  </a>
                  <button type="button" command="close" commandfor="mobile-menu" className="-m-2.5 rounded-md p-2.5 text-gray-200">
                    <span className="sr-only">Close menu</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                      <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white/10">
                    <div className="space-y-2 py-6">
                      <a href="#"             className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Home</a>
                      <a href="#technologies" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Skills</a>
                      <a href="#projects"     className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Projects</a>
                      <a href="#pricing"      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Plans</a>
                      <a href="#contact"      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">Contact</a>
                    </div>
                    <div className="py-6">
                      {/* Mobile CTA — also opens modal */}
                      <button
                        onClick={onContactClick}
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
                      >
                        Connect Now
                      </button>
                    </div>
                  </div>
                </div>
              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog>
      </header>
    </div>
  )
}

export default NavHead
