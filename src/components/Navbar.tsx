import Image from 'next/image'
import React from 'react'
import logo from "../../public/LOGO.png"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center  p-2 px-16 my-4'>
      <div className='flex items-center gap-4'>
        <Image src={logo} alt="Logo" />
        <ul className='flex  gap-4 text-lg'>
          <li className='text-[#FF5555] font-bold '>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
      <div>
        <button className='bg-black px-4 py-2 text-white rounded-md w-[180px] h-[40px]'>Download</button>
      </div>
    </div>
  )
}

export default Navbar