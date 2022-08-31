import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Toggle from './Toggle';

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-black md:sticky top-0 z-10">
      <div className="container  mx-auto flex flex-col md:flex-row items-center">


        <nav className="md:mr-auto md:mt-5 md:ml-4 md:py-1 md:pl-4 flex flex-col md:flex-row items-center text-base justify-center font-stripAnsi text-black dark:text-white">
          <a href="#experience" className="md:mr-5 hover:text-burntorange">
            Experience
          </a>
          <a href="#projects" className="md:mr-5 hover:text-burntorange">
            Projects
          </a>
          <a href="#skills" className="md:mr-5 hover:text-burntorange">
            Skills
          </a>
        </nav>

        <Toggle />
        <a
          href="#contact"
          className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:text-burntorange rounded text-base md:mt-5">
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>

    </header>
  );
}