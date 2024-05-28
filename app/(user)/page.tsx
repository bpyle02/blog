import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import ProjectList from "@/components/ProjectList";
import Card from "@/components/Card";
import Contact from "@/components/Contact";

const query = groq `
    *[_type=='project'] {
        ...,
        author->,
        categories[]->,
    } | order(_updatedAt desc)
`;

export const revalidate = 60;

export default async function HomePage() {
    const projects = await client.fetch(query);
    return (
        <div className="mx-auto max-w-[70rem]">
            <Card />
            <ProjectList projects={projects}/>
            <Contact />
        </div>
    );
}
