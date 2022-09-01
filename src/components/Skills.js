import React from "react";

import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto font-Roboto">


        <h1 className="text-2xl mb-4">
          Skills &amp; Technologies
        </h1>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="border rounded flex p-4 h-full items-center">

                <span className="title-font font-medium ">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}