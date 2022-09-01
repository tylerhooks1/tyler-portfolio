import React from "react";
import { experience } from "../data";
import Resume from "../documents/Tyler_Hooks_Resume.pdf";


export default function Experience() {
    return (
        <section id="experience">
            {/* <div className="container px-10 py-10 mx-auto text-center">
                <div className="flex flex-col w-full mt-8 mb-20">
                    <BriefcaseIcon className="mx-auto inline-block w-10 mb-4 text-burntorange" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-6">
                        Work Experience
                    </h1>
                    <div>
                        {experience.map((experience) => (
                            <div className="lg:w-2/3 mx-auto leading-relaxed text-base
                            lg:w-2/3 mx-auto leading-relaxed text-base">
                                <div className="flex justify-between mb-3">
                                    <div className="text-left">
                                        <h2 className="font-medium text-lg text-burntorange">{experience.role}</h2>
                                        <p className="font-medium">{experience.company}</p>
                                    </div>
                                    <p className="text-right self-end">{experience.date}</p>
                                </div>
                                <p>{experience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <a
              href={Resume}
              target = "_blank"
              className="inline-flex text-cream bg-burntorange border-1 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg text-center">
              Resume
            </a>
            </div> */}
        </section>
    )
}