import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsGithub } from "react-icons/bs";
import { FaProjectDiagram } from "react-icons/fa";

import Underline from "./Underline";

import projectsList from "@/constants/projects.js";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="flex justify-center font-normal text-xl text-slate-950 pb-2">
        <FaProjectDiagram />
      </h1>
      <h1 className="text-center font-normal text-lg text-slate-600 pb-2">
        Browse my latest
      </h1>

      <h1 className="text-center font-bold text-4xl text-slate-900">
        Projects
        <Underline />
      </h1>
      <br />

      <div className="flex flex-col space-y-20 px-10 pb-36">
        {projectsList.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-y-0 md:space-x-12 border-[2px] border-slate-200 p-4 md:p-0 rounded-md shadow-md">
                <div className=" md:w-1/2 md:p-8 md:bg-slate-200 rounded-md">
                  <Link href={project.github}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl hover:opacity-70 border-[1px] border-slate-900"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2 md:p-8">
                  <h1 className="text-4xl font-bold mb-6 text-slate-900">
                    {project.name}
                  </h1>
                  <p className="text-md leading-7 mb-4 text-slate-600">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
