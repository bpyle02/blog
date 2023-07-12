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
                  <Link href = "/blog" className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Blog</Link>
                </button>
                <button>
                  <Link href = "https://cloud.brandonpyle.com/s/G2mFSSXa4nak2xz" className = "p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Download my Resume</Link>
                </button>
            </div>
        </div>
    )
}

export default Header;