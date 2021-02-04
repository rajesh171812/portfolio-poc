import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="p-4 md:p-8 border-b-2 border-white font-sans">
      <div className="hidden md:flex flex-row justify-center ">
        <div className="mt-3 mr-20 w-72 border-t-2 border-white"></div>
        <div className="mx-4 text-xl text-white">
          <Link href="/work">
            <div className="text-sans cursor-pointer uppercase">Work</div>
          </Link>
        </div>
        <div className="mx-4 text-xl text-white">
          <Link href="/about">
            <div className="text-sans cursor-pointer uppercase">About</div>
          </Link>
        </div>
        <div className="mx-4 text-xl text-white">
          <Link href="/contact">
            <div className="text-sans cursor-pointer uppercase">Contact</div>
          </Link>
        </div>
        <div className="mx-4 text-xl text-white">
          <Link href="/resume">
            <div className="text-sans cursor-pointer uppercase">Resume</div>
          </Link>
        </div>
        <div className="mt-3 ml-20 w-72 border-t-2 border-white "></div>
      </div>
      <div className="md:hidden flex justify-between font-sans">
        <div className="mx-4 text-xl text-white">Rajesh Revoor</div>
        <div className="nav-toggle-btn flex flex-col">
          <span className="w-6 mb-1.5 border-t-2 border-white"></span>
          <span className="w-6 mb-1.5 border-t-2 border-white"></span>
          <span className="w-6 mb-1.5 border-t-2 border-white"></span>
          <span className="w-6 mb-1.5 border-t-2 border-white"></span>

        </div>
      </div>

    </div>
  );
}
