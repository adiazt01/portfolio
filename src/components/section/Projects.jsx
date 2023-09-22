import React from "react";
import {
  BiLink,
  BiLogoGithub,

} from "react-icons/bi";


export const Projects = () => {
  return (
    <section className="flex h-auto lg:items-start justify-start flex-col items-center" id="Projects">
      <h2 className="text-gray-300 text-4xl lg:text-6xl text-left underline underline-offset-8 decoration-green-400">
        Projects
      </h2>
      {/* Projects */}
      <div className="grid lg:grid-cols-3 mt-28 mb-44 grid-cols-1 md:grid-cols-4 gap-8">
        <div className="rounded-sm mx-w-md bg-transparent">
          <img src="image-1.jpg" alt="" />
          <div className="p-5 bg-gray-900">
            <h5 className="mb-2 text-xl text-center italic  tracking-tight text-gray-300">
              <span className="text-green-400">@</span>Task App
            </h5>

            <div className="flex flex-row justify-between mt-4">
              <a
                href="#"
                className="bg-green-500 font-semibold px-3 flex flex-row items-center align-middle gap-1 py-1 rounded-sm hover:scale-110 transition"
              >
                Code
                <BiLogoGithub className="text-2xl" />
              </a>
              <a
                href="#"
                className="bg-green-500 font-semibold px-3 flex flex-row items-center align-middle gap-1 py-1 rounded-sm hover:scale-110 transition"
              >
                View
                <BiLink className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-sm mx-w-md bg-transparent">
          <img src="image-1.jpg" alt="" />
          <div className="p-5 bg-gray-900">
            <h5 className="mb-2 text-xl text-center italic  tracking-tight text-gray-300">
              <span className="text-green-400">@</span>Task App
            </h5>

            <div className="flex flex-row justify-between mt-4">
              <a
                href="#"
                className="bg-green-500 font-semibold px-3 flex flex-row items-center align-middle gap-1 py-1 rounded-sm hover:scale-110 transition"
              >
                Code
                <BiLogoGithub className="text-2xl" />
              </a>
              <a
                href="#"
                className="bg-green-500 font-semibold px-3 flex flex-row items-center align-middle gap-1 py-1 rounded-sm hover:scale-110 transition"
              >
                View
                <BiLink className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="rounded-sm mx-w-md bg-transparent">
          <img src="image-1.jpg" alt="" />
          <div className="p-5 bg-gray-900">
            <h5 className="mb-2 text-xl text-center italic  tracking-tight text-gray-300">
              <span className="text-green-400">@</span>Task App
            </h5>

            <div className="flex flex-row justify-between mt-4">
              <a
                href="#"
                className="bg-green-500 font-semibold px-3 flex flex-row items-center align-middle gap-1 py-1 rounded-sm hover:scale-110 transition"
              >
                Code
                <BiLogoGithub className="text-2xl" />
              </a>
              <a
                href="#"
                className="bg-green-500 font-semibold px-3 flex flex-row items-center align-middle gap-1 py-1 rounded-sm hover:scale-110 transition"
              >
                View
                <BiLink className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
