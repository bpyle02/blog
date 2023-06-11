import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
        <div className='flex items-center space-x-2'>
            <Link href="/">
                <Image
                  className='rounded-full'
                  src = '/../public/images/memoji.PNG'
                  width={50}
                  height={50}
                  alt='logo' />
            </Link>
            <h1>Brandon Pyle</h1>
        </div>

        <div className='flex'>
            <Link
              href='https://brandonpyle.com/about'
              className='px-5 py-3 text-sm md:text-base bg-black text-[#2570d1] flex items-center rounded-full text-center mx-1 hover:scale-105 transition-transform duration-200 ease-out'>
                About
            </Link>
            <Link
              href='https://brandonpyle.com/contact'
              className='px-5 py-3 text-sm md:text-base bg-black text-[#2570d1] flex items-center rounded-full text-center mx-1 hover:scale-105 transition-transform duration-200 ease-out'>
                Contact
            </Link>
            <Link
              href='https://brandonpyle.com'
              className='px-5 py-3 text-sm md:text-base bg-black text-[#2570d1] flex items-center rounded-full text-center mx-1 hover:scale-105 transition-transform duration-200 ease-out'>
                Download My Resume
            </Link>
        </div>
    </header>
  )
}

export default Header