import React from "react";
import { projects } from "../data";


export default function Projects() {
    return (
        <section id="projects" className="text-gray-400  body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mt-8 mb-20">

                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        Projects
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Here are a few projects that I have completed. Please contact me if you would like to follow
                        up and learn more! As always, feedback is welcomed.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            target="_blank"
                            key={project.description}
                            className="sm:w-1/2 w-100 p-4" rel="noreferrer">
                            <div className="flex relative">
                                <div className="px-8 py-10 relative z-5 w-full border-4 border-gray-800 bg-gray-900">

                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-burntorange mb-3">
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