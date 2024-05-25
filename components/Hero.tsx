"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
// import Link from "next/link";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

import { FaFileDownload } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 pt-16 sm:pt-32 lg:pt-40 lg:flex-row lg:space-x-4 lg:text-left">
        <div className="lg:mt-2 lg:w-1/2">
          <Image
            src="/profile-1.jpg"
            alt=""
            width={400}
            height={400}
            className="rounded-full shadow-xl border-[2px] border-slate-900 p-2"
          />
        </div>
        <div className="lg:mt-2 lg:w-3/5">
          <h1 className="text-4xl text-slate-900 font-bold mt-6 lg:mt-0 lg:text-7xl">
            <span className="text-3xl text-slate-600">Hi, I&#39;m </span>
            <br />
            Suryarghya!
          </h1>
          <br />
          <h1 className="text-3xl ">
            <span>I&#39;m a </span>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                2000,
                "Web Developer",
                2000,
                "Blockchain Developer",
                2000,
              ]}
              speed={50}
              className="font-normal text-red-500"
              wrapper="span"
              repeat={Infinity}
            />
          </h1>

          <p className="text-lg mt-4 mb-6 lg:text-lg text-slate-600">
            In pursuit of perfection in the realm of technology
          </p>
          <br />
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 ">
            {/* <Link
              to="https://www.google.com"
              className="text-slate-50 font-semibold px-12 py-4 bg-slate-900 rounded-full shadow hover:bg-slate-800 border-2 border-slate-900 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link> */}
            <a
              href="https://www.google.com"
              target="_blank"
              className="text-slate-50 font-semibold px-12 py-4 bg-slate-900 rounded-full shadow hover:bg-slate-800 border-2 border-slate-900 cursor-pointer"
            >
              <div className="flex justify-center items-center space-x-2">
                <FaFileDownload />
                <p>Download CV</p>
              </div>
            </a>
            <Link
              to="contact"
              className="text-slate-900 font-semibold px-12 py-4 bg-transparent rounded-full shadow hover:bg-slate-900 hover:text-slate-50 duration-300 border-2 border-slate-900 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="flex justify-center items-center space-x-2">
                <IoMdContact className="text-2xl" />
                <p>Contact</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center justify-center space-x-10 mb-1 py-20 ">
          <a href="https://github.com/cole319" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-slate-900"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/suryarghya-saha-286ab4147/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-slate-900 "
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/dem_e_god"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-slate-900 "
              size={30}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
