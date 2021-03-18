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
      {currentRoute === "/ipitch" ||
      currentRoute === "/businessEdge" ||
      currentRoute === "/vendorManagement" ? (
        <div className="p-7 md:p-0 bg-footerBackgroundColor">
          <div
            className={
              "flex flex-col md:flex-row items-center justify-center font-sans font-bold bg-footerBackgroundColor text-footerFontColor "
            }
          >
            <div className="flex flex-col font-serif font-light text-base cursor-pointer">
              <Link href="/work">
              <img
                src="/Casestudy_Footer/Footer_Profile.png"
                alt="Profile"
                className="object-center cursor-pointer"
              />
              </Link>
              <Link href="/about" className="cursor-pointer">
                <div className="mt-7">ABOUT</div>
              </Link>
              <Link href="/contact" className="mt-7 cursor-pointer">
                <div className="mt-7">CONTACT</div>
              </Link>
           <a className="flex flex-row mt-7 cursor-pointer" href="/Rajesh_Resume.pdf" download>

             RESUME <img src="/Casestudy_Footer/Download_footer.png" className="h-4 w-4 ml-2 mt-1" />
              </a>
            </div>
            <div className="my-16 flex flex-col ml-20">
              <div className="text-sm font-regular">SEE MORE OF MY WORK</div>
              <div className="cursor-pointer">
                <Link href="/businessEdge" className="mt-2 cursor-pointer">
                  <img
                    src="/Casestudy_Footer/Footer_3.png"
                    alt="Business Edge"
                    className={
                      "object-center " +
                      (currentRoute === "/businessEdge" ? "hidden" : "")
                    }
                  />
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="/ipitch" className="mt-2 cursor-pointer">
                  <img
                    src="/Casestudy_Footer/Footer_1.png"
                    alt="Pitch"
                    className={
                      "object-center " +
                      (currentRoute === "/ipitch" ? "hidden" : "")
                    }
                  />
                </Link>
              </div>
              <div className="cursor-pointer">
                <Link href="/vendorManagement">
                  <img
                    src="/Casestudy_Footer/Footer_2.png"
                    alt="Vendor Management"
                    className={
                      "object-center " +
                      (currentRoute === "/vendorManagement" ? "hidden" : "")
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
