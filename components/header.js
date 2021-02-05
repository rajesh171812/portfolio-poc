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
    floatingMenu.classList.toggle("top-0");
    floatingMenu.classList.toggle("-top-full");
    floatingMenu.classList.toggle("-left-full");
  };
  return (
    <div className="p-4 md:p-8 border-b-0 md:border-b-2 border-white font-sans">
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
        className={
          "fixed left-0 -left-full -top-full md:static flex flex-col md:flex-row h-screen w-screen md:h-auto md:w-auto items-start justify-center bg-black opacity-90 md:bg-black md:opacity-100 " +
          (currentRoute === "/ipitch" || currentRoute === "/searchProject"
            ? "hidden"
            : "")
        }
      >
        <div className="hidden md:block z-50 mt-3 mr-20 w-72 border-t-2 border-white"></div>
        <div className="mx-4 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/work">
            <div
              className={
                "text-sans cursor-pointer opacity-70 uppercase " +
                (currentRoute === "/work" ? "text-bold opacity-100" : "")
              }
            >
              Work
            </div>
          </Link>
        </div>
        <div className="mx-4 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/about">
            <div
              className={
                "text-sans cursor-pointer opacity-70 uppercase " +
                (currentRoute === "/about" ? "text-bold opacity-100" : "")
              }
            >
              About
            </div>
          </Link>
        </div>
        <div className="mx-4 my-4 md:my-0 text-3xl md:text-xl text-white">
          <Link onClick={toggleMobileMenu} href="/contact">
            <div
              className={
                "text-sans cursor-pointer opacity-70 uppercase " +
                (currentRoute === "/contact" ? "text-bold opacity-100" : "")
              }
            >
              Contact
            </div>
          </Link>
        </div>
        <div className="mx-4 my-4 md:my-0 text-3xl md:text-xl text-white">
          <a onClick={toggleMobileMenu} href="/resume.pdf" download>
            <div
              className={
                "text-sans cursor-pointer opacity-70 uppercase " +
                (currentRoute === "/resume" ? "text-bold opacity-100" : "")
              }
            >
              Resume
            </div>
          </a>
        </div>
        <div className="hidden md:block mt-3 ml-20 w-72 border-t-2 border-white "></div>
      </div>
    </div>
  );
}
