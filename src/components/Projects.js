import React from "react";
import { projects } from "../data";


export default function Projects() {
    return (
        <section id="projects" className="text-black dark:text-white body-font font-Roboto">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col w-full mt-8 ">
                    <h1 className="transition-all text-2xl mb-8">Projects</h1>

                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            target="_blank"
                            key={project.description}
                            className="sm:w-1/2 w-100 p-4" rel="noreferrer">
                            <div className="flex relative">
                                <div className="px-8 py-10 relative z-5 w-full border-2 border-gray-800 dark:border-white ">

                                    <h2 className="tracking-widest text-sm title-font font-medium text-lime-600 dark:text-lime-200 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );

}