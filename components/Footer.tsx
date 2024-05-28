import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"


function Footer()
{
    return (
        <div className = "border-t-3/2 mt-72 mb-10 py-5">
            <div className = "flex justify-center mt-4">
            <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 hover:text-[#2570d1] transition-colors duration-300" href = "https://www.github.com/bpyle02">
                <FaGithub />
                <span className = "sr-only">Github</span>
            </a>
            <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 hover:text-[#2570d1] transition-colors duration-300" href = "mailto:business@brandonpyle.com">
                <FaEnvelope />
                <span className = "sr-only">Email</span>
            </a>
            <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 hover:bg-linkedin hover:text-[#2570d1] transition-colors duration-300" href = "https://www.linkedin.com/in/brandon-pyle">
                <FaLinkedin />
                <span className = "sr-only">LinkedIn</span>
            </a>
            </div>
            <div className = "flex justify-center mt-4">
                <p className = "text-black">Created by Brandon Pyle using Next.JS, Tailwind, & Sanity</p>
            </div>
        </div>
    )
}

export default Footer;