import React, {useEffect, useState} from "react";
import ScrollToTop from "../components/scrollToTop";
import RegularParagraph from "../components/regularParagraph";
import TealHeading from "../components/tealHeading";
import TealBanner from "../components/tealBanner";
import TealHeading2 from "../components/tealHeading2";
import TealDivider from "../components/tealDivider";
import BlackSubHeading from "../components/blackSubHeading";
import Link from "next/link";
import ProjectHeader from "../components/projectHeader";

export default function BusinessEdge() {
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
            backgroundImage: `url(/Casestudy_BE/Casestudy1_Header.svg)`,
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
            <ProjectHeader
              projectTitle="Firm Consultant's application"
              projectDescription="Re-designed consultant application"
              projectImageUrl="/Casestudy_BE/Casestudy1_Header_image.svg"
            />
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className="grid grid-cols-6 gap-4 font-serif">
          <div className="col-span-1"></div>
          <div className="col-span-4 mt-16 text-6xl">
            <RegularParagraph content="A hundred year-old Retirement Financial Services company from New York, USA with a global presence, (name not disclosed due to confidentiality purpose and hereafter referred to as Retirement Services Institution (RSI)) approached us to provide a solution for a consultant application." />
            <TealHeading headingTitle="Overview" color="teal" />
            <RegularParagraph
              content="Firm Consultant's application is an online experience designed for retirement advisors and consultants. Who manages the retirement plans. This platform uses Artificial Intelligence (AI) and data analytics to give third-party consultants a highly customized look at clients trends.  In addition its a responsive application which works on Desktop / Tablet & Mobile.
"
            />

            <TealHeading headingTitle="Business Problem" color="teal" />
            <div className="font-serif leading-7 text-base text-black">
              <div>
                -   Most of the consultants are not using this application in spite of providing most important  data and insights.
              </div>
              <div>
                -   The client was not able to get any new plan enrollments through this application.
              </div>
              <div>
                -   Consultants logging in to the platform was decreasing month on month.
              </div>
              <div>
                -   Current application experience is not intitutie for the users.
              </div>
              <div>
                -   At Present Insights and recommendations are not providing personalized data to the users.
              </div>

                <div>
                  - Regional sales managers (RSM) & Client serving managers (CSM) were receiving multiple calls from the firms instead of Customer Care.
                </div>
                <div>
                  - Upgrade the ADA standards
                </div>
              </div>

            <TealHeading headingTitle="What’s my role?" color="teal" />
            <RegularParagraph
              content="As the Lead UX Designer of this project, I’ve owned the stakeholder meetings and intensely collaborated with the clients to solve their business problems. Delivered 360-degree product experience  by presenting wireframes, concept models and designs. Suggested several new features to extend the functionality of the application. In addition, worked closely with scrum teams to provide design deliverables to development teams who were following the Agile process."
            />
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Full size before after*/}
        <div className="my-36 py-16 grid grid-cols-6 gap-4 bg-tealLight">
          <div className="col-span-6 m-auto">
            <img
              src="/Casestudy_BE/Casestudy1_Impact.svg"
              alt="Business Edge"
              className="object-center"
            />
          </div>
        </div>

        {/*Our Methodology*/}
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <div className="text-center text-3xl md:text-6xl text-teal font-bold">
              Our Methodology
            </div>
            <div className="mt-24">
              <img
                src="/Casestudy_BE/Casestudy1_process.svg"
                alt="process"
                className=""
              />
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Research*/}
        <TealBanner color="teal" title="Research"></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading2
              color="teal"
              headingTitle="Heuristic Evaluation"
            ></TealHeading2>
            <RegularParagraph content="Before diving deep into user interviews, I’ve evaluate the existing application with Heuristic principle to find out current usability issues (Navigation, presentation, content & Interaction) with the application. After the results were compiled, presented to the clients. We fixed some experience and design issues as a temporary solution." />
            <div className="mt-12">
              <img
                src="/Casestudy_BE/Casestudy1_Heuristic Evaluation_1@2x.jpg"
                alt="heuristic evaluation 1"
                className="m-auto"
              />
              <div className="mt-10 mb-4 text-center">
                <BlackSubHeading headingTitle="The key findings from the evaluation were:"></BlackSubHeading>
              </div>
              <div className="flex justify-center">
                <img
                  className="flex justify-center"
                  src="/Casestudy_BE/Casestudy1_Heuristic Evaluation_2@2x.jpg"
                  alt="heuristic evaluation 2"
                  className=""
                />
              </div>
              <TealDivider color="teal"></TealDivider>
              <TealHeading2
                color="teal"
                headingTitle="Web Analytics"
              ></TealHeading2>
              <RegularParagraph content="After heuristics evaluation, I’ve moved on to website behavior analytics. I was able to view the number of users logged in, how long they spent on each page, and how the users navigated and proceeded to other sections." />
              <div className="mt-12 grid grid-flow-col gap-4">
                <img
                  className="mr-1"
                  src="/Casestudy_BE/Casestudy1_Web_Analytics_1.svg"
                  alt="heuristic evaluation 1"
                  className=""
                />
                <img
                  src="/Casestudy_BE/Casestudy1_Web_Analytics_2.svg"
                  alt="heuristic evaluation 1"
                  className=""
                />
              </div>
              <TealDivider color="teal"></TealDivider>
              <TealHeading2
                color="teal"
                headingTitle="User Interviews"
              ></TealHeading2>
              <div className="grid grid-flow-col gap-10">
                <div>
                  <RegularParagraph content="We started organising the user interviews to understand the users motivations, behaviour and their pain points in using the application. We were able to put together a user group consisting 10 members which included the firm managers and consultant associates from top consulting firms, to know more about their view and usage of Firm Consultant's application. They brought us some screenshots where they were facing some issues with the current application and also some of the features samples used by the competitors in the market." />
                  <div className="mt-2">
                    <RegularParagraph content="They brought us some screenshots where they were facing some issues with the current application and also some of the features samples used by the competitors in the market." />
                  </div>
                  <div className="mt-20 mb-9">
                    <BlackSubHeading headingTitle="The key findings from the evaluation were:" />
                  </div>
                  <div>
                    <RegularParagraph content="1. There is no intuitive connection between clients and KPI tiles." />
                    <RegularParagraph content="2. Unable to request new client access to plans sponsors." />
                    <RegularParagraph content="3. No auto generated reports on a monthly basis." />
                    <RegularParagraph content="4. Performance dashboard which helps to have a healthy competition within the peers." />
                    <RegularParagraph content="5. Unable to provide access to the new users." />
                  </div>
                </div>
                <div className="grid grid-flow-row gap-4">
                  <img
                    src="/Casestudy_BE/Casestudy1_userinterview_1.jpg"
                    alt="Casestudy1_userinterview_1"
                    className=""
                  />
                  <img
                    src="/Casestudy_BE/Casestudy1_userinterview_2.jpg"
                    alt="Casestudy1_userinterview_2"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Analyse*/}
        <TealBanner color="teal" title="Analyse"></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading2
              color="teal"
              headingTitle="Feature Prioritisation"
            ></TealHeading2>
            <RegularParagraph content="Based on the problem statement and user research findings, we’ve shortlisted some important features that would address the pain points of the identified personas." />
            <div className="mt-12">
              <img
                src="/Casestudy_BE/Casestudy1_Feature_Prioritisation.svg"
                alt="heuristic evaluation 1"
                className="m-auto"
              />
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Design*/}
        <TealBanner color="teal" title="Design"></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading2 color="teal" headingTitle="Wireframes"></TealHeading2>
            <RegularParagraph content="With the selected features and pages, we created a High-fidelity prototype (invision clickable prototype)  and conducted formative usability tests with 6 participants." />
            <div className="mt-12 grid grid-flow-col gap-4">
              <img
                className="mr-1"
                src="/Casestudy_BE/Casestudy1_Wireframes_1.svg"
                alt="heuristic evaluation 1"
                className=""
              />
              <img
                src="/Casestudy_BE/Casestudy1_Wireframes_2.svg"
                alt="heuristic evaluation 1"
                className=""
              />
            </div>
            <div className="mb-4 mt-12">
              <BlackSubHeading headingTitle="Feedback from usability test"></BlackSubHeading>
            </div>
            <RegularParagraph content="1. Users found it difficult to interact with the clients dropdown." />
            <RegularParagraph content="2. Contact us button was not prominent." />
            <RegularParagraph content="3. Forecast charts data table was not provided." />
            <RegularParagraph content="4. The filters on reports could be more prominent." />
            <RegularParagraph content="5. Difficult in finding the Request for new client access." />
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Solution*/}
        <TealBanner
          color="teal"
          title="Solution"
          subtitle="Here is a comparison of the old app and proposed design. We have highlighted the different features that enhanced the usability and user experience of Firm Consultant's application."
        />
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading2
              color="teal"
              headingTitle="Dashboard redesign"
            ></TealHeading2>
            <RegularParagraph content="Feedback from users about the dashboard revealed that they found it difficult to find relevant information. Even though business gives important information to consultants  (for e.g. key performance indicator), the placement of related filter made it difficult for users to get that information." />
            <div className="mt-5">
              <RegularParagraph content="Now all important information has been reprioritized and displayed above the fold. All clients dropdown has been moved from the header to the KPI tiles." />
            </div>
            <div className="mt-12">
              <img
                src="/Casestudy_BE/Casestudy1_solution_dashboard_1.svg"
                alt="heuristic evaluation 1"
                className=""
              />
            </div>
            <TealDivider color="teal"></TealDivider>
            <TealHeading2 color="teal" headingTitle="KPI tiles"></TealHeading2>
            <RegularParagraph content="KPI means key performance indicators. These numbers provide overall information about their business performance in different segments. Each of the tiles gives more detailed information like investments, contributions etc,… Due to ignorance, most of the users failed to drill down to view these information earlier." />
            <div className="mt-12">
              <div className="mt-12 grid grid-flow-col gap-4">
                <img
                  className="mr-1"
                  src="/Casestudy_BE/Casestudy1_solution_KPI_1.svg"
                  alt="heuristic evaluation 1"
                  className=""
                />
                <img
                  src="/Casestudy_BE/Casestudy1_solution_KPI_2.svg"
                  alt="heuristic evaluation 1"
                  className=""
                />
              </div>
            </div>
            <TealDivider color="teal"></TealDivider>

            <TealHeading2 color="teal" headingTitle="Custom Reports" />
            <RegularParagraph content="Through user-feedback and analytical research, it has been revealed that most of the users were using the reports only on specific days and that too particularly at the end of each month to download their monthly reports. These reports can be formatted only via static templates. Users requested the option to create custom reports by selecting data columns, saving them, and using them as a template. Such custom reports helped the consultants present specific performance data to plan sponsors." />
            <div className="mt-12">
              <div className="mb-5 text-center font-serif font-light">
                Preview of the user to view what data elements have been
                selected.
              </div>
              <img
                src="/Casestudy_BE/Casestudy1_Report_1.svg"
                alt="Report"
                className="m-auto"
              />
            </div>
            <div className="mt-24">
              <div className="mb-5 text-center font-serif font-light">
                User is now able to realign or remove the order of the data
                table before creating the report.
              </div>
              <img
                src="/Casestudy_BE/Casestudy1_Report_2.svg"
                alt="Report"
                className="m-auto"
              />
            </div>
            <div className="mt-24">
              <div className="mb-5 text-center font-serif font-light">
                Users can now move the selected data elements also by using
                keyboard actions.
              </div>
              <img
                src="/Casestudy_BE/Casestudy1_Report_2.svg"
                alt="Report"
                className="m-auto"
              />
            </div>

            <TealDivider color="teal"></TealDivider>
            <TealHeading2 color="teal" headingTitle="Insights"></TealHeading2>
            <RegularParagraph content="With the help of the data science team, the consultants are now able to get additional insights about the business. This feature is helping them to landup in new business opportunities."></RegularParagraph>
            <div className="mt-12 grid grid-flow-col gap-4">
              <img
                className="mr-1"
                src="/Casestudy_BE/Casestudy1_solution_Insights_1.svg"
                alt="heuristic evaluation 1"
                className=""
              />
              <img
                src="/Casestudy_BE/Casestudy1_solution_Insights_2.svg"
                alt="heuristic evaluation 1"
                className=""
              />
            </div>
            <TealDivider color="teal"></TealDivider>

            <TealHeading2 color="teal" headingTitle="Contact Us"></TealHeading2>
            <div className="mt-12 grid grid-flow-col gap-4">
              <img
                className="mr-1"
                src="/Casestudy_BE/Casestudy1_solution_contact_1.jpg"
                alt="contact"
                className=""
              />
              <img
                src="/Casestudy_BE/Casestudy1_solution_contact_2.jpg"
                alt="contact"
                className=""
              />
            </div>
            <TealDivider color="teal"></TealDivider>

            <TealHeading2
              color="teal"
              headingTitle="Goals and performance (concept)"
            ></TealHeading2>
            <RegularParagraph content="During our research and discussion with business, we’ve noticed that the client wants to create multiple opportunities for the consultants to generate more business." />
            <div className="mt-12">
              <img
                src="/Casestudy_BE/Casestudy1_solution_goal.svg"
                alt="goal"
                className="m-auto"
              />
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*testing*/}
        <TealBanner color="teal" title="Testing"></TealBanner>
        <div className="mt-28 grid grid-cols-6 gap-4">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <TealHeading2 color="teal" headingTitle="Usability Testing" />
            <RegularParagraph content="We performed a final usability testing with 8 participants.  We have used qualitative and quantitative testing methods to evaluate the results. We’ve set a series of tasks for the participants, which included." />
            <div className="mt-12">
              <BlackSubHeading headingTitle="Tasks" />
              <RegularParagraph content="1. Create a custom report with a set of data tables." />
              <RegularParagraph content="2. Analyze datas for a particular client and plan." />
              <RegularParagraph content="3. Review goals and performance." />
            </div>
            <div className="flex flex-col md:flex-row mt-12 mb-36">
              <div className="pl-12 pr-12 py-4 md:border-r border-headerLine">
                <div className="font-sans font-bold text-6xl">8</div>
                <div className="font-serif text-xl">Participants</div>
              </div>
              <div className="px-12 py-4 md:border-r border-headerLine">
                <div className="font-sans font-bold text-6xl">87%</div>
                <div className="font-serif text-xl">Tasks were completed </div>
              </div>
              <div className="pl-12 py-4">
                <div className="font-sans font-bold text-6xl">100%</div>
                <div className="font-serif text-xl">
                  Of participants enjoyed this experience
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
