import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState("");
  useEffect(() => {
    setCurrentRoute(router.pathname);
  });

  const toggleMobileMenu = () => {
    console.log(router.route);
    console.log("currentRoute", currentRoute);
    const floatingMenu = document.getElementById("floatingMenu");
    const leftCross = document.getElementById("left-cross");
    const rightCross = document.getElementById("right-cross");
    const hamburgerIcon = document.getElementById("hamburgerIcon");
    const hamburgerLinesToHide = document.querySelectorAll(
      ".hamburgerLinesToHide"
    );
    hamburgerLinesToHide.forEach((hl) => {
      hl.classList.toggle("hidden");
    });
    floatingMenu.classList.toggle("-left-full");
    floatingMenu.classList.toggle("-translate-y-full");

    hamburgerIcon.classList.toggle("flex-col");
    hamburgerIcon.classList.toggle("flex-row");

    rightCross.classList.toggle("-ml-6");

    leftCross.classList.toggle("mb-1.5");
    rightCross.classList.toggle("mb-1.5");
    rightCross.classList.toggle("rotate-45");
    leftCross.classList.toggle("-rotate-45");
  };
  return (
    <div className="p-4 md:pt-16 md:pb-10 md:border-b border-white font-sans">
      <div
        className={
          "top-15 left-5 bg-black hover:bg-blue-700 w-16 h-16 flex items-center justify-center text-white text-2xl rounded-full cursor-pointer z-50 " +
          (currentRoute === "/ipitch" || currentRoute === "/searchProject"
            ? "absolute"
            : "hidden")
        }
      >
        <Link href="/work">
          <span>&#x3c;</span>
        </Link>
      </div>
      <div
        className={
          "mt-4 flex md:hidden justify-between font-sans " +
          (currentRoute === "/ipitch" || currentRoute === "/searchProject"
            ? "hidden"
            : "")
        }
      >
        <div className="mx-4 text-xl text-white">Rajesh Revoor</div>
        <div className="nav-toggle-btn z-50" onClick={toggleMobileMenu}>
          <div id="hamburgerIcon" className="flex flex-col">
            <span className="hamburgerLinesToHide w-6 mb-1.5 border-t-2 border-white"></span>
            <span
              id="left-cross"
              className="w-6 mb-1.5 border-t-2 border-white transition transform duration-500 ease-in-out"
            ></span>
            <span
              id="right-cross"
              className="w-6 mb-1.5 border-t-2 border-white transition transform duration-500 ease-in-out"
            ></span>
            <span className="hamburgerLinesToHide w-6 mb-1.5 border-t-2 border-white"></span>
          </div>
        </div>
      </div>
      <div
        onClick={toggleMobileMenu}
        id="floatingMenu"
        className={
          "fixed left-0 -left-full transition md:transition-none transform md:transform-none -translate-y-full duration-500 ease-in-out  md:static flex flex-col md:flex-row h-screen w-screen md:h-auto md:w-auto items-start justify-center bg-black opacity-90 md:bg-black md:opacity-100 " +
          (currentRoute === "/ipitch" || currentRoute === "/searchProject"
            ? "hidden"
            : "")
        }
      >
        <div className="hidden md:block z-50 mt-3 mr-20 w-72 border-t border-gray"></div>
        <div className="mx-12 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/work">
            <div
              className={
                "text-sans cursor-pointer opacity-50 uppercase " +
                (currentRoute === "/work" ? "font-bold opacity-100" : "")
              }
            >
              Work
            </div>
          </Link>
        </div>
        <div className="mx-12 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/about">
            <div
              className={
                "text-sans cursor-pointer opacity-50 uppercase " +
                (currentRoute === "/about" ? "font-bold opacity-100" : "")
              }
            >
              About
            </div>
          </Link>
        </div>
        <div className="mx-12 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/contact">
            <div
              className={
                "text-sans cursor-pointer opacity-50 uppercase " +
                (currentRoute === "/contact" ? "font-bold opacity-100" : "")
              }
            >
              Contact
            </div>
          </Link>
        </div>
        <div className="mx-12 my-4 md:my-0 text-3xl md:text-xl text-white">
          <a onClick={toggleMobileMenu} href="/resume.pdf" download>
            <div
              className={
                "text-sans cursor-pointer opacity-50 uppercase " +
                (currentRoute === "/resume" ? "font-bold opacity-100" : "")
              }
            >
              Resume
            </div>
          </a>
        </div>
        <div className="hidden md:block mt-3 ml-20 w-72 border-t border-white "></div>
      </div>
    </div>
  );
}
