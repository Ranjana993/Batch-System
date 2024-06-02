import Advantage from '@/components/Advantage'
import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Testimonial from '@/components/Testimonial'
import Faq from '@/components/Faq'
import React from 'react'
import Customization from '@/components/Customization'
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'

const PageLayout = () => {
  return (
    <div className='w-full '>
      <Navbar />
      <Hero />
      <Feature />
      <Advantage />
      <Customization/>
      <Testimonial />
      <Faq />
      <Banner />
      <Footer />
    </div>
  )
}

export default PageLayout