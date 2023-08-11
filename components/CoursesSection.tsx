"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { SiFlutter } from "react-icons/si";
import projects from "../public/ProjectsData";

const CoursesSection = () => {
  return (
    <section id="projects" className="w-screen px-7 md:px-28">
      <h1 className="my-10 mt-28 text-center font-bold text-4xl">
        Courses
        <p className="my-0 text-sm font-light">challenging multi-step experiences with quizzes and progress-tracking</p>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          // return (<article className="max-w-sm overflow-hidden shadow-xl bg-gray6 y-6 hover:scale-105 rounded-xl transition-transform ease-in-out duration-500">
          //   <a>

          //     <Image className="w-full m-0 mb-1 rounded-t-xl" src="https://fireship.io/courses/firebase-security/img/featured.webp" alt="hello" />

          //     <section className="p-5">
          //       <h5>Hello</h5>
          //       <p className="text-gray3 min-h-[100px]">jskjsiksj siusiusisuisuisusi isusiusdiduidsusdi</p>

          //     </section>
          //   </a>
          // </article>);
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2 flex justify-center items-center">
                    <Link
                      as={`/projects/${project.name}`}
                      href={`/projects/${project.name}`}
                    >
                      <Image
                        src={project.previewImg}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <SiFlutter
                        size={0}
                        className="hover:-translate-y-1 transition-transform cursor-pointer hidden"
                      />
                      {project.frameworks.map((frameworkIcon, inx) => {
                        return frameworkIcon;
                      })}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CoursesSection;
