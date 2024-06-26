import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import BlogList from "@/components/BlogList";
import Card from "@/components/Card";
import { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata:Metadata = {
    title: {
        absolute: "Brandon's Blog"
    },
    description: "Brandon's Personal Blog",
}

const query = groq `
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_updatedAt desc)
`;

export const revalidate = 60;

export default async function HomePage() {
    const posts = await client.fetch(query);
    return (
        <div className="mx-auto max-w-[70rem]">
            <Card />
            <BlogList posts={posts}/>
            <Contact />
        </div>
    );
}
