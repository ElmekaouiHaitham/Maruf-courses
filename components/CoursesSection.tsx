"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { SiFlutter } from "react-icons/si";
import courses from "../public/ProjectsData";

const CoursesSection = () => {
  return (
    <section id="projects" className="w-screen px-7 md:px-28">
      <h1 className="my-10 mt-6 text-center font-bold text-4xl">
        Courses
        <p className="my-0 text-sm font-light">challenging multi-step experiences with quizzes and progress-tracking</p>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => {
          return (<article key={idx} className="max-w-sm overflow-hidden shadow-xl bg-gray6 y-6 hover:scale-105 rounded-xl transition-transform ease-in-out duration-500">
            <a>

              <Image width={1000} height={1000} className="w-full m-0 mb-1 rounded-t-xl" src={course.previewImg} alt="hello" />

              <section className="p-5">
                <h1 className="text-4xl font-bold mb-6">{course.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">{course.description}</p>

              </section>
            </a>
          </article>);
        })}
      </div>
    </section>
  );
};

export default CoursesSection;
