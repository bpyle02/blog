import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import logo from '../public/static/memoji.png'

function Card()
{
    return (
        <div className = "w-full mb-20">
            <div className = "flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
                <div className = "">
                    {/* <img className = "w-32 mx-auto shadow-xl rounded-full drop-shadow-sm dark:shadow-gray-100/10" src = {profile} alt = ""/> */}
                    <Link href="/">
                        <Image className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={logo} alt="profile photo" width={128} height={128} />
                    </Link>
                </div>
                <div className = "text-center mt-5">
                    <p className = "text-xl sm:text-2xl text-gray-900 font-bold">Brandon Pyle</p>
                    <p className = "text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 mx-5 w-auto inline-block border-b-2 ">Software Engineer</p>
                </div>
                    <div className = "flex align-center justify-center mt-4">
                        <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 hover:bg-gray-200 transition-colors duration-300 rounded-full" href = "https://www.github.com/bpyle02">
                            <FaGithub />
                            <span className = "sr-only">Github</span>
                        </a>
                        <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 hover:bg-gray-200 transition-colors duration-300 rounded-full" href = "mailto:mail4brando@gmail.com">
                            <FaEnvelope />
                            <span className = "sr-only">Email</span>
                        </a>
                        <a className = "text-xl m-1 p-1 sm:m-2 sm:p-2 text-linkedin hover:bg-linkedin hover:bg-gray-200 transition-colors duration-300 rounded-full" href = "https://www.linkedin.com/in/brandon-pyle">
                            <FaLinkedin />
                            <span className = "sr-only">LinkedIn</span>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Card;