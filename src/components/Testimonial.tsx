import Image from 'next/image'
import React from 'react'
import testimonial from "../../public/testimonial.png"
import bgGradiant1 from "../../public/bg-gradiant1.png"
import user from "../../public/User2.png"

const Testimonial = () => {
  return (
    <div className='px-6 lg:px-16 py-12'>
      <div className='text-center'>
        <h4 className='uppercase lg:text-center text-left'>testimonial</h4>
        <h1 className='text-3xl lg:text-[48px] roboto-black leading-tight lg:text-center text-left capitalize'>What our Users <br /> say about Us?</h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <div className='relative h-screen flex-grow w-full lg:w-[60%]'>
          <Image className='absolute left-14 top-16' src={bgGradiant1} alt="" />
          <Image className='absolute' src={testimonial} alt="" />
        </div>
        <div className='w-full lg:w-[40%] mr-0 lg:mr-20'>
          <h2 className='capitalize text-[28px] roboto-black py-2 '>the best financial accounting app ever!</h2>
          <p className='text-[18px] text-gray-700 pt-4'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
          <div className='flex items-center py-4 gap-2'>
            <Image src={user}  width={40} height={40} alt='Testimonial user' py-4/>
            <Image src={user} width={30} height={30} className='opacity-50' alt='Testimonial user'/>
            <Image src={user} width={30} height={30} className='opacity-50' alt='Testimonial user'/>
            <Image src={user} width={30} height={30} className='opacity-50' alt='Testimonial user'/>
            <Image src={user} width={30} height={30} className='opacity-50' alt='Testimonial user'/>
          </div>
          <h4 className='capitalize font-bold text-[18px]'>nick jonas</h4>
        </div>
      </div>
    </div>
  )
}

export default Testimonial