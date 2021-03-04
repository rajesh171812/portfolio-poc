import React from "react";

export default function ProjectHeader(props) {
  return (
    <div className="flex flex-col md:flex-row items-stretch">
      <div className="pt-16">
        <div className="mb-7 text-6xl font-sans font-bold text-white">
          {props.projectTitle}
        </div>
        <div className="md:w-3/4 text-2xl font-serif font-light">
          {props.projectDescription}
        </div>
      </div>
      <div className="mt-10 md:-mt-5">
        <img src={props.projectImageUrl} alt="Business Edge" className="" />
      </div>
    </div>
  );
}
