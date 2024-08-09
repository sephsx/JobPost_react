import React from 'react'

const Hero = ({title="This is Title", subtitle="This is Subtitle"}) => {
  return (
    <>
      <section className="bg-indigo-600 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 flex flex-col items-center">
          <div className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
           <h1 className='text-center text-white'>{title}</h1>
           <p className='text-center text-2xl text-white'>{subtitle}</p>

          </div>
        </div>
      </section>
    </>
  )
}

export default Hero