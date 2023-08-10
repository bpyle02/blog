import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Metadata } from "next";
import Header from "@/components/Header";

type Props = {
    params: {
        slug: string;
    }
};

export async function generateMetadata({params: {slug}}: Props): Promise<Metadata> {
    const query = groq`
        *[_type=="project" && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->,
        }
    `

    const project: Project = await client.fetch(query, { slug: slug });

    return {
        title: project.title,
        description: project.description,
        alternates: {
          canonical: `/project/${slug}`
        }
    }

}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
