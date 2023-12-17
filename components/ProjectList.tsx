import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import Link from "next/link";

type Props = {
    projects: Project[];
};

function ProjectList({projects}: Props) {
  return (
    <div className="">
        <p className = "text-center text-2xl text-black sm:text-4xl font-bold">Projects</p>
        {projects.map((project) => (
            <div key={project._id} className="group md:mx-10 my-10 -mx-4">
                <div className="group-hover:scale-105 transition-transform duration-200 ease-out">
                    <ClientSideRoute key={project._id} route={`/project/${project.slug.current}`}>
                        <div className="md:flex bg-white shadow-xl rounded-xl md:w-full w-2/3 mx-auto">
                            <Image
                                className="md:object-cover md:aspect-video md:object-center object-center md:rounded-l-xl md:rounded-r-none rounded-t-xl max-w-fit"
                                src={urlFor(project.mainImage).url()}
                                alt={project.author.name}
                                width={300}
                                height={150}
                            />
                            <div>
                                <div className="p-2">
                                    <div className="flex-1">
                                        <div className="md:flex md:flex-row">
                                            <div className="flex flex-row">
                                                <p className="text-lg font-bold">{project.title}</p>
                                                <p className="md:text-lg md:font-bold md:visible invisible">&nbsp;·&nbsp;</p>
                                            </div>
                                            <p className="text-lg">
                                                {new Date(project._updatedAt).toLocaleDateString(
                                                    "en-US", {
                                                        day: "numeric",
                                                        month: "long",
                                                        year: "numeric",
                                                    }
                                                    )}
                                            </p>
                                        </div>
                                        <p className="line-clamp-2 text-gray-500">{project.description}</p>
                                    </div>
                                    <p className="mt-4 font-bold flex bottom-0 items-center group-hover:underline">
                                        Read More
                                        <ArrowRightIcon className="ml-2 h-4 w-4 mt-1 -rotate-45" />
                                    </p>
                                    <div className="mt-2">
                                        <Link href={project.code} className="p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Code</Link>
                                        <Link href={project.demo} className="p-2 mr-4 inline-flex px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 font-semibold duration-300 transition-colors">Live Demo</Link>
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

export default ProjectList;