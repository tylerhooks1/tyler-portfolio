import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Icon from "../photos/navbar-icon.svg";

export default function Navbar() {
  return (
    <header className="bg-cream-light md:sticky top-0 z-10">
      <div className="container p-5 mx-auto flex flex-col md:flex-row items-center">
        <div className=" items-center md:flex md:mr-20 md:pr-10">
          <img 
          src={Icon} 
          className="hidden md:block"
          />
          <div className="title-font text-center md:mt-5 font-medium md:mb-0">
            <a href="#about" className="md:ml-3 text-xl whitespace-nowrap">
              Tyler Hooks
            </a>
          </div>
        </div>

        <nav className="md:mr-auto md:mt-5 md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-col md:flex-row items-center text-base justify-center">
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