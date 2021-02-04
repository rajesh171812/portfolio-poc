import React from "react";
import Link from "next/link";

export default function Header() {
  const toggleMobileMenu = () => {
    const floatingMenu = document.getElementById("floatingMenu");
    floatingMenu.classList.toggle("top-0");
    floatingMenu.classList.toggle("-top-full");
  };
  return (
    <div className="p-4 md:p-8 border-b-0 md:border-b-2 border-white font-sans">
      <div className="mt-4 flex md:hidden justify-between font-sans">
        <div className="mx-4 text-xl text-white">Rajesh Revoor</div>
        <div
          className="nav-toggle-btn z-50 flex flex-col"
          onClick={toggleMobileMenu}
        >
          <span className="w-6 mb-1.5 border-t-2 border-white"></span>
          <span className="w-6 mb-1.5 border-t-2 border-white"></span>
          <span className="w-6 mb-1.5 border-t-2 border-white"></span>
          <span className="w-6 mb-1.5 border-t-2 border-white"></span>
        </div>
      </div>
      <div
        onClick={toggleMobileMenu}
        id="floatingMenu"
        className="fixed left-0 -top-full md:static flex flex-col md:flex-row h-screen w-screen md:h-auto md:w-auto items-start justify-center bg-black opacity-75 md:bg-black md:opacity-100"
      >
        <div className="hidden md:block mt-3 mr-20 w-72 border-t-2 border-white"></div>
        <div className="mx-4 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/work">
            <div className="text-sans cursor-pointer uppercase">Work</div>
          </Link>
        </div>
        <div className="mx-4 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/about">
            <div className="text-sans cursor-pointer uppercase">About</div>
          </Link>
        </div>
        <div className="mx-4 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/contact">
            <div className="text-sans cursor-pointer uppercase">Contact</div>
          </Link>
        </div>
        <div className="mx-4 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/resume">
            <div className="text-sans cursor-pointer uppercase">Resume</div>
          </Link>
        </div>
        <div className="hidden md:block mt-3 ml-20 w-72 border-t-2 border-white "></div>
      </div>
      {/*<div className="">*/}
      {/*  Hey this one is absolute*/}
      {/*</div>*/}
    </div>
  );
}
