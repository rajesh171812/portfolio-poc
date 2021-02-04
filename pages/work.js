import React from "react";
import Link from "next/link";

export default function Work(props) {
  return (
    <div className="py-5 bg-black">
      <div className="flex justify-center my-20">
        <img
          src="/rajesh.jpeg"
          alt="Yours truly Rajesh!"
          className="h-56 w-56 rounded-full"
        />
      </div>
      <div className="my-5 text-center text-6xl">Rajesh Revoor</div>
      <div className="my-5 text-center text-4xl">UX Designer</div>
      <div className="flex justify-center my-5 text-lg">
        <span className="w-1/2">
          I’m Rajesh, a product designer who combines research, rapid
          prototyping, interaction and visual design to transform complex
          problems into elegant solutions.
        </span>
      </div>
      <div className="grid grid-cols-6 gap-4 my-10 font-serif">
        <div className="col-span-1"></div>
        <div className="col-span-4 flex flex-col lg:flex-row justify-center">
          <div className="flex-grow my-3 mx-3 h-96 bg-blue-600 cursor-pointer">
            <Link href="/searchProject">
              <div>
                  <img
                    src="/project1.png"
                    alt="Yours truly Rajesh!"
                    className="object-cover"
                  />
              </div>
            </Link>
          </div>
          <div className="flex-grow my-3 mx-3 h-96 bg-blue-800 cursor-pointer">
            <Link href="/ipitch">
              <div>
                <img
                  src="/project2.png"
                  alt="Yours truly Rajesh!"
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="grid grid-cols-6 gap-4 my-10 font-serif">
        <div className="col-span-1"></div>
        <div className="col-span-4 mx-3 bg-pink-400 cursor-pointer">
          <Link className="" href="/searchProject">
            <div>
              <img
                src="/project3.png"
                alt="Yours truly Rajesh!"
                className="object-cover h-96 w-full"
              />
            </div>
          </Link>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
