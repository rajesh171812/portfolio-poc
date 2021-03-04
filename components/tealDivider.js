import React from "react";

export default function TealDivider(props) {
  return (
    <div
      className={
        "m-auto text-center my-36 border-t-2 w-72 " +
        (props.color === "teal" ? "border-teal" : " ") +
        (props.color === "blue" ? "border-blue" : " ") +
        (props.color === "maroon" ? "border-maroon" : " ")
      }
    ></div>
  );
}
