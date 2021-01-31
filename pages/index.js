import Head from "next/head";
import React from "react";

function Card(props) {
  return (
    <div className="min-h-full p-4 shadow-lg">
      <img className="rounded my-0 mx-auto" src={props.img} alt={props.imgAlt} />
      <div className="mt-2">
        <div>
          <div className="text-2xl text-gray-200 text-center text-bold font-sans">
            {props.eyebrow}
          </div>
          <div className="text-center font-serif">{props.title}</div>
        </div>
      </div>
    </div>
  );
}

function SimpleCard(props) {
  return (
    <div className="min-h-full p-4 shadow-lg">
      <img className="rounded my-0 mx-auto" src={props.img} alt={props.imgAlt} />
      <div className="my-2">
        <div>
          <div className="text-center font-serif">{props.title}</div>
        </div>
      </div>
    </div>
  );
}

function GrayHeading(props) {
  return (
    <div className="my-4 text-2xl font-bold font-sans text-gray-900">
      {props.headingTitle}
    </div>
  );
}

function RegularParagraph(props) {
  return <div className="">{props.content}</div>;
}
function BlueBanner(props) {
  return (
    <div className="my-6 p-8 col-auto bg-blue-500 text-center font-sans">
      <div className="text-7xl text-white">{props.title}</div>
      <div className="text-xl text-white">{props.subtitle}</div>
    </div>
  );
}

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
      <div className="">
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
            <RegularParagraph
              content=" One of the top 100 pharma companies approached Cognizant, who’s a
        leading IT Software Development, to help them to solve the issues
        faced by their sales team. By building a digital solution that
        could provide a 360° view on their business and team members
        performance."
            />
            <GrayHeading headingTitle="Business Problem" />
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

            <GrayHeading headingTitle="What’s my role?" />
            <RegularParagraph
              content=" Being a lead UX consultant, specialised in Product Strategy,
              Design and UX. My role was to apply Human Centered Design methods
              to a project with immense technical focus and to provide valuable
              insights from user research to help build a solution that would
              take into account the complexity of everyday business cases and
              real user needs."
            />
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Impacts And Results Achieved*/}
        <div className="my-6 col-auto bg-blue-500 text-center font-sans">
          <div className="p-8 text-7xl text-white">
            Impact and Results Achieved
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 font-serif">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <div>
              <div>
                - Sales team productivity increased to 60% by using iPitch
                application.
              </div>
              <div>- New customers increased to 40% </div>
              <div>- 60% of sales revenue increased</div>
              <div>- 80% of operational cost reduced</div>
              <div>- 50% of IT cost reduced</div>
              <div>
                - From 4 different applications, users have come to use a single
                application
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between my-5">
              <div className="max-w-1/4 m-2">
                <Card
                  img="icon-copy.png"
                  imgAlt="Research"
                  eyebrow="Research"
                  title="Gain user insight and understand challenges. Look for ideas."
                  pricing="..."
                />
              </div>
              <div className="max-w-1/4">
                <Card
                  img="icon-copy.png"
                  imgAlt="Ideation"
                  eyebrow="Ideation"
                  title="Gain ideas and sketch design and user flows."
                  pricing="..."
                />
              </div>
              <div className="max-w-1/4">
                <Card
                  img="icon-copy.png"
                  imgAlt="Design"
                  eyebrow="Design"
                  title="Craft the brand, the message and interface."
                  pricing="..."
                />
              </div>
              <div className="max-w-1/4">
                <Card
                  img="icon-copy.png"
                  imgAlt="User Testing"
                  eyebrow="User Testing"
                  title="Get User feedback and iterate."
                  pricing="..."
                />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Research*/}
        <BlueBanner
          title="Research"
          subtitle="Without any presumptions in mind and we went on the field in an exploration mode. All we wanted to understand was
the sales team’s domain by revealing layer by layer from their basic activity levels and how was their sales process
and sales person in their daily activity."
        />
        <div className="grid grid-cols-6 gap-4 font-serif">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <GrayHeading headingTitle="Contextual enquiry" />
            <div>
              <div>- We had selected over 20+ people at their workplace.</div>
              <div>
                - Started asking them with open-ended questions, this enabled
                them to share “a day in the life of” experiences.
              </div>
              <div>
                - The sales team interviews yielded a gold mine of information.
                Many shared their daily struggles with the legacy application.
                In addition to the interviews, we also created a survey which
                was sent to the larger group.
              </div>
              <div>
                - After asking “Why” and “Who else” multiple times, we were able
                to detect formerly unaddressed user groups
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-between my-5">
              <div className="max-w-1/3 m-2">
                <SimpleCard
                    img="icon-copy.png"
                    imgAlt="Smiley"
                    title="There is no clarity on the “Days
                    Schedule” as it has been
                    updated by our managers. By
                    the time I reach the office, I
                    completely miss the morning
                    appointment as I’ve no access
                    to the current interface outside
                    the office."
                />
              </div>
              <div className="max-w-1/3">
                <SimpleCard
                    img="icon-copy.png"
                    imgAlt="Smiley"
                    title="It’s not that easy to use
                  multiple interfaces for tracking
                  sales reports, appointments,
                  Target update reports,
                  downloading collaterals, goals
                  to be met etc. It would be
                  great if I could access all
                  these at one place. "
                />
              </div>
              <div className="max-w-1/3">
                <SimpleCard
                    img="icon-copy.png"
                    imgAlt="Smiley"
                    title="Unable to track the current
                status and predict the end of
                the year sales of the sales
                team. And understanding
                where I stand and where I
                have to improve is not
                available now. "
                />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Solution*/}
        <BlueBanner
          title="Solution"
          subtitle="I displayed the solution to every pain point I found:"
        />
        <div className="grid grid-cols-6 gap-4 font-serif">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">

          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <footer>
        <div className="m-4 font-sans text-center">
          Rajesh Revoor designs<span>&#174;</span>
        </div>
      </footer>
    </div>
  );
}
