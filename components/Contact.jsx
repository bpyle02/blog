import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Contact()
{
    return (
        <div className = "w-full max-w-2xl text-center m-auto pt-52 mb-10">
            <p className = "text-4xl pt-20 font-bold">Interested in working together?</p>
            <Link href = "/contact">
                <span className = "mt-6 inline-block w-auto bg-[#2570d1] hover:bg-gray-200 hover:text-black duration-300 transition-colora font-display text-gray-200 text-base md:text-xl py-4 px-7 cursor-pointer rounded-lg">
                    <div className = "flex flex-row items-center">
                        <span className = "mr-3">Get in touch</span>
                        <FaArrowRight />
                    </div>
                </span>
            </Link>
        </div>
    )
}

export default Contact;