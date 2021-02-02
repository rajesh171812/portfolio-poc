import React from "react";
import Link from "next/link";

export default function Work(props) {
    return (
        <div>
            <Link href="/ipitch">
                <div className="my-5 text-center text-sans cursor-pointer">
                    Ipitch >
                </div>
            </Link>
            <Link href="/searchProject">
                <div className="my-5 text-center text-sans cursor-pointer">
                    Search Project >
                </div>
            </Link>
        </div>
    );
}
