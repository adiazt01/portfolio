import { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { BiX, BiMenu, BiDownload, BiText } from "react-icons/bi";
import { BsFire } from "react-icons/bs";

export const Navbar = () => {
  const [toggle, useToggle] = useState(false);
  const links = ["About me", "Technologies", "Projects", "Certifications"];

  return (
    <>
      <div className="flex shadow-xl bg-slate-950 fixed w-full h-14 z-20 items-center justify-between p-4 lg:p-12  text-gray-300">
        <div className="flex flex-row items-center align-middle lg:text-2xl text-1xl text-green-400">
          <BsFire className="mt-[3px] lg:text-3xl text-xl mr-1" />
          <h2> | Armando Dev</h2>
        </div>
        <ul className="hidden sm:flex text-xl flex-row gap-3">
          {links.map((link, i) => (
            <li key={i}>
              <a href={`#${link}`} className="hover:text-green-400 transition">
                {link}
              </a>
            </li>
          ))}
        </ul>
        {/* Responsive */}
        <button className="flex sm:hidden" onClick={() => useToggle(!toggle)}>
          {toggle ? (
            <BiX className="text-4xl hover:scale-120 transition" />
          ) : (
            <BiMenu className="text-4xl hover:scale-120 transition" />
          )}
        </button>
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } sm:hidden fixed top-0 text-2xl  w-full flex-col justify-center items-center gap-6 z-10 h-[92vh] mt-14 bg-gray-950 shadow-xl text-gray-300 list-none font-medium`}
      >
        {links.map((link, i) => (
          <li key={i}>
            <a href={`#${link}`} onClick={() => useToggle(!toggle)}>
              {link}
            </a>
          </li>
        ))}
      </div>
    </>
  );
};
