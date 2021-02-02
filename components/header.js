import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-row justify-center p-8 bg-blue-800 font-sans">
            <div className="mx-4 text-xl text-white">
                <Link href="/work">
                    <div className="text-sans cursor-pointer">
                        Work
                    </div>
                </Link>
            </div>
            <div className="mx-4 text-xl text-white">
                <Link href="/about">
                    <div className="text-sans cursor-pointer">
                        About
                    </div>
                </Link>
            </div>
            <div className="mx-4 text-xl text-white">
                <Link href="/contact">
                    <div className="text-sans cursor-pointer">
                        Contact
                    </div>
                </Link>
            </div>
            <div className="mx-4 text-xl text-white">
                <Link href="/resume">
                    <div className="text-sans cursor-pointer">
                        Resume
                    </div>
                </Link>
            </div>
        </div>
    );
}
