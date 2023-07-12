import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import BlogList from "@/components/BlogList";
import Card from "@/components/Card";

const query = groq `
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`;

export const revalidate = 60;

export default async function HomePage() {
    const posts = await client.fetch(query);
    return (
        <div>
            <Card />
            <BlogList posts={posts}/>
        </div>
    );
}
