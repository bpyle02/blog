import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold py-5 mb-10'>
        <div>
            <h1 className='text-7xl'>Brandon&apos;s Blog</h1>
            <h2 className='mt-5 md:mt-0 ml-[0.32rem]'>Welcome to{" "}
              <span className='underline decoration-4 decoration-[#2570d1]'>my software development</span>
              {" "}playground!
            </h2>
        </div>

        {/* <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'>This is a quick bio about myself. Enjoy my blog!</p> */}
    </div>
  )
}

export default Banner