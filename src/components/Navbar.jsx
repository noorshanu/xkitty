import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { BsTwitterX, BsInstagram, BsFacebook } from "react-icons/bs";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-transparent py-4  absolute top-0 w-full z-40">
      <div className=" max-w-full sm:max-w-3xl mx-auto px-4 flex justify-between sm:justify-center items-center">
        {/* Logo */}
        <div className="flex justify-center items-center flex-shrink-0 mr-6">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="images/logo.png" className="h-[100px]" alt=" Logo" />
        </a>

        </div>

        {/* Navigation menu */}
        <div className="hidden md:flex flex-grow justify-center">
          {/* <a href="/" className="text-black font-bold text-lg px-3 py-2 font-kid">Home</a>
          <a href="#about" className="text-black font-bold text-lg px-3 py-2 font-kid">About</a>
          <a href="#col" className="text-black font-bold text-lg px-3 py-2 font-kid">Features</a>
         
          <a href="#contact" className="text-black font-bold text-lg px-3 py-2 font-kid">Contact Us</a> */}
        </div>

        {/* Wallet Connect button */}
        <div className="md:flex items-center">
            <a href="#" className="bg-[#525252] rounded-full text-white px-4 py-2 text-xl font-kid  font-semibold ">Buy Now</a>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="md:hidden bg-white rounded-2xl border-2 border-[#000] px-2 pt-2 pb-3 space-y-1 m-4"
          >
            <a href="/" className="text-black font-bold text-lg block px-3 py-2">Home</a>
          
            <a href="#about" className="text-black font-bold text-lg block px-3 py-2">About</a>
            <a href="#col" className="text-black font-bold text-lg block px-3 py-2">Features</a>
            
            <div className=" flex items-center gap-4 text-white mb-6 ml-5">
            <a
                  href="https://twitter.com/XKitty_9"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <BsTwitterX />
                </a>
             
           

                <a
                  href="https://t.me/xkittysol" target="_blank"
                  className=" text-xl text-black bg-white hover:bg-[#1a4093] rounded-full p-2 border-2 border-[#000]  hover:text-[#fff]"
                >
                  <FaTelegram />
                </a>
              </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;

