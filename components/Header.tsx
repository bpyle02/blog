import Image from 'next/image';
import Link from 'next/link';

import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold px-10 py5'>
        <div className='flex items-center space-x-2'>
            <Link href="/">
                <Image
                  className='rounded-full'
                  src = '/../public/images/memoji.png'
                  width={50}
                  height={50}
                  alt='logo' />
            </Link>
            <h1>Brandon Pyle</h1>
        </div>

        <div>
            <Link
              href='https://home.brandonpyle.com'
              className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#2570d1] flex items-center rounded-full text-center'>
                Check out my homelab!
              </Link>

        </div>
    </header>
  )
}

export default Header