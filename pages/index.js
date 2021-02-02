import Head from "next/head";
import React from "react";
import Work from "./work";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Rajesh Revoor</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <footer>
        <div className="m-4 font-sans text-center">
          Rajesh Revoor designs<span>&#174;</span>
        </div>
      </footer>
    </div>
  );
}
