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
        <div className = "w-full mt-[145px]">
            <div className = "flex flex-col justify-center max-w-[70rem] mx-auto bg-white shadow-xl rounded-xl p-5">
                <div className = "pt-10">
                    <Link href="/">
                        <Image className="w-40 mx-auto shadow-xl rounded-full drop-shadow-sm" src={urlFor(data.image.url).url()} alt="profile photo" width={128} height={128} />
                    </Link>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl font-bold mt-12">Hi, my name is {data.name}!</h1>
                </div>
                <div className="mt-12 px-4 pb-4" >
                    <PortableText value={data.bio} components={RichTextComponents} />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;