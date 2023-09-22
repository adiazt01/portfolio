import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaFreeCodeCamp, FaInstagram } from "react-icons/fa";

export const Welcome = () => {
  return (
    <section
      className="flex h-[100vh] justify-center flex-col items-left"
      id="About me"
    >
      <div className="flex flex-col md:items-center">
        <div className="lg:w-[80%] md:w-[80%] sm:w-[100%]">
          <p className="lg:text-6xl text-3xl font-semibold text-gray-400">
            Armando Díaz
          </p>
          <p className="lg:text-6xl text-3xl mt-2 font-semibold text-green-400 ">
            {"Full Stack Developer"}
          </p>
          <div className="flex flex-col mt-6 lg:w-[75%] md:w-[100%]">
            <p className="text-gray-400 md:text-md lg:text-2xl">
              // Specializing in building awesome, expert and exceptional apps
              web. Currently, I am focused on exploring different back end
              environments to improve my versatility as a programmer.
            </p>
          </div>
          <div className="flex gap-8 justify-start flex-row items-left mt-6 ml-[-3px]">
            <a href="mailto:armandodt2004@gmail.com" target="_blank" className="hover:-translate-y-1 transition" rel="noreferrer">
              <AiFillMail className="text-3xl md:text-5xl text-green-400" />
            </a>
            <a href="https://github.com/adiazt01" target="_blank" className="hover:-translate-y-1 transition" rel="noreferrer">
              <AiFillGithub className="text-3xl md:text-5xl text-green-400" />
            </a>
            <a href="https://www.linkedin.com/in/armando-diaz-291385251/" target="_blank" className="hover:-translate-y-1 transition" rel="noreferrer">
              <AiFillLinkedin className="text-3xl md:text-5xl text-green-400" />
            </a>
            <a href="https://www.freecodecamp.org/fccc117c7bb-b7ee-4660-8ae3-663357be41a0" target="_blank" className="hover:-translate-y-1 transition" rel="noreferrer">
              <FaFreeCodeCamp className="text-3xl md:text-5xl text-green-400" />
            </a>
            <a href="https://www.instagram.com/adiaztovar_/" target="_blank" className="hover:-translate-y-1 transition" rel="noreferrer">
              <FaInstagram className="text-3xl md:text-5xl text-green-400" />
            </a>
          </div>
          <div className="mt-8">
            <a
              className="hover:bg-green-500 hover:border-green-500 font-semibold hover:text-black border-2 border-gray-300 w-32 text-center px-4 py-2 md:text-xl text-gray-300 rounded-r-sm md:w-48 hover:scale-105 hover:translate-x-1 transition"
              href="/curriculum.pdf"
              download
            >
              Download CV 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
