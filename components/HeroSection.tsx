"use client"; // this is a client component
import React from "react";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll/modules";
export default function HeroSection() {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-white/0 via-black to-white/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
          <h1 className="z-10 dark:bg-white bg-black text-transparent duration-1000 text-7xl font-bold mt-6 md:mt-0 md:text-8xl cursor-default text-edge-outline animate-title whitespace-nowrap bg-clip-text ">
            Haitham
          </h1>
          <div className="w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-white/0 via-black to-white/0 dark:from-zinc-300/0 dark:via-zinc-300/50 dark:to-zinc-300/0" />
          <div className="animate-fade-in md:mt-2 md:w-3/5">
            <p className="text-center text-lg mt-4 mb-6 md:text-2xl px-5">
              Je suis un{" "}
              <span className="font-semibold text-teal-600">
                développeur d&apos;applications et de sites web{" "}
              </span>
              , travaillant à créer des logiciels qui rendent la vie plus facile
              et plus significative.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center text-center justify-center mb-32 animate-fade-in">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown
              size={35}
              className="animate-bounce hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
