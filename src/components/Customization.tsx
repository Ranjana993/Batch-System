import Image from 'next/image'
import React from 'react'
import feastureImg from "../../public/feature.png"
import bgGradiant from "../../public/half_shadow.png"
import bgGradiant1 from "../../public/bg-gradiant1.png"
import customization_icon from "../../public/curtomization_icon.png"
const Customization = () => {
  return (
    <div className='px-6 lg:px-16 flex flex-col justify-center lg:flex-row gap-4 py-2 border-b'>
      <div className='relative h-screen flex-grow w-full lg:w-[50%] '>
        <Image className='absolute' src={bgGradiant1} alt="" />
        <Image className='absolute' src={feastureImg} alt="" />
      </div>
      <div className='pl-4 lg:pl-16 w-full lg:w-[50%] lg:pt-36'>
        <h4 className='uppercase flex items-center gap-2 '>
          <Image src={customization_icon} alt="customization"/>
          <span className='text-[28px] font-bold capitalize'> fully customizable</span></h4>
        <div className='mt-4'>
          <p className='pr-0 lg:pr-12 text-gray-500 text-[18px]'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
      </div>
    </div>
  )
}

export default Customization