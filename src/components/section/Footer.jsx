import React from "react";

export const Footer = () => {
  return (
    <footer className="flex items-center flex-col h-auto w-full bg-black pb-4">
      <h2 className="text-3xl mt-8 text-gray-300 underline underline-offset-8 decoration-green-500">
        Armando Diaz
      </h2>
      <p className="text-gray-400 w-[90%] italic text-center mt-2">
        <span className="text-green-500 text-2xl">"</span>With a lot of effort, time and
        dedication anything is possible
        <span className="text-green-500 text-2xl">"</span>
      </p>
      <p className="text-gray-400 w-[90%] text-center mt-4">
        Made with a lot of love and enthusiasm thanks to my family and my girlfriend 🤍
      </p>
      <p className="text-gray-400 w-[90%] text-center mt-12">
       ©️Copyright 2023
      </p>
      <p className="text-gray-400 w-[90%] text-center">
       All rights reserver. Powered by Armando Diaz.
      </p>
    </footer>
  );
};
