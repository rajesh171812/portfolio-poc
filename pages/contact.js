import React from "react";
import Link from "next/link";
import Map from "../components/map";

export default function Contact(props) {
  return (
    <div className="mt-24 grid grid-cols-8 gap-4 bg-black">
      <div className="col-span-2 "></div>
      <div className=" col-span-4">
        <div className="my-5 text-4xl">Nice to meet you!</div>
        <div className="my-5 pb-5 border-b-2 border-white opacity-75 font-sans text-lg">
          <Map></Map>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-2">
            <span className="opacity-75">Reach me at </span>
            rajeshrevoor.ux@gmail.com
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
