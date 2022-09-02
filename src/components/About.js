import React from "react";
import TypeIt from "typeit-react"
import Profile from "../photos/profile.jpg"


export default function About() {
  return (
    <section className=" mt-10  bg-white dark:bg-gray-800 font-Roboto flex" id="about">
      <div className="container items-center text-center mx-auto px-10 mx-10 lg:pb-20  md:grid md:grid-cols-2 md:place-content-between md:h-48 md:text-left flex justify-items-center md-7">
        <div className="lg:ml-28 xl:ml-8 ">
          <h1 className="md:text-3xl font-bold grid-cols-2 ">Hi, I'm Tyler Hooks! I'm a <br className='inline-block xl:hidden ' />
            <TypeIt className='text-lime-600 dark:text-lime-200' options={{ loop: true }} getBeforeInit={(instance) => {
              instance
                .type('developer.')
                .pause(750)
                .delete(10)
                .pause(500)
                .type('designer.')
                .pause(750)
                .delete(9)
                .pause(500)
                .type('Lego enthusiast :)')
              return instance;
            }} />
          </h1>
          <p className="grid-cols-2 font-light lg:text-2xl">
            I have over 3 years of experience with JavaScript frameworks and applications and web development
            In my current role, I manage a UI component library that has resulted in an increase in compatibility, accessibility, and efficiency of hundreds of projects in production.
          </p>
          <div className="flex mt-3 mb-4 justify-center md:justify-start" rel="noreferrer noopener">
            <a href="https://www.linkedin.com/in/tyler-hooks-9214abb5" target="_blank" className="w-6 mr-4" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
            </a>
            <a href="https://github.com/tylerhooks1" target="_blank" className="w-6" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
          </div>
        </div>
        <div className="hidden md:block w-5/6 xl:w-3/5 justify-items-center">
          <img
            src={Profile}
            className="rounded-lg"
            alt=""
          />
        </div>
      </div >
    </section >
  );
}