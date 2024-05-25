"use client";
import React from "react";
import Underline from "./Underline";
import skillList from "@/constants/skills.js";

import { FaLightbulb } from "react-icons/fa";

const proficiencyCalculator = (proficiency: number) => {
  const width = Math.floor((proficiency / 10) * 100);
  return width.toString() + "%";
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="flex justify-center font-normal text-xl text-slate-950 pb-2">
          <FaLightbulb />
        </h1>
        <h1 className="text-center font-normal text-lg text-slate-600 pb-2">
          Explore my
        </h1>

        <h1 className="text-center font-bold text-4xl text-slate-900">
          Skills
          <Underline />
        </h1>
        <br />
        <div className="flex flex-col justify-center z-10 text-center md:text-left space-y-4 md:mx-20">
          {skillList.map((skill, idx) => {
            return (
              <div
                key={idx}
                className="bg-slate-200 border-[1px] border-slate-200 rounded-md py-4 px-8 w-full shadow-md"
              >
                <h1 className="font-bold text-center text-xl text-slate-900 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="border-[1px] rounded-full p-1 border-slate-950 text-bold">
                      {skill.logo}
                    </div>
                    <div>{skill.title}</div>
                  </div>
                </h1>

                <div className="p-2 bg-slate-100 shadow-md rounded-md">
                  {skill.contents.map((content, id) => {
                    return (
                      <div key={id}>
                        <div className="py-2 flex flex-col md:flex-row justify-between items-center">
                          <h1 className="mb-1 font-semibold md:w-2/6 text-slate-700 hover:text-slate-600">
                            {content.name}
                          </h1>

                          <div className="bg-slate-100 mb-1 border-[1px] border-slate-400 rounded-sm w-full md:w-4/6 h-2">
                            <div
                              className={`bg-gradient-to-r from-slate-400 to-slate-500 h-full rounded-sm `}
                              style={{
                                width: proficiencyCalculator(
                                  content.proficiency
                                ),
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
