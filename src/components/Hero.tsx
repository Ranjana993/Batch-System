import Image from 'next/image'
import React from 'react'
import bgEclipse from "../../public/bg-gradiant1.png"
import videoIcon from "../../public/video.png"
import heroImg from "../../public/hero_img.png"
import eclipseImg from "../../public/eclipse1.png"
import iphone1 from "../../public/iPhone.png"

const Hero = () => {
  return (
    <div className='flex pl-0 lg:-pt-12 flex-col lg:flex-row justify-center px-0 lg:px-16 pb-0 lg:pb-14'>
      {/* left side */}
      <div className='pl-4 lg:pl-12 lg:w-[50%] w-full'>
        <div className='relative h-screen'>
          <div>
            <Image className='absolute' src={bgEclipse} alt="" />
          </div>
          <div className='absolute top-24 lg:top-32'>
            <h1 className='uppercase text-3xl lg:text-[49px] roboto-black leading-tight w-full lg:w-[618px]'>make the best financial decisions</h1>
            <p className='text-[18px] mt-4 p-4'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div className='absolute flex gap-8 mt-8'>
              <button className='bg-black text-white rounded-md w-[180px] h-[40px]'>Get Started --{'>'} </button>
              <div className='flex  gap-2 items-center '>
                <Image src={videoIcon} alt="" />
                <p>watch Video</p>
              </div>
            </div>
          </div>
          <div className='absolute top-[28rem] lg:top-96'>
            <Image className='' src={heroImg} alt="" />
          </div>
        </div>

      </div>
      {/* right side image area */}
      <div className="hidden lg:block  relative w-full lg:w-[50%] h-screen">
        <div className="absolute top-24 left-12 lg:left-20  lg:w-fit h-full">
          <Image
            src={eclipseImg}
            alt="Image 1"
            // layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
        <div className="absolute z-50 w-fit h-full top-24 left-0 lg:left-12">
          <Image
            src={iphone1}
            alt="Image 2"
            // layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
        <div className="absolute z-40 w-fit h-full top-36 left-20 lg:left-40">
          <Image
            src={iphone1}
            alt="Image 3"
            // layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
        <div className="absolute z-30  w-fit h-full top-48 left-26 lg:left-64">
          <Image
            src={iphone1}
            alt="Image 4"
            // layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
