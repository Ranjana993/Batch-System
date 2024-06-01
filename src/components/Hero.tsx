import Image from 'next/image'
import React from 'react'
import bgEclipse from "../../public/bg-gradiant1.png"
import videoIcon from "../../public/video.png"
import heroImg from "../../public/hero_img.png"
import eclipseImg from "../../public/eclipse1.png"
import iphone1 from "../../public/iPhone-13-Pro-Front2.png"

const Hero = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center px-12'>
      {/* left side */}
      <div className=' lg:w-[50%] w-full'>
        <div className='relative h-screen'>
          <div>
            <Image className='absolute' src={bgEclipse} alt="" />
          </div>
          <div className='absolute top-32'>
            <h1 className='uppercase text-[49px] roboto-black leading-tight w-[618px]'>make the best financial decisions</h1>
            <p className='text-[18px] mt-4'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div className='absolute flex gap-8 mt-8'>
              <button className='bg-black text-white rounded-md w-[180px] h-[40px]'>Get Started --{'>'} </button>
              <div className='flex gap-2 items-center '>
                <Image src={videoIcon} alt="" />
                <p>watch Video</p>
              </div>
            </div>
          </div>
          <div className='absolute top-96'>
            <Image className='' src={heroImg} alt="" />
          </div>
        </div>

      </div>
      {/* right side image area */}
      <div className="relative w-full lg:w-[50%] h-screen">
        <div className="absolute top-24 left-28  w-fit h-full">
          <Image
            src={eclipseImg}
            alt="Image 1"
            // layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
        <div className="absolute z-50 w-fit h-full top-24 left-24">
          <Image
            src={iphone1}
            alt="Image 2"
            // layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
        <div className="absolute z-40  w-fit h-full top-36 left-48">
          <Image
            src={iphone1}
            alt="Image 3"
            // layout="fill"
            objectFit="contain"
            className=""
          />
        </div>
        <div className="absolute z-30  w-fit h-full top-48 left-64">
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
