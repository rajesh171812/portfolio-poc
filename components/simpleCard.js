import React from "react";

export default function SimpleCard(props) {
    return (
        <div className="min-h-full p-4 shadow-lg">
            <img
                className="rounded my-0 mx-auto"
                src={props.img}
                alt={props.imgAlt}
            />
            <div className="my-2">
                <div>
                    <div className="text-center font-serif">{props.title}</div>
                </div>
            </div>
        </div>
    );
}
