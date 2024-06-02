"use client"

import Image from "next/image";
import urlFor from "@/lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import { useState, useEffect } from 'react';
import Link from "next/link";

type Props = {
    projects: Project[];
};


const ProjectList = ({ projects }: Props) => {
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState(1); // Initialize totalPages with 1
    // const totalPages = Math.ceil(projects.length / itemsPerPage);

    
    // Recalculate totalPages whenever projects or selectedCategory changes
    useEffect(() => {
        const filteredProjects = selectedCategory ? projects.filter(project =>
            project.categories.some(category => category.title === selectedCategory)
        ) : projects;
        const newTotalPages = Math.ceil(filteredProjects.length / itemsPerPage);
        setTotalPages(newTotalPages || 1); // Ensure totalPages is at least 1
    }, [projects, selectedCategory]);
    
  
    const nextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const prevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
  
    // Filter projects based on the selected category
    const filteredProjects = selectedCategory ? projects.filter(project =>
        project.categories.some(category => category.title === selectedCategory)
    ) : projects;

    // Slice the data array to display only items for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredProjects.slice(startIndex, endIndex);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category === selectedCategory ? null : category);
        setCurrentPage(1); // Reset pagination to the first page when category changes
    };

  return (
    <div className="mx-8">
        <p className="text-5xl text-black font-bold">Projects</p>
        <hr className="h-[0.6rem] bg-[#2570d1] border-0 mb-20" />
        <span id="projectlist" className="scroll-mt-56">
            {currentItems.map((project, index) => (
                <div key={index} className="mb-8">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 w-full md:pr-[1rem] md:flex md:items-center">
                                <ClientSideRoute key={project._id} route={`/project/${project.slug.current}`}>
                                    <Image
                                        className="rounded-xl hover:shadow-2xl duration-300 transition-shadow"
                                        src={urlFor(project.mainImage).url()}
                                        alt={project.author.name}
                                        layout="responsive"
                                        width={500}
                                        height={150}
                                        />
                                </ClientSideRoute>
                            </div>
                            <div className="md:w-1/2 md:pl-[1rem]">
                                <div className="flex flex-row mt-8 md:mt-0">
                                    <p className="text-lg">{String(project.projectType).toUpperCase()}</p>
                                    <p className="text-lg font-bold">&nbsp;·&nbsp;</p>
                                    <p className="text-lg">
                                        {String(new Date(project._updatedAt).toLocaleDateString(
                                            "en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            }
                                            )).toUpperCase()}
                                    </p>
                                </div>
                                <ClientSideRoute key={project._id} route={`/project/${project.slug.current}`}>
                                    <p className="text-4xl font-bold my-5 hover:text-[#2570d1] duration-300 transition-colors">{project.title}</p>
                                </ClientSideRoute>
                                <div className="flex flex-wrap items-center mb-5">
                                {project.categories.map((category) => (
                                    <p
                                        key={category._id}
                                        onClick={() => handleCategoryClick(category.title)}
                                        className={`bg-[#2570d1] hover:bg-[#4a5869] text-white px-3 py-1 rounded-lg text-sm font-semibold mt-1 mr-2 cursor-pointer ${
                                            category.title === selectedCategory
                                                ? "bg-[#4a5869] hover:bg-[#2570d1]"
                                                : ""
                                        }`}
                                    >
                                        {category.title}
                                    </p>
                                ))}
                                </div>
                                <p className="text-lg">{project.description}</p>
                            </div>
                        </div>
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </div>
            ))}
        </span>
        <div className="flex justify-center">
            <Link href="#projectlist">
                <button onClick={prevPage} className={`bg-[#2570d1] text-white font-semibold py-2 px-6 rounded-md mr-8 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:text-black hover:bg-gray-200 duration-300 transition-colors"}`}>Previous Page</button>
            </Link>
            <Link href="#projectlist">
                <button onClick={nextPage} className={`bg-[#2570d1] text-white font-semibold py-2 px-6 rounded-md mr-8 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:text-black hover:bg-gray-200 duration-300 transition-colors"}`}>Next Page</button>
            </Link>
        </div>
    </div> 
  )
}

export default ProjectList;