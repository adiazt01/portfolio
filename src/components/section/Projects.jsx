import React from "react";
import { BiLink, BiLogoGithub } from "react-icons/bi";
import { ProjectCard } from "../cards/ProjectCard";
import { projectData } from "../../data/ProjectsData";

export const Projects = () => {
  return (
    <section
      className="flex h-auto lg:items-start justify-start flex-col items-center"
      id="Projects"
    >
      <h2 className="text-gray-300 text-4xl lg:text-6xl text-left underline underline-offset-8 decoration-green-400">
        Projects
      </h2>
      {/* Projects */}
      <div className="grid lg:grid-cols-3 w-full mt-28 mb-44 grid-cols-1 md:grid-cols-4 gap-8">
        {projectData.map((project, id) => (
          <ProjectCard key={id} {...project} />
        ))}
      </div>
    </section>
  );
};
