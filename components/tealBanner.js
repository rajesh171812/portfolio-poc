import React from "react";

export default function TealBanner(props) {
    return (
        <div className="mt-36 mb-28 h-72 flex flex-col items-center justify-center font-sans font-bold bg-teal text-teal">
            <div className="text-6xl text-white">{props.title}</div>
            <div className="text-xl text-white text-center font-light mt-4 w-2/3">{props.subtitle}</div>
        </div>
    );
}
