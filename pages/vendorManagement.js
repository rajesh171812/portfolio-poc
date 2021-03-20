import React, { useEffect, useState } from "react";
import RegularParagraph from "../components/regularParagraph";
import Link from "next/link";
import ScrollToTop from "../components/scrollToTop";
import ProjectHeader from "../components/projectHeader";
import TealHeading from "../components/tealHeading";
import TealBanner from "../components/tealBanner";
import TealHeading2 from "../components/tealHeading2";
import BlackSubHeading from "../components/blackSubHeading";
import TealDivider from "../components/tealDivider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function VendorManagement() {
  const [showScroll, setShowScroll] = useState(false);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
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
            backgroundImage: `url(/Casestudy_VMO/Casestudy3_Header.svg)`,
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
              <div className="pt-20">
                <div className="mb-7 text-6xl font-sans font-bold text-white">
                  Vendor Management
                </div>
                <div className="md:w-3/4 text-2xl font-serif font-light">
                  Transformation of legacy process into
                  digital process
                </div>
              </div>
              <div className="mt-10 ml-24 md:-mt-5">
                <img
                  src="/Casestudy_VMO/Casestudy3_Header_1.svg"
                  alt="mac"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        <div className="grid grid-cols-6 gap-4 font-serif">
          <div className="col-span-1"></div>
          <div className="col-span-4 mt-24 text-6xl">
            <RegularParagraph content="One of the largest retail bank in Newyork, USA went through a massive digital transformation. They’ve completely reinvented their 10-year-old existing manual process in managing their resourcing technology partners." />

            <TealHeading headingTitle="About this application" color="maroon" />
            <RegularParagraph content="This application will allow the Organization’s vendor management team to interact with their IT service consulting businesses and other small consultants to identify technical talent for their IT projects." />
            <RegularParagraph content="This retail bank owned staffing requirements for around 60% of their consultants across the globe. While managing the IT services, vendors were the main focus of this application which had many more associated modules like allocation, Invoice status and onboarding." />

            <TealHeading headingTitle="Business Problem" color="maroon" />

            <RegularParagraph content="- In this existing scenario, there was no system in place to facilitate interaction between the Project Manager / Finance team & IT Consultant companies. Over 6 teams were involved in completing a consultant’s hiring and on-boarding process." />
            <RegularParagraph content="- The organization found that each project team hired technical consultants as per requirement with no thought towards budgeting." />
            <RegularParagraph content="- In addition, consultant’s hourly rates differed from project to project, even for resources with the same experience and skill-set. This reduced their profits and resulted in difficulty to handle the skilled resources." />

            <RegularParagraph content="Therefore, the bank wanted to streamline the entire consultant resource management process by creating a new team called Vendor Management Resources." />

            <TealHeading headingTitle="The Goal" color="maroon" />
            <RegularParagraph content="-  Develop a single responsive application that needs to transform the manual process into a digital process." />
            <RegularParagraph content="-  Reduce the workload of Project managers & vendors." />
            <RegularParagraph content="-  Reduce the number of manual and unwanted steps in this process." />
            <RegularParagraph content="-  Increase the internal resources productivity by automating the onboarding and Invoices process." />
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Full size before after*/}
        <div className="mt-36 mb-10 pt-16 grid grid-cols-6 gap-4 bg-maroon">
          <div className="col-span-6 m-auto">
            <img
              src="/Casestudy_VMO/Casestudy3_Impact.jpg"
              alt="IPitch"
              className="object-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading headingTitle="My Role" color="maroon" />
            <RegularParagraph content="I played a part as a Lead Experience Designer in this project. As a lead, I owned the stakeholder meetings and intensely collaborated with the clients through this application development." />
            <div className="mt-9 font-serif leading-7 text-base text-black">
              <span className="font-bold">Other Team members:</span>
              <span> UI Designer / BA / Copywriter / Researcher</span>
            </div>
            <div className="mt-28 font-sans font-bold text-4xl text-center">
              It was a great opportunity for me to work on an enterprise-level
              issue and build a single application that fulfilled requirements
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Research*/}
        <TealBanner color="maroon" title="Research"></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading2
              color="maroon"
              headingTitle="Evaluating existing process on process documents."
            ></TealHeading2>
            <RegularParagraph content="- Onboarding the IT Consultant associate." />
            <RegularParagraph content="- IT Services invoice submissions on a monthly basis and its approval process." />
            <RegularParagraph content="- Managing IT consultant associates allocation project to project." />

            <TealDivider color="maroon"></TealDivider>

            <TealHeading2
              color="maroon"
              headingTitle="Meeting with Internal users who are involved in this process"
            ></TealHeading2>
            <RegularParagraph content="IT Head / Finance (Payment & Invoices Team) / Application Owners / Human Resources team / Security & Background Verification team."></RegularParagraph>
            <div className="mt-12">
              <img
                className="mr-1"
                src="/Casestudy_VMO/Casestudy3_Research_Meeting.jpg"
                alt=""
                className=""
              />
            </div>
            <TealDivider color="maroon"></TealDivider>

            <TealHeading2
              color="maroon"
              headingTitle="Key Insights"
            ></TealHeading2>
            <RegularParagraph content="-  Identifying and formalizing the process" />
            <RegularParagraph content="-  Multiple applications and manual processing to complete a single on-boarding." />
            <RegularParagraph content="-  Lack of technology to automate clerical tasks." />
            <RegularParagraph content="-  Multiple teams lead to duplication of efforts." />
            <RegularParagraph content="-  Lots of admin staff are involved in this process." />

            <TealDivider color="maroon" />

            <TealHeading2
              color="maroon"
              headingTitle="Competitive Analysis"
            ></TealHeading2>
            <RegularParagraph content="I chose to approach the solution with a competitive analysis. My research was based on how the competitors are addressing these issues. These analyses helped me understand how to integrate multiple processes into one single application. In addition, all of this information was interconnected with all modules."></RegularParagraph>
            <div className="mt-9 mb-12">
              <RegularParagraph content="-  What are the advantages in the competitors’ customer experience?" />
              <RegularParagraph content="-  What makes their users struggle?" />
              <RegularParagraph content="-  How do they position themselves in the market?" />
            </div>

            <BlackSubHeading headingTitle="Main products in market:"></BlackSubHeading>
            <div className="mt-9">
              <img
                src="/Casestudy_VMO/Casestudy3_Research_Competitive_Analysis.svg"
                alt=""
              />
            </div>
            <TealDivider color="maroon"></TealDivider>

            <TealHeading2 color="maroon" headingTitle="Personas"></TealHeading2>
            <RegularParagraph content="For the launch of Vendor management we focussed on three main target audiences:" />
            <div className="mt-12">
              <div class="flex flex-col">
                <div className="mb-24">
                  <img
                    className=""
                    src="/Casestudy_VMO/Casestudy3_Research_Persona_1.jpg"
                    alt=""
                  />
                </div>
                <div className="mb-24">
                  <img
                    className=""
                    src="/Casestudy_VMO/Casestudy3_Research_Persona_2.jpg"
                    alt=""
                  />
                </div>
                <img
                  className=""
                  src="/Casestudy_VMO/Casestudy3_Research_Persona_3.jpg"
                  alt=""
                />
              </div>
            </div>
            <TealDivider color="maroon"></TealDivider>
            <TealHeading2
              color="maroon"
              headingTitle="User flow for Create request flow"
            ></TealHeading2>
            <RegularParagraph content="I’ve created an onboarding flow diagram to map every step of the process interaction required to achieve the main goal of onboarding users in a digital way."></RegularParagraph>
            <div className="mt-12">
              <img
                className=""
                src="/Casestudy_VMO/Casestudy3_Research_User_Flow.svg"
                alt=""
              />
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Design*/}
        <TealBanner color="maroon" title="Design"></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading2
              color="maroon"
              headingTitle="Low-fidelity wireframes"
            ></TealHeading2>
            <RegularParagraph content="I’ve sketched each interaction and added the elements and screens that were necessary to reach users goals & quickly see which ideas worked best. I’ve developed the sketches into invision to build an interactive prototype and tested with some." />
            <div className="my-12">
              <BlackSubHeading headingTitle="Usability Test"></BlackSubHeading>
              <div className="mt-6">
                <RegularParagraph content="-  Tests were conducted with 7 users across different roles " />
                <RegularParagraph content="-  4 users for desktop & 3 users for mobile" />
                <RegularParagraph content="-  5 to 6 tasks given to each user according to their roles & responsibilities" />
              </div>
            </div>
            <div className="mb-12">
              <BlackSubHeading headingTitle="Findings"></BlackSubHeading>
              <div className="mt-6">
                <RegularParagraph content="-  Instead of showing the data in the numbers, the user expects to view in data visualization." />
                <RegularParagraph content="-  Easy access to find for project or associate information." />
                <RegularParagraph content="-  Users asked for the option to view “ongoing” and “approved” request filters." />
                <RegularParagraph content="-  Quickly share the visualization report to the management team." />
              </div>
            </div>
            <img
              className="m-auto"
              src="/Casestudy_VMO/Casestudy3_Design_Low_Wireframe.svg"
              alt=""
            />
            <TealDivider color="maroon"></TealDivider>
            <TealHeading2
              color="maroon"
              headingTitle="High-fidelity wireframes"
            />
            <RegularParagraph content="I’ve turned my revised sketches into black and white interactive prototypes done through a sketch software. I’ve defined UI elements, patterns and visual hierarchy. Also, tested the prototype over the remote usability testing." />
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              renderButtonGroupOutside={true}
              dotListClass="custom-dot-list-style"
              itemClass="pt-12 pb-16"
            >
              <div>
                <img
                  className="m-auto"
                  src="/Casestudy_VMO/Casestudy3_Design_High_Wireframe_1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="m-auto"
                  src="/Casestudy_VMO/Casestudy3_Design_High_Wireframe_2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="m-auto"
                  src="/Casestudy_VMO/Casestudy3_Design_High_Wireframe_3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="m-auto"
                  src="/Casestudy_VMO/Casestudy3_Design_High_Wireframe_4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="m-auto"
                  src="/Casestudy_VMO/Casestudy3_Design_High_Wireframe_5.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="m-auto"
                  src="/Casestudy_VMO/Casestudy3_Design_High_Wireframe_6.jpg"
                  alt=""
                />
              </div>
            </Carousel>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Learning on entire project*/}
        <TealBanner
          color="maroon"
          title="Learnings on entire project"
        ></TealBanner>
        <div className="mb-36">
          <img
            className="m-auto"
            src="/Casestudy_VMO/Casestudy3_learnings.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
