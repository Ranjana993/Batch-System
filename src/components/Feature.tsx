import Image from 'next/image'
import React from 'react'
import feastureImg from "../../public/feature.png"
import bgGradiant from "../../public/half_shadow.png"
import bgGradiant1 from "../../public/bg-gradiant1.png"

const Feature = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 py-2'>
      <div className='px-6 lg:px-16 relative h-screen flex-grow w-full lg:w-[50%] '>
        <Image className='absolute' src={bgGradiant1} alt="" />
        <Image className='absolute' src={feastureImg} alt="" />
      </div>
      <div className='pl-4 lg:pl-16 w-full lg:w-[50%]  lg:pt-24'>
        <div className='relative w-full'>
          <Image className='absolute right-0'  src={bgGradiant} alt=""/>
        </div>
        <h4 className='uppercase text-[#FF5555]'>Features</h4>
        <h2 className='text-4xl lg:text-[48px] capitalize font-bold'>uifry premium</h2>
        <div className='mt-4'>
          <h4 className='flex py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" fill='red' className="text-orange-500" /></svg>
            <span className='capitalize'>budgeting intervals</span>
          </h4>
          <p className='pr-0 lg:pr-12'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className='mt-4'>
          <h4 className='flex py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" fill='red' className="text-orange-500" /></svg>
            <span className='capitalize'>budgeting intervals</span>
          </h4>
          <p className='pr-0 lg:pr-12'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className='mt-4'>
          <h4 className='flex py-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" fill='red' className="text-orange-500" /></svg>
            <span className='capitalize'>budgeting intervals</span>
          </h4>
          <p className='pr-0 lg:pr-12'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
      </div>
    </div>
  )
}

export default Feature