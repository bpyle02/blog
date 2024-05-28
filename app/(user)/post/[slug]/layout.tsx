import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = {
    params: {
        slug: string;
    }
};

export async function generateMetadata({params: {slug}}: Props): Promise<Metadata> {
    const query = groq`
        *[_type=="post" && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->,
        }
    `

    const post: Post = await client.fetch(query, { slug: slug });

    return {
        title: post.title,
        description: post.description,
        alternates: {
          canonical: `/post/${slug}`
        }
    }

}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
