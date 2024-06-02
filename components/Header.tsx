"use client"

import Image from "next/image";
import Link from "next/link";
import logo from '../public/static/profile.png'
import { useState } from "react";
import { MenuOutline } from 'react-ionicons'

function Header()
{
    let [open, setOpen] = useState(false);

    return (
        <div className='w-full fixed top-0 left-0 z-50'>
          <div className='md:flex items-center justify-between bg-gray-100 py-4 md:px-10 px-7'>
            <Link className='font-bold text-xl cursor-pointer flex items-center text-black' href = "/">
              <span className='text-[#2570d1] mr-1 pt-2 pr-4 sm:text-3xl'>
                <Image className="" src={logo} alt="profile photo" width={32} height={32} />
              </span>
              Brandon&apos;s Portfolio
            </Link>
            
            <div onClick={() => setOpen(!open)} className='text-4xl absolute right-8 top-6 cursor-pointer md:hidden'>
              <MenuOutline/>
            </div>
      
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? ' top-16 ':'top-[-490px]'}`}>
                  <li className='md:ml-4 md:my-0 my-7'>
                    <Link href='/' className='text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-200 duration-300 transition-colors'>Home</Link>
                  </li>
                  <li className='md:ml-4 md:my-0 my-7'>
                    <Link href='/blog' className='text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-200 duration-300 transition-colors'>Blog</Link>
                  </li>
                  <li className='md:ml-4 md:my-0 my-7'>
                    <Link href='/about' className='text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-200 duration-300 transition-colors'>About</Link>
                  </li>
                  <li className='md:ml-4 md:my-0 my-7'>
                    <Link href='/contact' className='text-black py-2 px-4 rounded-md font-semibold hover:bg-gray-200 duration-300 transition-colors'>Contact</Link>
                  </li>
              <Link href = "https://cloud.brandonpyle.com/s/dyXoikm2Xz5fByQ" className='bg-[#2570d1] text-white font-semibold hover:text-black py-2 px-6 rounded-md md:ml-8 hover:bg-gray-200 duration-300 transition-colors'>Download My Resume</Link>
            </ul>
          </div>
        </div>
    )
}

export default Header;