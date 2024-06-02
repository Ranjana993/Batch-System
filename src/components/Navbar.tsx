"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logo from "../../public/LOGO.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 md:px-16 my-4 border-b">
      <div className='flex gap-4'>
        <div className="flex items-center gap-4">
          <Image src={logo} alt="Logo" width={80} height={80} />
        </div>
        <div className='hidden md:flex items-center gap-4'>
          <ul className="flex gap-4 text-lg">
            <li className="text-[#FF5555] font-bold">Home</li>
            <li className='hover:text-[#FF5555]'>About Us</li>
            <li className='hover:text-[#FF5555]'>Pricing</li>
            <li className='hover:text-[#FF5555]'>Features</li>
          </ul>
        </div>
        
      </div>
      <div className="hidden md:flex items-center gap-4">
        <button className="bg-black px-4 py-3 text-white rounded-md w-[180px] ">
          Download
        </button>
      </div>
      <div className="md:hidden flex items-center gap-4">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {isMobileMenuOpen ? (
            <XIcon className="h-8 w-8 text-black" />
          ) : (
            <MenuIcon className="h-8 w-8 text-black" />
          )}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-10 right-10 bg-black/90 text-white z-50 rounded-xl shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 text-lg p-4">
            <li className="text-[#FF5555] font-bold p-2 w-full">Home</li>
            <li className='hover:bg-red-700 hover:text-white p-2 w-full'>About Us</li>
            <li className='hover:bg-red-700 hover:text-white p-2 w-full'>Pricing</li>
            <li className='hover:bg-red-700 hover:text-white p-2 w-full'>Features</li>
            <button className="bg-white px-4 py-2 text-black rounded-md w-full h-[40px]">
              Download
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
