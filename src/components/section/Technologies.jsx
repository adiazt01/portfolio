import { BiLogoPython, BiLogoReact, BiServer } from "react-icons/bi";
import { BsStack } from "react-icons/bs";

export const Technologies = () => {
  return (
    <section className="flex h-auto flex-col items-center lg:items-start p-8" id="Technologies">
      <h2 className="text-gray-300 text-4xl lg:text-6xl text-left underline underline-offset-8 decoration-green-400">
        Technologies
      </h2>
      <div className="grid mt-28 mb-44 grid-cols-1 md:grid-cols-4 gap-8">
        <div
          className="flex lg:h-80 flex-col items-center max-w-[300px] h-auto p-6 border-2 border-white rounded-sm"
        >
          <h5 className="text-center mb-2 text-xl lg:text-3xl font-semibold tracking-tight dark:text-white">
            {"<Front End />"}
          </h5>
          <BiLogoReact className="text-green-500 text-6xl lg:text-8xl " />
          <p className="text-center mt-2 lg:text-xl text-gray-300">
            <span className="text-green-500 ">></span> React, Redux, HTML, Sass, CSS,
            Tailwind, Bootstrap, Material UI, Jinja.
          </p>
        </div>
        <div
          className="flex lg:h-80 flex-col items-center max-w-[300px] h-auto p-6 border-2 border-white rounded-sm"
        >
          <h5 className="text-center mb-2 text-xl lg:text-3xl font-semibold tracking-tight dark:text-white">
            {"<Back End />"}
          </h5>
          <BiServer className="text-green-500 text-6xl lg:text-8xl" />
          <p className="text-center mt-2 lg:text-xl text-gray-300">
            <span className="text-green-500">></span> Node.js, Express, Django,
            SQlite, MongoDB, Postgressql
          </p>
        </div>
        <div
          className="flex lg:h-80 flex-col items-center max-w-[300px] h-auto p-6 border-2 border-white rounded-sm"
        >
          <h5 className="text-center mb-2 text-xl lg:text-3xl font-semibold tracking-tight dark:text-white">
            {"<Languages />"}
          </h5>
          <BiLogoPython className="text-green-500 text-6xl lg:text-8xl" />
          <p className="text-center mt-2 lg:text-xl text-gray-300">
            <span className="text-green-500">></span> Javascript, Typescript,
            Python
          </p>
        </div>
        <div
          className="flex lg:h-80 flex-col items-center max-w-[300px] h-auto p-6 border-2 border-white rounded-sm"
        >
          <h5 className="text-center mb-2 text-xl lg:text-3xl font-semibold tracking-tight dark:text-white">
            {"<Another />"}
          </h5>
          <BsStack className="text-green-500 text-6xl mt-4 lg:text-7xl" />
          <p className="text-center mt-3 lg:text-xl text-gray-300">
            <span className="text-green-500">></span> Firebase
          </p>
        </div>
      </div>
    </section>
  );
};
