import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import Link from "next/link";

type Props = {
    posts: Post[];
};

function BlogList({posts}: Props) {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pb-24">
    //     {posts.map((post) => (
    //         <div key={post._id} className="flex flex-col group cursor-pointer">
    //             <div className="rounded-md border border-gray-300 group-hover:scale-105 transition-transform duration-200 ease-out">
    //                 <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
    //                         <div className="relative w-full lg:h-60 md:h-44 h-44">
    //                             <Image
    //                                 className="object-cover object-left lg:object-center rounded-t-md"
    //                                 src={urlFor(post.mainImage).url()}
    //                                 alt={post.author.name}
    //                                 fill
    //                             />
    //                             {/* <div className="absolute bottom-0 w-fulltext-white p-5 flex justify-between">
    //                                 <div>
    //                                     <p className="font-bold">{post.title}</p>
    //                                     <p>
    //                                         {new Date(post._createdAt).toLocaleDateString(
    //                                             "en-US", {
    //                                                 day: "numeric",
    //                                                 month: "long",
    //                                                 year: "numeric",
    //                                             }
    //                                             )}
    //                                     </p>
    //                                 </div>
    //                                 <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
    //                                     {post.categories.map((category) => (
    //                                         <div key={category._id} className="text-center bg-[#2570d1] text-black px-3 py-1 rounded-full text-sm font-semibold">
    //                                             <p>{category.title}</p>
    //                                         </div>
    //                                     ))}
    //                                 </div>
    //                             </div> */}
    //                         </div>
    //                         <div className="p-2">
    //                         <div className="flex-1">
    //                             <p className="text-lg font-bold">{post.title}</p>
    //                             <p className="line-clamp-2 text-gray-500">{post.description}</p>
    //                         </div>
    //                         <p className="mt-5 font-bold flex items-center group-hover:underline">
    //                             Read Post
    //                             <ArrowRightIcon className="ml-2 h-4 w-4 mt-1 -rotate-45" />
    //                         </p>
    //                         </div>
    //                 </ClientSideRoute>
    //             </div>
    //         </div>
    //     ))}
    // </div> 

    <div className="">
        <p className = "text-center text-2xl text-black sm:text-4xl font-bold">Projects</p>
        {posts.map((post) => (
            <div key={post._id} className="group md:mx-10 my-10 -mx-4">
                <div className="group-hover:scale-105 transition-transform duration-200 ease-out">
                    <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                        <div className="md:flex bg-white shadow-xl rounded-xl md:w-full w-2/3 mx-auto">
                            <Image
                            className="md:object-contain md:object-center md:rounded-l-xl md:rounded-r-none rounded-t-xl md:w-1/4"
                            src={urlFor(post.mainImage).url()}
                            alt={post.author.name}
                            width={400}
                            height={400}
                            />
                            {/* <div className="">
                                <div className="absolute bottom-0 w-fulltext-white p-5 flex justify-between">
                                    <div>
                                        <p className="font-bold">{post.title}</p>
                                        <p>
                                            {new Date(post._createdAt).toLocaleDateString(
                                                "en-US", {
                                                    day: "numeric",
                                                    month: "long",
                                                    year: "numeric",
                                                }
                                                )}
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                                        {post.categories.map((category) => (
                                            <div key={category._id} className="text-center bg-[#2570d1] text-black px-3 py-1 rounded-full text-sm font-semibold">
                                                <p>{category.title}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div> 
                            </div> */}
                            <div>
                                <div className="p-2">
                                    <div className="flex-1">
                                        <div className="md:flex md:flex-row">
                                            <div className="flex flex-row">
                                                <p className="text-lg font-bold">{post.title}</p>
                                                <p className="md:text-lg md:font-bold md:visible invisible">&nbsp;·&nbsp;</p>
                                            </div>
                                            <p className="text-lg">
                                                {new Date(post._createdAt).toLocaleDateString(
                                                    "en-US", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    }
                                                    )}
                                            </p>
                                        </div>
                                        <p className="line-clamp-2 text-gray-500">{post.description}</p>
                                    </div>
                                    <p className="mt-4 font-bold flex bottom-0 items-center group-hover:underline">
                                        Read Post
                                        <ArrowRightIcon className="ml-2 h-4 w-4 mt-1 -rotate-45" />
                                    </p>
                                    <div className="mt-2">
                                        <Link href={post.code} className="p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Code</Link>
                                        <Link href={post.liveDemo} className="p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Live Demo</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ClientSideRoute>
                </div>
            </div>
        ))}
    </div> 

  )
}

export default BlogList;