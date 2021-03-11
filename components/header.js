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
    <div
      className={
        "p-4 md:pt-16 md:pb-10 font-sans bg-gradient-to-t from-primary to-secondary " +
        (currentRoute === "/ipitch" ||
        currentRoute === "/businessEdge" ||
        currentRoute === "/vendorManagement"
          ? "hidden"
          : "")
      }
    >
      <div
        className={
          "top-15 left-5 bg-black hover:bg-blue-700 w-16 h-16 flex items-center justify-center text-white text-2xl rounded-full cursor-pointer z-50 " +
          (currentRoute === "/ipitch" ||
          currentRoute === "/businessEdge" ||
          currentRoute === "/vendorManagement"
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
          "mt-4 flex md:hidden justify-end font-sans " +
          (currentRoute === "/ipitch" ||
          currentRoute === "/businessEdge" ||
          currentRoute === "/vendorManagement"
            ? "hidden"
            : "")
        }
      >
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
          "fixed left-0 -left-full transition md:transition-none transform md:transform-none -translate-y-full duration-500 ease-in-out  md:static flex flex-col md:flex-row h-screen w-screen md:h-auto md:w-auto items-start justify-center bg-black md:bg-opacity-0" +
          (currentRoute === "/ipitch" ||
          currentRoute === "/businessEdge" ||
          currentRoute === "/vendorManagement"
            ? "hidden"
            : "")
        }
      >
        <div className="hidden md:block z-50 mt-3 mr-20 w-72 border-t border-headerLine"></div>
        <div className="mx-12 my-4 md:my-0 text-3xl md:text-xl text-headerLinksNotSelected">
          <Link onClick={toggleMobileMenu} href="/work">
            <div
              className={
                "text-serif cursor-pointer uppercase " +
                (currentRoute === "/work" ? "font-bold text-white" : "")
              }
            >
              Work
            </div>
          </Link>
        </div>
        <div className="mx-12 my-4 md:my-0 text-3xl md:text-xl text-headerLinksNotSelected">
          <Link onClick={toggleMobileMenu} href="/about">
            <div
              className={
                "text-serif cursor-pointer uppercase " +
                (currentRoute === "/about" ? "font-bold text-white" : "")
              }
            >
              About
            </div>
          </Link>
        </div>
        <div className="mx-12 my-4 md:my-0 text-3xl md:text-xl text-headerLinksNotSelected">
          <Link onClick={toggleMobileMenu} href="/contact">
            <div
              className={
                "text-serif cursor-pointer uppercase " +
                (currentRoute === "/contact" ? "font-bold text-white" : "")
              }
            >
              Contact
            </div>
          </Link>
        </div>
        <div className="mx-12 my-4 md:my-0 text-3xl md:text-xl text-headerLinksNotSelected">
          <a onClick={toggleMobileMenu} href="/Rajesh_Resume.pdf" download>
            <div
              className={
                "text-serif cursor-pointer uppercase" +
                (currentRoute === "/resume" ? "font-bold text-white" : "")
              }
            >
              <div className="flex flex-row">

              Resume <img src="/Download.png" className="h-4 w-4 ml-2 mt-1.5" />
              </div>
            </div>
          </a>
        </div>
        <div className="hidden md:block mt-3 ml-20 w-72 border-t border-white "></div>
      </div>
    </div>
  );
}
