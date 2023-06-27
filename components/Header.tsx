// import Image from 'next/image';
// import Link from 'next/link';
// import { Bars3Icon } from '@heroicons/react/24/solid';

// function Header() {
//   return (
//     <header className='flex items-center justify-between space-x-2 font-bold py-5'>
//         <div className='flex items-center space-x-2'>
//             <Link href="/">
//                 <Image
//                   className='rounded-full'
//                   src = '/../images/memoji.PNG'
//                   width={50}
//                   height={50}
//                   alt='logo' />
//             </Link>
//             <h1>Brandon Pyle</h1>
//         </div>
        
//         <div className=''>
//             <Bars3Icon className='text-white bg-[#2570d1] w-10 lg:hidden xl:hidden cursor-pointer rounded-md mx-5' />
//         </div>

//         <div className='relative flex'>
//             <Link
//               href='https://brandonpyle.com/about'
//               className='mr-5 p-2 text-white bg-[#2570d1] rounded-md hover:scale-105 transition-transform duration-200 ease-out'>
//                 About
//             </Link>
//             <Link
//               href='https://brandonpyle.com/contact'
//               className='mr-5 p-2 text-white bg-[#2570d1] rounded-md hover:scale-105 transition-transform duration-200 ease-out'>
//                 Contact
//             </Link>
//             <Link
//               href='https://brandonpyle.com'
//               className='mr-5 p-2 text-white bg-[#2570d1] rounded-md hover:scale-105 transition-transform duration-200 ease-out'>
//                 Download My Resume
//             </Link>
//         </div>
//     </header>
//   )
// }

// export default Header

// // px-5 py-3 text-sm md:text-base bg-[#2570d1] text-white flex items-center rounded-full text-center mx-1 hover:scale-105 transition-transform duration-200 ease-out

// import React from "react";

"use client"

import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa"

function Header()
{
    return (
        <div className = "flex items-end p-3 flex-wrap bg-gray-100">
            <div className = "w-auto inline-flex ml-auto flex-row items-center content-between">
                {/* <div className = "text-2xl button">
                  <FaMoon className="text-2xl mr-4 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors" />
                </div> */}
                <button>
                  <Link href = "/about" className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">About</Link>
                </button>
                <button>
                  <Link href = "https://cloud.brandonpyle.com/s/G2mFSSXa4nak2xz" className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Download my Resume</Link>
                </button>
            </div>
        </div>
    )
}

export default Header;