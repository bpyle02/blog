import { Metadata } from "next";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

export const metadata:Metadata = {
    title: "About Me",
    description: "Learn more about me!",
}

async function AboutPage() {
    const query = groq`
        *[_type=="author"][0]
        {
            name,
            "image": image.asset-> {
                url,
                altText
            },
            bio
        }
    `

    const data = await client.fetch(query);
    
    return (
        <div className = "w-full h-screen flex flex-col items-center justify-center md:mt-0 mt-28">
            <div className = "pt-10">
                <Link href="/">
                    <Image className="w-40 mx-auto rounded-full" src={urlFor(data.image.url).url()} alt="profile photo" width={1000} height={1000} />
                </Link>
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold mt-12">Hi, my name is {data.name}!</h1>
            </div>
            <div className="mt-12 max-w-[70rem] px-5 md:px-0" >
                <PortableText value={data.bio} components={RichTextComponents} />
            </div>
        </div>
    );
}

export default AboutPage;