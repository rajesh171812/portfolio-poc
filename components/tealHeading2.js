import React from "react";

export default function TealHeading2(props) {
  return (
    <div
      className={
        "mb-4 text-3xl font-sans font-bold " +
        (props.color === "teal" ? "text-teal" : " ") +
        (props.color === "blue" ? "text-blue" : " ") +
        (props.color === "maroon" ? "text-maroon" : " ")
      }
    >
      {props.headingTitle}
    </div>
  );
}
