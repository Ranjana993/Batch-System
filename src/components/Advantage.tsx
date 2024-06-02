import Image from 'next/image'
import React from 'react'
import advantagesImg from "../../public/advantages_img.png"
import notification from "../../public/notification_icon.png"
import bgGradiant1 from "../../public/bg-gradiant1.png"

const Advantage = () => {
  return (
    <div className='px-4 lg:px-16 flex flex-col lg:flex-row gap-4 border-b'>
      <div className='pl-0 lg:pl-16 w-full lg:w-[50%] pt-24'>
        <h4 className='uppercase text-[#FF5555]'>advatnages</h4>
        <h2 className='text-4xl lg:text-[48px] capitalize font-bold'>why choose Uifry?</h2>
        <h3 className='flex items-center gap-1 lg:gap-2 py-0 lg:py-4'><Image src={notification} width={48} height={48} alt="" /> <span className='text-2xl lg:text-[25px]'> clever notifications</span></h3>
        <div className='mt-4'>
          <h4 className='flex py-0 lg:py-2'>
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
      <div className='relative h-screen w-full lg:w-[50%] '>
        <Image className='absolute' src={bgGradiant1} alt="" />
        <Image className='absolute' src={advantagesImg} alt="" />
      </div>
    </div>
  )
}

export default Advantage