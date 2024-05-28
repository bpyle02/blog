import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import logo from '../public/static/memoji.png'

function Card()
{
    return (
        <div className = "w-full h-screen flex md:flex-row flex-col items-center justify-center">
            <div className = "">
                <Link href="/">
                    <Image className="w-48" src={logo} alt="profile photo" width={1000} height={1000} />
                </Link>
            </div>
            <div className = "md:border-l-2 px-6">
                <p className = "text-5xl font-bold text-center">Hi, I&apos;m Brandon Pyle</p>
                <div className = "flex mt-6 md:ml-1 justify-center md:justify-normal">
                    <a className = "text-2xl mr-5 text-[#2570d1] hover:text-black transition-colors duration-300" href = "https://www.github.com/bpyle02">
                        <FaGithub />
                        <span className = "sr-only">Github</span>
                    </a>
                    <a className = "text-2xl mr-5 text-[#2570d1] hover:text-black transition-colors duration-300" href = "mailto:business@brandonpyle.com">
                        <FaEnvelope />
                        <span className = "sr-only">Email</span>
                    </a>
                    <a className = "text-2xl text-[#2570d1] hover:text-black transition-colors duration-300" href = "https://www.linkedin.com/in/brandon-pyle">
                        <FaLinkedin />
                        <span className = "sr-only">LinkedIn</span>
                    </a>
                </div>
                <p className = "text-lg py-4 md:ml-1 inline-block md:w-[25rem] text-center md:text-left">I am a passionate software engineer with a love for making things, learning new things, and double chocolate chip cookies</p>
                <br />
                <div className="flex justify-center md:justify-normal md:ml-1">
                    <Link href="/about" className="text-[#2570d1] font-bold hover:text-black transition-colors duration-300">
                        Read my full bio
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;