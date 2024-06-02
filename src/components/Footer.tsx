import Image from 'next/image'
import Inspiration_APP from '../../public/LOGO.png'
import inbox from "../../public/inbox.png"
import PhoneIcon from '../../public/phone.png'

const Footer = () => {
  return (
    // <!-- Component: Five Columns Footer with Logo -->
    <footer className='text-start border-t'>
      {/* <!-- Main footer --> */}
      <div className='pt-16 pb-12 text-sm mx-2 lg:mx-16 '>
        <div className='sm:container px-3 mx-auto'>
          <div className='grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12'>
            <div className='col-span-2 md:col-span-4 lg:col-span-2'>
              <a className='flex items-center gap-2 mb-3 text-base font-medium leading-6' href='#'>
                <Image src={Inspiration_APP} className='' alt='' />
              </a>
              <ul>
                <li className='mb-2 leading-6'>
                  <a href='#' className='flex items-center gap-1'>
                    <Image src={inbox} alt='inbox' />
                    <span>help@frybix.com </span>
                  </a>
                </li>
                <li className='mb-2 leading-6'>
                  <a href='#' className='flex items-center gap-1'>
                    <Image src={PhoneIcon} alt='inbox' />
                    <span>+1 234 456 678 89  </span>
                  </a>
                </li>
              </ul>
            </div>
            <nav className='col-span-2 md:col-span-4 lg:col-span-2 bg-transparent'>
              <h3 className='mb-2 text-3xl font-medium roboto-black capitalize '> links</h3>
              <ul>
                <li className='mb-2 leading-6'><a href='#'> Home</a></li>
                <li className='mb-2 leading-6'><a href='#'>About Us </a></li>
                <li className='mb-2 leading-6'> <a href='#'>Booking </a> </li>
                <li className='mb-2 leading-6'><a href='#'>Blogs</a></li>
              </ul>
            </nav>
            <nav className='col-span-2 md:col-span-4 lg:col-span-2'>
              <h3 className='mb-2 text-3xl font-medium roboto-black capitalize'>legal</h3>
              <ul>
                <li className='mb-2 leading-6'> <a href='#' > Terms of Use</a> </li>
                <li className='mb-2 leading-6'> <a href='#'>Privacy Policy</a></li>
                <li className='mb-2 leading-6'><a href='#' > Cookie Policy</a></li>
              </ul>
            </nav>
            <nav className='col-span-2 md:col-span-4 lg:col-span-2'>
              <h3 className='mb-2 text-3xl font-medium roboto-black capitalize'>product</h3>
              <ul>
                <li className='mb-2 leading-6'><a href='#'>Take Tour</a></li>
                <li className='mb-2 leading-6'><a href='#'>Live chat</a> </li>
                <li className='mb-2 leading-6'><a href='#'>Reviews</a></li>
              </ul>
            </nav>
            <nav className='col-span-4 md:col-span-4 lg:col-span-4'>
              <h3 className='mb-2 text-3xl font-medium roboto-black capitalize'> Newsletter</h3>
              <ul>
                <li className='mb-2 leading-6'><a href='#'>Stay Up to date</a> </li>
                <li className='mb-2 leading-6'>
                  <input type="text" className='px-3 lg:px-12 py-4 outline-gray-400 border border-gray-200 bg-transparent 'placeholder='Your Email' />
                  <button className='bg-black text-white px-4 lg:px-12 py-4 rounded-xl'>Subscribe</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
