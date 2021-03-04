import React from "react";

export default function TealHeading(props) {
  return (
    <div
      className={
        "mt-16 mb-4 text-3xl font-sans font-bold " +
        (props.color === "teal" ? "text-teal" : " ") +
        (props.color === "blue" ? "text-blue" : " ") +
        (props.color === "maroon" ? "text-maroon" : " ")
      }
    >
      {props.headingTitle}
    </div>
  );
}
