import React from "react";
import Hero from "../photos/hero.svg";
import Linkedin from "../photos/linkedin.svg";
import Github from "../photos/github.svg";

export default function About() {
  return (
    <section className="my-20" id="about">
      <div className="container mx-auto px-10 mx-10 lg:pb-20 flex items-center justify-between">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Hello, my name is Tyler Hooks.
            <br className="hidden lg:inline-block" /> I'm a Software Engineer
            <br className="hidden lg:inline-block" /> with interests in React Development and UI Engineering.
          </h1>
          <div className="flex mb-4 items-center">
          <a href="https://www.linkedin.com/in/tyler-hooks-9214abb5" className="w-6 mr-4">
            <img
              src={Linkedin}
            />
          </a>
          <a href="https://github.com/tylerhooks1" className="w-6">
            <img
              src={Github}
            />
          </a>
          </div>
          <p className="mb-8 leading-relaxed mb-2">
            I have over 2 years of experience with JavaScript frameworks and applications, web development, and the server-side languages Java and .NET.
            In my current role, I manage a UI component library that has resulted in an increase in compatibility, accessibility, and efficiency of hundreds of projects in production.
            Additionally, I have collaborated with UX designers to develop components and build out front-end applications across my organization. 
          </p>

          <h2 className="text-xl font-medium">About this portfolio </h2>
          <p className="mb-8 leading-relaxed">
            This portfolio site was implemented using React.js,Tailwind CSS for styling, and deployed with Netlify. <br />
            Please checkout the <span><a class="text-burntorange" href="#">Git repository</a></span> for more information.
            In time, I plan on adding more projects to this site and can't wait to share what I've learned and the many things I'm passionate about!
          </p>
          <div className="flex justify-center mb-7">
            <a
              href="#contact"
              className="inline-flex text-cream bg-burntorange border-1 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg text-center">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-2 border-burntorange py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg text-center">
              See Projects
            </a>
          </div>
        </div>
        <div className="hidden md:block xl:max-w-xl xl:w-full md:w-1/2 w-5/6">
          <img
            src={Hero}
          />
        </div>

      </div>
    </section>
  );
}