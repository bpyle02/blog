import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";


export default async function sitemap() {
    const baseUrl = "https://www.brandonpyle.com"

    const postQuery = groq `
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
    `;
    
    const posts = await client.fetch(postQuery);

    const postUrls = posts.map(post => ({
        url: `${baseUrl}/post/${post.slug.current}`,
        lastModified: post._updatedAt
    }))

    const projectQuery = groq `
    *[_type=='project'] {
        ...,
        author->,
        categories[]->
    } | order(_updatedAt desc)
    `;
    
    const projects = await client.fetch(projectQuery);

    const projectUrls = projects.map(project => ({
        url: `${baseUrl}/project/${project.slug.current}`,
        lastModified: project._updatedAt
    }))

    return [
        {url:baseUrl, lastModified: new Date()},
        {url:`${baseUrl}/about`, lastModified: new Date()},
        {url:`${baseUrl}/contact`, lastModified: new Date()},
        ...postUrls,
        ...projectUrls,
    ]
}