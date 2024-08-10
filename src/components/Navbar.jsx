import React from 'react'
import logo from '../assets/img/logo.png'

const Navbar = () => {
   return (
      <>
         <nav className='bg-indigo-700 border-b border-indigo-500'>
            <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
               <div className="flex h-20 items-center justify-between lg:justify-between">
                  <div className="flex flex-1 items-center justify-center md:items-stretch lg:justify-start">
                     <div className="flex flex-shrink-0 items-center">
                        <a className='flex flex-shrink-0 items-center mr-4'
                           href="/index.html">
                           <img
                              className="block h-8 w-auto lg:hidden md:hidden sm:hidden"
                              src={logo}
                              alt="React Job"
                           />
                           <span className="hidden md:block text-white text-2xl font-bold ml-2">React Job</span>
                     </a>
                     </div>
                  </div>
                  <div className=" lg:flex lg:space-x-4">
                     <a href="#" className="text-white hover:text-indigo-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                     <a href="#" className="text-white hover:text-indigo-300 px-3 py-2 rounded-md text-sm font-medium">Jobs</a>
                     <a href="#" className="text-white hover:text-indigo-300 px-3 py-2 rounded-md text-sm font-medium">Add Job</a>
                  </div>
               </div>
            </div>
         </nav >
      </>
   )
}

export default Navbar
