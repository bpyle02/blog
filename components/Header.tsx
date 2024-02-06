"use client"

import Image from "next/image";
// import {RxHamburgerMenu} from 'react-icons/rx'
// import {RxCross1} from 'react-icons/rx'
import Link from "next/link";

import logo from '../public/static/memoji.png'
import { useState } from "react";
// import { LogoIonic } from "react-ionicons"
import { MenuOutline } from 'react-ionicons'
// import { CloseOutline } from 'react-ionicons'

function Header()
{
    // const [navbar, setNavbar] = useState(false)

    let Links =[
      {name:"Home",link:"/"},
      {name:"Blog",link:"/blog"},
      {name:"About",link:"/about"},
      {name:"Contact",link:"/contact"},
    ];

    let [open, setOpen] = useState(false);

    return (
        // <div className = "flex items-end p-3 flex-wrap bg-gray-100">
        //     <div className = "w-auto inline-flex ml-auto flex-row items-center content-between">
        //         {/* <div className = "text-2xl button">
        //           <FaMoon className="text-2xl mr-4 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors" />
        //         </div> */}
        //         <button>
        //           <Link href = "/contact" className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Contact</Link>
        //         </button>
        //         <button>
        //           <Link href = "/about" className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">About</Link>
        //         </button>
        //         <button>
        //           <Link href = "/blog" className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Blog</Link>
        //         </button>
        //         <button>
        //           <Link href = "https://cloud.brandonpyle.com/s/G2mFSSXa4nak2xz" className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Download my Resume</Link>
        //         </button>
        //         <button>
        //           <Link href = "/" className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Home</Link>
        //         </button>
        //     </div>
        // </div>

        // <div>
        //   <nav className="w-full bg-gray-100 fixed top-0 left-0 right-0 z-10">
        //     <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        //       <div>
        //         <div className="flex items-center justify-between py-3 md:py-5 md:block">
        //           {/* LOGO */}
        //           <Link href="/">
        //             <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
        //           </Link>
        //           {/* HAMBURGER BUTTON FOR MOBILE */}
        //           <div className="md:hidden">
        //             <button
        //               className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
        //               onClick={() => setNavbar(!navbar)}
        //             >
        //               {navbar ? (
        //                 <RxCross1/>
        //               ) : (
        //                 <RxHamburgerMenu />
        //               )}
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //       <div>
        //         <div
        //           className={`flex flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
        //           <div className="h-screen md:h-auto items-center justify-center">
        //             <button>
        //               <Link href = "/contact" onClick={() => setNavbar(!navbar)} className = "pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">Contact</Link>
        //             </button>
        //             <button>
        //               <Link href = "/about" onClick={() => setNavbar(!navbar)} className = "pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">About</Link>
        //             </button>
        //             <button>
        //               <Link href = "/blog" onClick={() => setNavbar(!navbar)} className = "pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">Blog</Link>
        //             </button>
        //             <button>
        //               <Link href = "https://cloud.brandonpyle.com/s/G2mFSSXa4nak2xz" onClick={() => setNavbar(!navbar)} className = "pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">Download my Resume</Link>
        //             </button>
        //             <button>
        //               <Link href = "/" onClick={() => setNavbar(!navbar)} className = "pb-6 text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0">Home</Link>
        //             </button>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </nav>
        // </div>

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
              <Link href = "https://cloud.brandonpyle.com/s/7kXZ8GF65NQLwJq" className='bg-[#2570d1] text-white font-semibold hover:text-black py-2 px-6 rounded-md md:ml-8 hover:bg-gray-200 duration-300 transition-colors'>Download My Resume</Link>
            </ul>
          </div>
        </div>
    )
}

export default Header;