import React from "react";
import Link from "next/link";
import Map from "../components/map";

export default function Contact(props) {
  return (
    <div className="mt-20 grid grid-cols-8 gap-4 bg-black">
      <div className="col-span-2 "></div>
      <div className=" col-span-4">
        <div className="my-5 font-sans font-bold text-5xl">Nice to meet you!</div>
        <div className="my-5 font-sans text-lg">
          {/*<Map></Map>*/}
          <img
              className=""
              src="/Contact_map.svg"
              alt=""
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-2 cursor-pointer">
            <span className="opacity-75">Reach me at </span>
            <Link a href="mailto:rajeshrevoor.ux@gmail.com?subject=Hello:)">
            <span className= "font-bold">  rajeshrevoor.ux@gmail.com </span>
            </Link>
          </div>
          <div className="my-2 flex items-center justify-center bg-white w-8 h-8 text-black text-md font-bold rounded-full cursor-pointer z-50">
            <Link href="https://www.linkedin.com/in/rajeshrevoor/">
              <span>in</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}
