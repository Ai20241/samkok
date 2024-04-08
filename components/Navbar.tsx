"use client"
import Link from "next/link";
import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className=" relative">
            <div className="flex justify-between items-center w-full h-20 px-4 bg-white/50 text-white bg-black nav  fixed top-0 left-0">
      <div className="mx-auto flex flex-row space-x-3 text-center w-[50%] justify-items-center">
          <a
            className="text-center"
            href=""
            target="_blank"
            rel="noreferrer"
          >
         <img src="https://i.imgur.com/H8A9tV3.png" className="w-[50%]" />
          </a>
          <a
            className="text-center"
            href=""
            target="_blank"
            rel="noreferrer"
          >
             <img src="https://i.imgur.com/XxPtbJn.png" className="w-[50%]" />
          </a>
          <a
           className="text-center"
            href=""
            target="_blank"
            rel="noreferrer"
          >
             <img src="https://i.imgur.com/XxPtbJn.png" className="w-[50%]" />
          </a>
      </div>

      {/* <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setIsOpen(!isOpen)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </div>
    </div>
  );
};

export default Navbar;
