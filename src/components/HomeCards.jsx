import React from 'react'
import Card from './Card'
const HomeCards = () => {
   return (
      <>
         <section className='py-4'>
            <div className="container mx-auto flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg max-w-4xl">
            <Card>
                     <h2 className='text-2xl font-bold text-black'>For Developers</h2>
                     <p className='mt-2 mb-4 text-black'>Browse our React Jobs and Start your career today</p>
                     <a href="#" className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'>Add Job</a>
                  </Card>
                  <Card bg='bg-indigo-100'>
                     <h2 className='text-2xl font-bold text-black'>For Companies</h2>
                     <p className='mt-2 mb-4 text-black'>Browse our React Jobs and Start your career today</p>
                     <a href="#" className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'>Browse Job</a>
                  </Card>

               </div>
            </div>
         </section>
      </>
   )
}

export default HomeCards