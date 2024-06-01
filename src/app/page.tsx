import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'

const PageLayout = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <Hero />
      {/* <Feature /> */}
    </div>
  )
}

export default PageLayout