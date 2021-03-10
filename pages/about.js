import React from "react";
import Link from "next/link";

export default function About(props) {
  return (
    <div className="mt-20 grid grid-cols-8 gap-4 bg-black">
      <div className="col-span-2 "></div>
      <div className=" col-span-4">
        <div className="pb-12 border-b border-white">
          <div className="font-sans font-bold text-5xl">Rajesh Revoor</div>
          <div className="mt-3 mb-10 font-serif font-extralight text-2xl">
            User Experience Designer   |   HFI-CUA™
          </div>
          <div className="font-serif leading-7 text-base text-white">
            <div>
              I’m a Certified Usability Analyst with over 8+ years of experience,
              being an advocate for the user experience design process that
              resonates in creating compelling designs for desktop, tablet, mobile
              and other digital user interfaces. By synthesizing the needs and
              goals of users, I offer stunning design deliverables and solutions
              that accomplish and satisfy both the business inline initial
              objectives and the user’s needs to fullfill their most pertinent
              tasks at hand. I have handled UX projects on multiple industries
              like Banking and Financial Services, Retirement, Insurance, Retail
              and Life Sciences.
            </div>
            <div className="my-5">
              Specialized in UX design with high proficiencies in User Research,
              Analyzing the research data, Customer Experience/User Journey Map,
              Concept Sketching, Planning, Agile UX, Prototyping, Usability
              Testing, Visual Design, and understanding HTML/CSS.
            </div>
            <div>
              The framework which I follow to solve a complex problem into
              elegant solutioning through <span className="font-serif font-bold">Research > Analyze > Design > Test</span>.
            </div>
          </div>
        </div>
        <div className="mt-9 w-8 h-8 mb-4 flex items-center justify-center bg-white text-black text-md font-bold rounded-full cursor-pointer z-50">
          <Link href="https://www.linkedin.com/in/rajeshrevoor/">
            <span>in</span>
          </Link>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}
