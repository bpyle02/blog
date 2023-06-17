import Image from 'next/image';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className='flex items-center justify-between space-x-2 font-bold py-5'>
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
        
        <div className=''>
            <Bars3Icon className='text-white bg-[#2570d1] w-10 lg:hidden xl:hidden cursor-pointer rounded-md mx-5' />
        </div>

        <div className='relative flex'>
            <Link
              href='https://brandonpyle.com/about'
              className='mr-5 p-2 text-white bg-[#2570d1] rounded-md hover:scale-105 transition-transform duration-200 ease-out'>
                About
            </Link>
            <Link
              href='https://brandonpyle.com/contact'
              className='mr-5 p-2 text-white bg-[#2570d1] rounded-md hover:scale-105 transition-transform duration-200 ease-out'>
                Contact
            </Link>
            <Link
              href='https://brandonpyle.com'
              className='mr-5 p-2 text-white bg-[#2570d1] rounded-md hover:scale-105 transition-transform duration-200 ease-out'>
                Download My Resume
            </Link>
        </div>
    </header>
  )
}

export default Header

// px-5 py-3 text-sm md:text-base bg-[#2570d1] text-white flex items-center rounded-full text-center mx-1 hover:scale-105 transition-transform duration-200 ease-out