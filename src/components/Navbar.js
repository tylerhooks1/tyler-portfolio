import React from "react";
import Toggle from './Toggle';

export default function Navbar() {

  return (
    <header className=" md:sticky top-0 z-10 bg-white  dark:bg-gray-800 ">
      <div className="container mx-auto flex flex-col md:flex-row lg:justify-between">
        <nav className=" md:py-1 flex flex-col md:flex-row items-center text-base justify-center text-black dark:text-white font-Roboto">
          <h1 className="font-bold text-2xl md:text-9xl  mt-2 md:mr-4 text-lime-600 dark:text-lime-200">th.</h1>

          <a href="#experience" className="md:mr-5 text-xl ">
            Experience
          </a>
          <a href="#projects" className="md:mr-5 text-xl ">
            Projects
          </a>
          <a href="#skills" className="md:mr-5 text-xl ">
            Skills
          </a>
          {/* <a
            href="#contact"
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none  rounded text-base">
            Contact Me
          </a> */}
        </nav>
        <Toggle />
      </div>
    </header>
  );
}