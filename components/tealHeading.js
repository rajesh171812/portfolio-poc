import React from "react";

export default function TealHeading(props) {
    return (
        <div className="mt-24 mb-4 text-3xl font-sans font-bold text-teal">
            {props.headingTitle}
        </div>
    );
}
