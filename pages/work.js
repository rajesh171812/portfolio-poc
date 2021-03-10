import React from "react";
import Link from "next/link";

export default function Work() {
  return (
    <div className="py-5 bg-black">
      <div className="flex justify-center my-16">
        <img
          src="/Dashboard_profile_pic.svg"
          alt="Yours truly Rajesh!"
          className="h-44 w-44 rounded-full"
        />
      </div>
      <div className="mb-5 font-sans text-center text-7xl font-bold">Rajesh Revoor</div>
      <div className="mb-16 font-serif text-center text-2xl font-light">User Experience Designer   |   HFI-CUA™
</div>
      <div className="flex font-serif justify-center mb-16 text-xl font-light">
        <span className="w-1/2 leading-7 text-center">
          I’m a Certified User Experience Designer who combines research, analysis, sketching, rapid
          prototyping, interaction and visual design to transform <span className="font-serif font-bold">complex
            problems into elegant solutions</span>.
        </span>
      </div>
      <div className="grid grid-cols-6 gap-4 font-serif">
        <div className="col-span-1"></div>
        <div className="col-span-4 flex flex-col lg:flex-row justify-center">
          <div className="mr-0 md:mr-12 cursor-pointer">
            <Link href="/businessEdge">
              <div>
                  <img
                    src="/Dashboard_BE_600x600.png"
                    alt="Business Edge"
                    className=""
                  />
              </div>
            </Link>
          </div>
          <div className="mt-12 md:mt-0 cursor-pointer">
            <Link href="/ipitch">
              <div>
                <img
                  src="/Dashboard_pitch_600x600.png"
                  alt="Pitch"
                  className=""
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-12 mb-32 font-serif">
        <div className="col-span-1"></div>
        <div className="col-span-4 cursor-pointer justify-center">
          <Link className="" href="/vendorManagement">
            <div>
              <img
                src="/Dashboard_VMO_600x600.png"
                alt="Vendor Management"
                className=""
              />
            </div>
          </Link>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}
