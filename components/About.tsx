import React from "react";
import Image from "next/image";
import Underline from "./Underline";

import { FaGraduationCap } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

export default function About() {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-20">
        <h1 className="flex justify-center font-normal text-xl text-slate-950 pb-2">
          <FaInfoCircle />
        </h1>
        <h1 className="text-center font-normal text-lg text-slate-600 pb-2">
          Get to know more
        </h1>

        <h1 className="text-center font-bold text-4xl text-slate-900">
          About Me
          <Underline />
        </h1>
        <br />
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-y-0  md:flex-row md:text-left border-2 border-slate-200 rounded-md">
          <div className="w-full lg:w-3/5 px-10 pb-10 lg:p-10 bg-slate-200 pt-10 ">
            <div className="flex flex-col space-y-2 shadow-md">
              <div className="bg-slate-100 space-y-2 space-x-0 rounded-md shadow-sm py-4 lg:py-2 px-8 lg:px-4 ">
                <div className="flex space-x-2 items-center text-xl">
                  <div className="border-[1px] rounded-full p-1 border-slate-950">
                    <FaGraduationCap />
                  </div>

                  <h1 className="font-semibold text-slate-950 ">Education: </h1>
                </div>

                <div className="p-4 lg:p-1">
                  <div className="flex flex-col md:flex-row">
                    <h1 className="w-1/5 lg:w-2/5 font-semibold text-slate-600">
                      Degree:
                    </h1>
                    <p className="w-4/5 lg:w-3/5 text-slate-600">
                      Bachelor of Technology (B.Tech)
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <h1 className="w-1/5 lg:w-2/5 font-semibold text-slate-600">
                      Major:
                    </h1>
                    <p className="w-4/5 lg:w-3/5 text-slate-600">
                      Computer Science and Engineering
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <h1 className="w-1/5 lg:w-2/5 font-semibold text-slate-600">
                      Alma Mater:
                    </h1>
                    <p className="w-4/5 lg:w-3/5 text-slate-600">
                      Indian Institute of Technology (ISM) Dhanbad
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <h1 className="w-1/5 lg:w-2/5 font-semibold text-slate-600">
                      Year:
                    </h1>
                    <p className="w-4/5 lg:w-3/5 text-slate-600">2020 - 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-2 lg:p-1">
              <br />
              <p className="text-xl text-left">Hi !</p>
              <p className="text-md text-justify md:text-left text-slate-700 p-2 lg:p-1">
                I am a dedicated blockchain and web developer. My expertise
                spans ReactJS, JavaScript, Solidity, NoSql databases and Smart
                Contracts. I am deeply passionate about emerging technologies
                and trends in the decentralized space. I am eager to advance my
                career and continually seek new opportunities to drive
                technological innovation.
              </p>
            </div>
          </div>
          <div className="text-center hidden lg:w-2/5 lg:text-left pr-10 lg:flex lg:flex-col lg:justify-center pb-10 lg:pb-0">
            <Image
              src="/blingbot.svg"
              alt=""
              width={400}
              height={325}
              className="p-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
