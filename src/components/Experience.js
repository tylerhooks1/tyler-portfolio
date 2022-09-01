import { experience } from "../data";
import Resume from "../documents/Tyler_Hooks_Resume.pdf";


export default function Experience() {

    return (
        <section id="experience" className="font-Roboto pt-48 mt-10">
            <div className="container px-10 py-10 mx-auto ">
                <h1 className="transition-all text-2xl ">Work Experience</h1>
                <ol className="border-l border-lime-600 dark:border-lime-200">
                    {experience.map((experience) => (
                        <li>
                            <div className="flex flex-start items-center pt-2">
                                <div className="bg-lime-600 dark:bg-lime-200 w-2 h-2 rounded-full -ml-1 mr-3"></div>
                                <p className="text-lime-600 dark:text-lime-200 text-sm">{experience.date}</p>
                            </div>
                            <div className="mt-0.5 ml-4 mb-6">
                                <h4 className="text-white font-semibold text-xl mb-1.5">{experience.role}</h4>
                                <h4 classsName="text-white font-semibold text-xl mb-1.5">{experience.company}</h4>
                                <p classsName="text-white mb-3 font-light text-base">{experience.description}</p>
                            </div>
                        </li>
                    ))}
                </ol>
                <button
                    href={Resume}
                    target="_blank"
                    className="inline-flex border-2 text-lime-600 dark:text-lime-200 border-lime-600 dark:border-lime-200 py-2 px-6 focus:outline-none rounded text-lg text-center">
                    Resume
                </button>
            </div>
        </section>
    )
}