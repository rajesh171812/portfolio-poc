import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState("");
  useEffect(() => {
    setCurrentRoute(router.pathname);
  });
  return (
    <div>
      {currentRoute === '/ipitch' || currentRoute === '/searchProject' || currentRoute === '/vendorManagement'? (
        <div
          className={
            "flex flex-row items-center justify-center font-sans font-bold bg-footerBackgroundColor text-footerFontColor "
          }
        >
          <div className="flex flex-col font-serif font-light text-base">
            <img
              src="/Casestudy_Footer/Footer_Profile.svg"
              alt="Business Edge"
              className="object-center"
            />
            <Link href="/about">
              <div className="mt-7">ABOUT</div>
            </Link>
            <Link href="/contact" className="mt-7">
              <div className="mt-7">CONTACT</div>
            </Link>
            <Link href="/resume" className="mt-7">
              <div className="mt-7">RESUME</div>
            </Link>
          </div>
          <div className="my-16 flex flex-col ml-20">
            <div className="text-base">SEE MORE OF MY WORK</div>
            <Link href="/searchProject" className="mt-2">
              <img
                  src="/Casestudy_Footer/Footer_3.svg"
                  alt="Business Edge"
                  className={
                    "object-center " +
                    (currentRoute === "/searchProject" ? "hidden" : "")
                  }
              />
            </Link>
            <Link href="/ipitch" className="mt-2">
            <img
              src="/Casestudy_Footer/Footer_1.svg"
              alt="Pitch"
              className={
                "object-center " + (currentRoute === "/ipitch" ? "hidden" : "")
              }
            />
            </Link>
            <Link href="/vendorManagement" className="mt-2">
            <img
              src="/Casestudy_Footer/Footer_2.svg"
              alt="Vendor Management"
              className={
                "object-center " +
                (currentRoute === "/vendorManagement" ? "hidden" : "")
              }
            />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
