import Head from "next/head";
import React from "react";

function Card(props) {
  return (
    <div className="p-8 shadow-lg">
      <img className="rounded text-center" src={props.img} alt={props.imgAlt} />
      <div className="mt-2">
        <div>
          <div className="text-xl text-gray-600 text-center text-bold font-sans">
            {props.eyebrow}
          </div>
          <div className="text-justify">{props.title}</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
      <div
        className="my-6 grid grid-cols-6 gap-4 bg-fixed font-sans"
        style={{
          backgroundImage: `url(/ipadbg.png)`,
          backgroundPosition: "-500px -200px",
          backgroundSize: "cover",
        }}
      >
        <div className="col-span-1"></div>
        <div className=" col-span-4 my-12 py-8 text-white">
          <div className="py-2 text-4xl text-bold">IPitch</div>
          <div className="text-3xl">
            An application which helps to increase productivity for sales team
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="grid grid-cols-6 gap-4 font-serif">
        <div className="col-span-1"></div>
        <div className="col-span-4 text-lg">
          <div className="">
            One of the top 100 pharma companies approached Cognizant, who’s a
            leading IT Software Development, to help them to solve the issues
            faced by their sales team. By building a digital solution that could
            provide a 360° view on their business and team members performance.
          </div>

          <div className="my-4 text-2xl font-bold font-sans text-gray-900">
            Business Problem
          </div>
          <div>
            <div>- Losing the market share.</div>
            <div>- Decreasing productivity from the sales team.</div>
            <div>- No new business.</div>
            <div>- Losing credibility from the existing customers</div>
            <div>
              - Collaboration is missing between cross functional teams.
            </div>
            <div>- Unable to meet any reasonable annual targets.</div>
            <div>- Unable to perform on par with the competitors.</div>
          </div>

          <div className="my-4 text-2xl font-bold font-sans text-gray-900">
            What’s my role?
          </div>
          <div>
            Being a lead UX consultant, specialised in Product Strategy, Design
            and UX. My role was to apply Human Centered Design methods to a
            project with immense technical focus and to provide valuable
            insights from user research to help build a solution that would take
            into account the complexity of everyday business cases and real user
            needs.
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="my-6 col-auto bg-blue-500 text-center font-sans">
        <div className="p-8 text-7xl text-white">
          Impact and Results Achieved
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 font-serif">
        <div className="col-span-1"></div>
        <div className="col-span-4 text-lg">
          <ul style={{ listStyleType: "disc" }}>
            <li>
              {" "}
              Sales team productivity increased to 60% by using iPitch
              application.
            </li>
            <li> New customers increased to 40% </li>
            <li> 60% of sales revenue increased</li>
            <li> 80% of operational cost reduced</li>
            <li>50% of IT cost reduced</li>
            <li>
              {" "}
              From 4 different applications, users have come to use a single
              application
            </li>
          </ul>
          <div className="flex flex-row flex-wrap justify-between my-5">
            <div className="max-w-1/4 m-2">
              <Card
                img="icon-copy.png"
                imgAlt="Research"
                eyebrow="Research"
                title="Gain user insight and understand challenges. Look for ideas"
                pricing="..."
              />
            </div>
            <div className="max-w-1/4">
              <Card
                img="icon-copy.png"
                imgAlt="Research"
                eyebrow="Research"
                title="Gain user insight and understand challenges. Look for ideas"
                pricing="..."
              />
            </div>
            <div className="max-w-1/4">
              <Card
                img="icon-copy.png"
                imgAlt="Research"
                eyebrow="Research"
                title="Gain user insight and understand challenges. Look for ideas"
                pricing="..."
              />
            </div>
            <div className="max-w-1/4">
              <Card
                img="icon-copy.png"
                imgAlt="Research"
                eyebrow="Research"
                title="Gain user insight and understand challenges. Look for ideas"
                pricing="..."
              />
            </div>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
      <footer>
        <div className="m-4 font-sans text-center">
          Rajesh Revoor designs<span>&#174;</span>
        </div>
      </footer>
    </div>
  );
}
