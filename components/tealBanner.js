import React from "react";

export default function TealBanner(props) {
  return (
    <div
      className={
        "mt-36 mb-28 h-72 flex flex-col items-center justify-center font-sans font-bold " +
        (props.color === "teal" ? "bg-teal" : " ") +
        (props.color === "blue" ? "bg-blue" : " ") +
        (props.color === "maroon" ? "bg-maroon" : "")
      }
    >
      <div className="text-6xl text-white">{props.title}</div>
      <div className="text-xl text-white text-center font-light mt-4 w-2/3">
        {props.subtitle}
      </div>
    </div>
  );
}
