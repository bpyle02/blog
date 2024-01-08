import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";
import { CodeBlock } from "./CodeBlock";

export const RichTextComponents = {
    types: {
        image: ({value}: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image
                        className="object-contain"
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        fill
                    />
                </div>
            );
        },
        code: CodeBlock
    },
    list: {
        bullet: ({children}: any) => (
            <ul className="ml-10 list-disc">{children}</ul>
        ),
        number: ({children}: any) => (
            <ol className="ml-10 list-decimal">{children}</ol>
        )
    },
    block: {
        normal: ({children}: any) => (
            <p className="">{children}</p>
        ),
        h1: ({children}: any) => (
            <h1 className="text-5xl pb-4 pt-10 font-bold">{children}</h1>
        ),
        h2: ({children}: any) => (
            <h1 className="text-4xl pb-4 pt-10 font-bold">{children}</h1>
        ),
        h3: ({children}: any) => (
            <h1 className="text-3xl pb-4 pt-10 font-bold">{children}</h1>
        ),
        h4: ({children}: any) => (
            <h1 className="text-2xl pb-4 pt-10 font-bold">{children}</h1>
        ),
        blockquote: ({children}: any) => (
            <blockquote className="border-l-[#2570d1] border-l-4 pl-5 py-5 my-5">{children}</blockquote>
        ),
    },
    marks: {
        link: ({children, value}: any) => {
            const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-[#2570d1] hover:decoration-black"
                >
                    {children}
                </Link>
            )
        },
    },
}