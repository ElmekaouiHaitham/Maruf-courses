"use client";
import projects from "../../../public/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import "../../../styles/globals.css";

type Props = {
  params: {
    ProjectName: string;
  };
};

const ProjectDetails = ({ params }: Props) => {
  const ProjectName = decodeURIComponent(params.ProjectName);

  const project = projects.find((project) => project.name === ProjectName);

  if (!project) {
    return <h1>not found</h1>;
  }

  return (
    <body>
      <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
        <div className="bg-zinc-50 min-h-screen">
          <header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
            <div className="fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent bg-zinc-900/0 border-transparent">
              <div className="container flex self-start pt-3 pl-3">
                <Link
                  href={`/#projects`}
                  className="duration-200 hover:font-medium  text-zinc-400 hover:text-zinc-100 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-6 h-6 "
                  >
                    <line x1="19" x2="5" y1="12" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
                <div className="mx-auto max-w-2xl lg:mx-0">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                    {project!.name}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-zinc-300">
                    {project!.description}
                  </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                  <div className="flex flex-row align-bottom space-x-4 text-zinc-300">
                    {project.frameworks.map((frameworkIcon, inx) => {
                      return frameworkIcon;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </header>
          <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
            <div className="mdx">
              <h2 className="text-2xl font-bold ml-5 mb-5">Images:</h2>
              <div
                className={`grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16 ${
                  project!.isMobile ? "md:grid-cols-3" : "md:grid-cols-2"
                }`}
              >
                {project!.images.map((image, index) => {
                  return (
                    <Image
                      src={image}
                      alt=""
                      key={index}
                      className="rounded-xl shadow-xl hover:opacity-70"
                      width={1000}
                      height={1000}
                    />
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </div>
    </body>
  );
};

export default ProjectDetails;
