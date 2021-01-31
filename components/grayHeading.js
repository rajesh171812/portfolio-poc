import React from "react";

export default function GrayHeading(props) {
    return (
        <div className="my-4 text-2xl font-bold font-sans text-gray-900">
            {props.headingTitle}
        </div>
    );
}
