import Image from 'next/image'
import React from 'react'
import feastureImg from "../../public/feature.png"
import bgGradiant from "../../public/bg-gradiant.png"

const Feature = () => {
  return (
    <div className='relative gap-4'>
      <div className='relative'>
        <Image className='absolute' src={bgGradiant} alt="" />
        <Image className='absolute' src={feastureImg} alt="" />
      </div>
      <div>
        <h4>Features</h4>
        <h2>uifry premium</h2>
      </div>
    </div>
  )
}

export default Feature