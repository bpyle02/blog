import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import ProjectList from "@/components/ProjectList";
import Card from "@/components/Card";

const query = groq `
    *[_type=='project'] {
        ...,
        author->,
        categories[]->,
    } | order(_createdAt desc)
`;

export const revalidate = 60;

export default async function HomePage() {
    const projects = await client.fetch(query);
    return (
        <div>
            <Card />
            <ProjectList projects={projects}/>
        </div>
    );
}
