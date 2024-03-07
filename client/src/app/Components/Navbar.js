"use client"

import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {
  // useEffect(() => {
  //   const data = localStorage.getItem("authToken");
    
  // }, []);

  // if (typeof window !== 'undefined') {
  //   // Perform localStorage action
  //   const item = localStorage.getItem('authToken')
  // }

  const handleClick = () => {
    localStorage.removeItem("authToken");
  };

  


  return (
    <div className="fixed w-full bg-white top-0 z-[99] h-[4.5rem]">
      <div className="flex justify-between px-4 py-4">
        <div className="flex items-center">
          <img
            src="https://res.cloudinary.com/dj63x1zgg/image/upload/v1709475738/Gemini_Generated_Image-removebg-preview_qbej67.png"
            className="h-[3rem]"
            alt="Logo"
          />

          <h1 className="items-center text-3xl font-semibold">
            <span>Quick</span>
            <span className="text-[#dd610f]">Bite</span>
          </h1>
        </div>

        <div>
          
        {localStorage.getItem('authToken') ?
                <div className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                 <li>
                <Link
                  href="/"
                  class="block py-2 px-3 text-white bg-[#dd610f] rounded md:bg-transparent md:text-[#dd610f] md:p-0 dark:text-white md:dark:text-[#dd610f]"
                  aria-current="page"
                >
                  Home
                </Link>
              </li> 
                    <li>
                    <Link
                      href="/orders"
                      class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dd610f] md:p-0 dark:text-white md:dark:hover:text-[#dd610f] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#dd610f] md:p-0 dark:text-white md:dark:hover:text-[#dd610f] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Cart
                    </Link>
                  </li>
                  <button
          type="submit" className="text-white bg-[#dd610f] hover:bg-[#b14e0c] focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#dd610f] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <Link
                      onClick={handleClick}
                      href="/login"
                      class="block py-2 px-3 text-white rounded hover:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Logout
                      </Link>
                  </button>
                  
                  
                </div> :

                <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  
                  <button
          type="submit"
          
          className="text-white bg-[#dd610f] hover:bg-[#b14e0c] focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#dd610f] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
                    <Link
                      href="/login"
                      class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-[#dd610f] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Login
                      </Link>
                      </button>
                
              
              
                
              
                      <button
          type="submit"
          
          className="text-white bg-[#dd610f] hover:bg-[#b14e0c] focus:ring-4 focus:outline-none focus:ring-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#dd610f] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
                    <Link
                      href="/createuser"
                      class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-[#dd610f] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      Signup
                    </Link>
                  </button>
                </div>
               } 

        </div>
      </div>
    </div>
  );
};

export default Navbar;
