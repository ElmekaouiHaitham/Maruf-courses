"use client";
// import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

const socials = [
  {
    icon: <AiOutlineMail size={20} />,
    href: "mailto:haithamelmekaoui@gmail.com",
    label: "Email",
    handle: "haithamelmekaoui@gmail.com",
  },
  {
    icon: <AiOutlineWhatsApp size={20} />,
    href: "https://wa.me/212688007649",
    label: "whatsApp",
    handle: "(+212)688007649",
  },
];

export default function Example() {
  return (
    <section id="contact">
      <h1 className="mt-28 text-center font-bold text-4xl">
        Contact
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">
          {socials.map((contact, index) => (
            <Card key={index}>
              <Link
                href={contact.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full dark:text-zinc-200 dar:group-hover:text-white dark:group-hover:bg-zinc-900 border-zinc-500 dark:bg-zinc-900 dark:group-hover:border-zinc-200 drop-shadow-orange">
                  {contact.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl sm:text-sm sm:font-bold font-medium duration-150 lg:text-base dark:text-zinc-200 dark:group-hover:text-white font-display">
                    {contact.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 dark:text-zinc-400 dark:group-hover:text-zinc-200">
                    {contact.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
