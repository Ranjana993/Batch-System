import Image from 'next/image'
import React from 'react'
import phone from "../../public/eclipse.png"

const Testing = () => {
  return (
    <div>

      <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
        <main className="flex flex-col md:flex-row items-center justify-between p-6">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">Make <span className="text-red-500">The Best</span> Financial Decisions</h1>
            <p className="text-zinc-600 dark:text-zinc-300">Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tristique Eu Adipiscing Sociis Arcu Lorem Porttitor.</p>
            <div className="flex space-x-4">
              <button className="bg-black text-white px-6 py-2 rounded-lg">Get Started</button>
              <button className="flex items-center space-x-2 text-black dark:text-white">
                <span>Watch Video</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.707 8.707a1 1 0 01-1.414 0L9 7.414V14a1 1 0 11-2 0V7.414L5.707 10.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image src={phone} alt="Financial App Mockup" className="w-full max-w-sm" />
          </div>
        </main>
      </div>

    </div>
  )
}

export default Testing