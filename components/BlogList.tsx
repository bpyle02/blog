import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
};

function BlogList({posts}: Props) {
  return (
    <div className="max-w-[90rem]">
        <p className = "text-center text-2xl text-black sm:text-4xl font-bold">Recent Posts</p>
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