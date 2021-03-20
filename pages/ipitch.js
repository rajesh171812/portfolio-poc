import React, {useEffect, useState} from "react";
import RegularParagraph from "../components/regularParagraph";
import Link from "next/link";
import ScrollToTop from "../components/scrollToTop";
import ProjectHeader from "../components/projectHeader";
import TealHeading from "../components/tealHeading";
import TealBanner from "../components/tealBanner";
import TealHeading2 from "../components/tealHeading2";
import BlackSubHeading from "../components/blackSubHeading";
import TealDivider from "../components/tealDivider";

export default function Ipitch() {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 800) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 800) {
      setShowScroll(false);
    }
  };

  const handleScroll = () => {
    checkScrollTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="bg-white text-black">
      <div style={{ display: showScroll ? "flex" : "none" }}>
        <ScrollToTop />
      </div>
      <div className="">
        <div
          className="mb-6 grid grid-cols-10 gap-4 bg-fixed font-sans"
          style={{
            backgroundImage: `url(/Casestudy_IPitch/Casestudy2_Header.svg)`,
            backgroundPosition: "-500px -200px",
            backgroundSize: "cover",
          }}
        >
          <div className="col-span-1"></div>
          <div className=" col-span-8 my-10 text-white">
            <div className="cursor-pointer">
              <Link href="/work">
                <img
                  src="/Casestudy_BE/Casestudy_back_arrow.svg"
                  alt="Business Edge"
                  className="object-center"
                />
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="pt-40">
                <div className="mb-7 text-6xl font-sans font-bold text-white">
                  Pitch
                </div>
                <div className="md:w-3/4 text-2xl font-serif font-light">
                  An application which helps to increase productivity for sales team
                </div>
              </div>
              <div className="mt-10 -mb-10">
                <img src="/Casestudy_IPitch/Casestudy2_Header_1.svg" alt="Business Edge" className="" />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        <div className="grid grid-cols-6 gap-4 font-serif">
          <div className="col-span-1"></div>
          <div className="col-span-4 mt-24 text-6xl">
            <RegularParagraph content="One of the top 100 pharma companies approached to solve the issues faced by their sales team. By building a digital solution that could provide a 360° view on their business and team members performance." />

            <TealHeading headingTitle="Business Problem" color="blue" />
            <RegularParagraph content="- Losing the market share." />
            <RegularParagraph content="- Decreasing productivity from the sales team." />
            <RegularParagraph content="- No new business." />
            <RegularParagraph content="- Losing credibility from the existing customers" />
            <RegularParagraph content="- Collaboration is missing between cross functional teams." />
            <RegularParagraph content="- Unable to meet any reasonable annual targets." />
            <RegularParagraph content="- Unable to perform on par with the competitors." />

            <TealHeading headingTitle="What’s my role?" color="blue" />
            <RegularParagraph
              content="Being a lead UX consultant, specialised in Product Strategy, Design and UX. My role was to apply Human Centered Design methods to a project with immense technical focus and to provide valuable insights from user research to help build a solution that would take into account the complexity of everyday business cases and real user needs."
              color="blue"
            />
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Full size before after*/}
        <div className="my-36 py-16 grid grid-cols-6 gap-4 bg-blue">
          <div className="col-span-6 m-auto">
            <img
              src="/Casestudy_IPitch/Casestudy2_Impact.jpg"
              alt="IPitch"
              className="object-center"
            />
          </div>
        </div>

        {/*The design process*/}
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <div className="text-center text-3xl md:text-6xl text-blue font-bold">
              The design process
            </div>
            <div className="mt-24">
              <img
                src="/Casestudy_IPitch/Casestudy2_Design_Process.jpg"
                alt="process"
                className="m-auto"
              />
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Research*/}
        <TealBanner
          color="blue"
          title="Research"
          subtitle="Without  any presumptions in mind and we went on the field in an exploration mode. All we wanted to understand was the sales team’s domain by revealing layer by layer from their basic activity levels and how was their sales process and sales person in their daily activity."
        ></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading2
              color="blue"
              headingTitle="Contextual enquiry"
            ></TealHeading2>
            <RegularParagraph content="- We had selected over 20+ people at their workplace." />
            <RegularParagraph content="- Started asking them with open-ended questions, this enabled them to share 'a day in the life of' experiences." />
            <RegularParagraph content="- The sales team interviews yielded a gold mine of information. Many shared their daily struggles with the legacy application. In addition to the interviews, we also created a survey which was sent to the larger group." />
            <RegularParagraph content="- After asking “Why” and “Who else” multiple times, we were able to detect formerly unaddressed user groups" />
            <div className="mt-12">
              <div className="mt-12 grid grid-flow-col gap-4">
                <img
                  className="mr-1"
                  src="/Casestudy_IPitch/Casestudy2_Research_CE_1.svg"
                  alt=""
                  className=""
                />
                <img
                  src="/Casestudy_IPitch/Casestudy2_Research_CE_2.svg"
                  alt=""
                  className=""
                />
                <img
                  src="/Casestudy_IPitch/Casestudy2_Research_CE_3.svg"
                  alt=""
                  className=""
                />
              </div>
              <TealDivider color="blue"></TealDivider>
              <TealHeading2 color="blue" headingTitle="Survey"></TealHeading2>
              <RegularParagraph
                color="blue"
                content="Conducted a survey in a large group with the sales team across the country, and other users who were involved in the sales process."
              />
              <div className="mb-12 mt-9">
                <BlackSubHeading headingTitle="10 questions  | 54 responses"></BlackSubHeading>
              </div>
              <div className="mb-9">
                <BlackSubHeading headingTitle="Results summary:"></BlackSubHeading>
              </div>
              <div className="flex flex-col md:flex-row mt-12 mb-36">
                <div className="pl-12 pr-12 py-4 md:border-r border-headerLine">
                  <div className="font-sans font-bold text-6xl">60%</div>
                  <div className="font-serif text-xl">
                    Frequently missing their appointments
                  </div>
                </div>
                <div className="px-12 py-4 md:border-r border-headerLine">
                  <div className="font-sans font-bold text-6xl">55%</div>
                  <div className="font-serif text-xl">
                    Create and view monthly sales report{" "}
                  </div>
                </div>
                <div className="px-12 py-4 md:border-r border-headerLine">
                  <div className="font-sans font-bold text-6xl">80%</div>
                  <div className="font-serif text-xl">
                    Users very often updating marketing manually{" "}
                  </div>
                </div>
                <div className="pl-12 py-4">
                  <div className="font-sans font-bold text-6xl">60%</div>
                  <div className="font-serif text-xl">
                    Very often users will see customers details on the field
                  </div>
                </div>
              </div>
              <TealDivider color="blue"></TealDivider>
              <TealHeading2
                color="blue"
                headingTitle="Key Insights"
              ></TealHeading2>
              <RegularParagraph
                color="blue"
                content="We visited multiple client locations, observed the way the users are using the current application. Below are the commonly observed key data points we arrived at with all the interviews."
              />
              <RegularParagraph
                color="blue"
                content="- Users are unable to access customer details anytime anywhere."
              />
              <RegularParagraph
                color="blue"
                content="- Users are accessing multiple applications to complete sales tasks."
              />
              <RegularParagraph
                color="blue"
                content="- They find difficulty in communicating with other teams and in seeing the stats of sales progress."
              />
              <RegularParagraph
                color="blue"
                content="- Users Lack of consolidated data on sales achievements, generation reports are not user-friendly and due to which they are unable to accurately predict next year sales targets."
              />
              <RegularParagraph
                color="blue"
                content="The salesman feels that there is no clarity on “Schedule for the day” and the internet connectivity is a great issue when the salesperson is on the field to download the updated product catalog."
              />

            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Ideation*/}
        <TealBanner color="blue" title="Analysis"></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">


          <TealHeading2 color="blue" headingTitle="Personas"></TealHeading2>
                        <RegularParagraph
                          color="blue"
                          content="Based on the interviews, two main personals were identified:"
                        />
                        <div class="flex flex-col">
                          <div className="mb-20">
                            <img
                              className=""
                              src="/Casestudy_IPitch/Casestudy2_Research_Persona_1.jpg"
                              alt=""
                              className=""
                            />
                          </div>

                          <img
                            className=""
                            src="/Casestudy_IPitch/Casestudy2_Research_Persona_2.jpg"
                            alt=""
                            className=""
                          />
                        </div>

                        <TealDivider color="blue"></TealDivider>


            <TealHeading2
              color="blue"
              headingTitle="Root cause analysis"
            />


            <div className="mt-12">
              <img
                className=""
                src="/Casestudy_IPitch/Casestudy2_Analysis_RCA.svg"
                alt=""
                className="m-auto"
              />
            </div>
            <TealDivider color="blue"></TealDivider>

            <div className="grid grid-flow-col gap-10">
              <div>
                <TealHeading2 color="blue" headingTitle="Prioritization Matrix"/>
                <RegularParagraph content="After identifying the user pain-points, we went in for a discussion with business to prioritize the issues." />
                <div className="mt-2">
                  <RegularParagraph content="Following this, I worked on my own UX prioritization by categorizing issues as easy and hard to fix" />
                </div>
                <div className="mt-20 mb-9">
                  <RegularParagraph content="1. Accessing customer details" />
                  <RegularParagraph content="2. Organizing daily schedule" />
                  <RegularParagraph content="3. Accessing Marketing Collaterals" />
                  <RegularParagraph content="4. Generating & Customize Reports" />
                  <RegularParagraph content="5. Product Demo" />
                  <RegularParagraph content="6. Collaterals Customization" />
                  <RegularParagraph content="7. Order Tracking" />
                </div>
              </div>
              <div>
                <img
                  className=""
                  src="/Casestudy_IPitch/Casestudy2_Analysis_Prioritization_Matrix.jpg"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Solution*/}
        <TealBanner
          color="blue"
          title="Solution"
          subtitle="I displayed the solution to every pain point I found"
        ></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading2
              color="blue"
              headingTitle="Accessing information in a single tap"
            ></TealHeading2>
            <img
              className=""
              src="/Casestudy_IPitch/Casestudy2_Solution_Accessing_Info.svg"
              alt=""
              className=""
            />
            <TealDivider color="blue"></TealDivider>
            <TealHeading2 color="blue" headingTitle="Appointment organizer" />
            <img
              className=""
              src="/Casestudy_IPitch/Casestudy2_Solution_Appointment.svg"
              alt=""
              className=""
            />
            <TealDivider color="blue"></TealDivider>
            <TealHeading2
              color="blue"
              headingTitle="Central Repository of Marketing Collaterals and playing demo"
            />
            <RegularParagraph content="The collaterals were not available offline and accessing an updated version was a cumbersome process. Therefore, as part of the updated application, I built a central repository of marketing collaterals. Now the sales team can access to the latest collaterals at all times and accessing them was a breeze." />
            <img
              className=""
              src="/Casestudy_IPitch/Casestudy2_Solution_Central_Repository.svg"
              alt=""
              className=""
            />
            <TealDivider color="blue"></TealDivider>
            <TealHeading2 color="blue" headingTitle="Reporting" />
            <RegularParagraph content="Many of the Sales Heads & Managers spent a lot of time generating their daily reports. The current application did not allow users to visualize data in various forms. When I spoke to the sales team, the ability to generate reports quickly emerged as a critical feature." />
            <img
              className=""
              src="/Casestudy_IPitch/Casestudy2_Solution_Reporting.svg"
              alt=""
              className=""
            />
            <div className="grid grid-flow-col gap-10 w-2/3 m-auto mt-12">
              <div className="flex justify-content-center">
                <img
                  className=""
                  src="/Casestudy_IPitch/Casestudy2_Solution_Reporting_Icon.svg"
                  alt=""
                  className=""
                />
              </div>
              <RegularParagraph content="Now the Sales Head’s have also got additional functionality to customize a report according to their requirements. The reports are available offline too, which would  help the team to access the data any time and anywhere." />
            </div>
            <TealDivider color="blue"></TealDivider>
            <TealHeading2
              color="blue"
              headingTitle="AI Sales insights"
            ></TealHeading2>
            <img
              className=""
              src="/Casestudy_IPitch/Casestudy2_Solution_AI_Sales.svg"
              alt=""
            />
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Testing*/}
        <TealBanner color="blue" title="Testing"></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <div className="grid grid-flow-col gap-10">
              <div>
                <TealHeading2 color="blue" headingTitle="Usability Testing" />
                <RegularParagraph content="We created a test plan for users to complete their consecutive tasks on the high fidelity prototype.  We’ve gained the following insights: Completion time, heat maps, video recordings, user flows and direct/indirect success." />
                <div className="mt-20 mb-9">
                  <img
                    className=""
                    src="/Casestudy_IPitch/Casestudy2_Usabilitytesting_Usericon.svg"
                    alt=""
                  />
                  <div className="mt-4">
                    <RegularParagraph content="- 9 people participated in the Usability Testing." />
                    <RegularParagraph content="- 3 Sales Managers / 4 Sales Associates." />
                    <RegularParagraph content="- Age 35 -55." />
                  </div>
                </div>
              </div>
              <div className="mt-12 grid grid-flow-row gap-4">
                <img
                  className=""
                  src="/Casestudy_IPitch/Casestudy2_Testing.jpg"
                  alt=""
                />
                <div className="flex flex-col md:flex-row justify-between mt-12 mb-36">
                  <div className="md:pr-10">
                    <div className="font-sans font-bold text-6xl">85%</div>
                    <div className="font-serif text-xl">
                      Test completion rate
                    </div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-6xl">90%</div>
                    <div className="font-serif text-xl">
                      Smooth and easy experience
                    </div>
                  </div>
                  <div>
                    <div className="font-sans font-bold text-6xl">95%</div>
                    <div className="font-serif text-xl">
                      Users are willing to use this app
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Learning on entire project*/}
        <TealBanner
          color="blue"
          title="Learnings on entire project"
        ></TealBanner>
        <div className="mb-36">
          <img
            className="m-auto"
            src="/Casestudy_IPitch/Casestudy2_Learnings.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
