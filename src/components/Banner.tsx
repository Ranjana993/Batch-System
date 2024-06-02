import Image from 'next/image'
import React from 'react'
import banner from "../../public/banner.png"
import bgGradiant from "../../public/bg-gradiant1.png"


const Banner = () => {
  return (
    <div className='w-full px-16'>
      <div className='relative h-screen w-full'>
        <Image className='absolute lg:block hidden' src={bgGradiant} alt="" />
        <Image className='absolute right-12 top-44' src={banner} alt="" />
      </div>
    </div>
  )
}

export default Banner