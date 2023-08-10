"use client"

import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents.tsx";
import { Form } from '../../../../components/Form.tsx'
import { Metadata } from "next";

type Props = {
    params: {
        slug: string;
    }
};

export const revalidate = 60;

export async function generateStaticParams() {
    const query = groq`
        *[_type=='post']
        {
            slug
        }
    `;

    const slug: Post[] = await client.fetch(query);
    const slugRoutes = slug.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({slug}));
}

async function Post({params: {slug}}: Props) {
    const query = groq`
        *[_type=="post" && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->,
            "comments": *[_type == 'comment' && post._ref == ^._id] {
                name,
                text,
                _createdAt
            }
        }
    `

    const post: Post = await client.fetch(query, { slug: slug });

    

    return (
        <div className="max-w-[90rem] mx-auto">
            <img
                className="w-full h-auto object-cover"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
            />

            <article className="pb-28 w-full pl-8 pr-8">
                <section className="">
                    <div className="">
                        <div>
                            <h1 className="text-4xl font-extrabold mt-8 mb-5">{post.title}</h1>
                        </div>
                        <div className="flex items-center space-x-2 mb-2">
                            <Image
                                className="rounded-full"
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                height={40}
                                width={40}
                            />
                            <div>
                                <p className="">Posted by {post.author.name} on {new Date(post._createdAt).toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <h2>{post.description}</h2> */}
                        <div className="flex items-center space-x-2  mb-12">
                            <p>Categories:</p>
                            {post.categories.map((category) =>(
                                <p key={category._id} className="bg-[#2570d1] text-white px-3 py-1 rounded-full text-sm font-semibold mt-1">{category.title}</p>
                            ))}
                        </div>
                    </div>
                </section>

                <PortableText value={post.body} components={RichTextComponents} />
                
                <hr className="border-[#2570d1] mt-8" />
                
                <h1 className="text-4xl font-extrabold mt-8 mb-5">Comments</h1>

                <div className="">
                    <Form _id={post._id} />
                </div>

                <div className="">
                    {post.comments.map((comment) => (
                        <div key={comment._id} className="rounded-lg border-2 border-gray-300 p-4 mt-8">
                            <p className="font-bold text-lg">{comment.name}</p>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>

            </article>
        </div>
    );
}

export default Post;