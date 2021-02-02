import Head from "next/head";
import React from "react";
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
        TODO : change meta
        <meta
          name="description"
          content="Rajesh Revoor portfolio website"
        />
        <meta name="og:title" content="Rajesh Revoor" />
      </Head>
      <footer>
        <div className="fixed bottom-0 left-1/2 font-sans">
          Rajesh Revoor designs<span>&#174;</span>
        </div>
      </footer>
    </div>
  );
}
