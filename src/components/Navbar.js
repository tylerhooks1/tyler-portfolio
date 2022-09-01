import React from "react";
import Toggle from './Toggle';

export default function Navbar() {
  return (
    <header className=" md:sticky top-0 z-10  dark:bg-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row lg:justify-between">
        <nav className="md:ml-4 md:py-1 md:pl-4 flex flex-col md:flex-row items-center text-base justify-center  text-black dark:text-white">
          <a href="#experience" className="md:mr-5 hover:text-burntorange">
            Experience
          </a>
          <a href="#projects" className="md:mr-5 hover:text-burntorange">
            Projects
          </a>
          <a href="#skills" className="md:mr-5 hover:text-burntorange">
            Skills
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-burntorange rounded text-base">
            Contact Me

          </a>
        </nav>
        <Toggle />
      </div>
    </header>
  );
}