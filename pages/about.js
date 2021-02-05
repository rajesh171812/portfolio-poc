import React from "react";

export default function About(props) {
  return (
    <div className="mt-24 grid grid-cols-8 gap-4">
      <div className="col-span-2 "></div>
      <div className=" col-span-4">
        <div className="my-5 text-6xl">Rajesh Revoor</div>
        <div className="my-5 text-4xl">UX Designer</div>
        <div className="flex justify-center my-5 pb-5 border-b-2 border-white opacity-75 font-sans text-lg">
          <span>
            With over 13 years of experience being an advocate for the user
            experience design process that resonates in creating compelling
            designs for desktop, web, mobile , and other digital user
            interfaces. By synthesizing the needs and goals of users, I offer
            stunning design deliverables and solutions that accomplish and
            satisfy both the business inline initial objectives and the user’s
            needs to accomplish their most pertinent tasks at hand. I have
            handled UX projects on multiple industries specialized in Retail
            Banking and Financial Services, Retirement, Retail and Life Sciences
          </span>
        </div>
      </div>
      <div className="col-span-2"></div>
    </div>
  );
}
