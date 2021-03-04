import Head from "next/head";
import React, { useEffect, useState } from "react";
import BlueBanner from "../components/blueBanner";
import Card from "../components/card";
import SimpleCard from "../components/simpleCard";
import GrayHeading from "../components/grayHeading";
import BlueHeading from "../components/blueHeading";
import RegularParagraph from "../components/regularParagraph";
import Link from "next/link";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import ScrollToTop from "../components/scrollToTop";
import ProjectHeader from "../components/projectHeader";
import TealHeading from "../components/tealHeading";
import TealBanner from "../components/tealBanner";
import TealHeading2 from "../components/tealHeading2";
import BlackSubHeading from "../components/blackSubHeading";
import TealDivider from "../components/tealDivider";
export default function Ipitch() {
  // function debounce(func, wait = 20, immediate = true) {
  //   console.log("in debounce");
  //   let timeout;
  //   return function() {
  //     const context = this,
  //         args = arguments;
  //     const later = function () {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     const callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // }
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 800) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 800) {
      setShowScroll(false);
    }
  };

  function checkSlide() {
    const sliderImages = document.querySelectorAll(".slide-in");
    sliderImages.forEach((sliderImage) => {
      // halfway through the image
      const slideInAt =
        window.scrollY + window.innerHeight - sliderImage.height / 2;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.remove("opacity-0");
        sliderImage.classList.add("delay-100");
        sliderImage.classList.contains("left")
          ? sliderImage.classList.remove("-translate-x-10")
          : sliderImage.classList.remove("translate-x-10");
      } else {
        sliderImage.classList.contains("left")
          ? sliderImage.classList.add("-translate-x-10")
          : sliderImage.classList.add("translate-x-10");
        sliderImage.classList.add("opacity-0");
      }
    });

    const cards = document.querySelectorAll(".card-appear");
    cards.forEach((card, index) => {
      const cardHeight = card.classList.contains("simple-card") ? 300 : 200;
      // halfway through the card
      const slideInAt = window.scrollY + window.innerHeight - cardHeight / 2;
      // bottom of the card
      const cardBottom = card.offsetTop + cardHeight;
      const isHalfShown = slideInAt > card.offsetTop;
      const isNotScrolledPast = window.scrollY < cardBottom;
      const durationValue = "duration-" + 100 * Math.floor(Math.random() * 7);
      if (isHalfShown && isNotScrolledPast) {
        card.classList.add("transition-all");
        card.classList.add("ease-in");
        card.classList.add("delay-500");
        card.classList.add(durationValue);
        card.classList.remove("translate-y-10");
        card.classList.remove("opacity-0");
      } else {
        card.classList.add("opacity-0");
        card.classList.add("translate-y-10");
      }
    });
  }

  const handleScroll = () => {
    checkSlide();
    checkScrollTop();
    // debounce(checkSlide)
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
                  src="/Casestudy_BE/Casestudy_profilepic.svg"
                  alt="Business Edge"
                  className="object-center"
                />
              </Link>
            </div>
            <ProjectHeader
              projectTitle="Ipitch"
              projectDescription="An application which helps to increase productivity for sales team"
              projectImageUrl="/Casestudy_IPitch/Casestudy2_Header_1.svg"
            />
          </div>
          <div className="col-span-1"></div>
        </div>

        <div className="grid grid-cols-6 gap-4 font-serif">
          <div className="col-span-1"></div>
          <div className="col-span-4 mt-24 text-6xl">
            <RegularParagraph content="One of the top 100 pharma companies approached Cognizant, who’s a leading IT Software Development, to help them to solve the issues faced by their sales team. By building a digital solution that could provide a 360° view on their business and team members performance." />

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
              src="/Casestudy_IPitch/Casestudy2_Impact.svg"
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
                src="/Casestudy_IPitch/Casestudy2_Design_Process.svg"
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
              <TealDivider color="blue"></TealDivider>

              <TealHeading2 color="blue" headingTitle="Personas"></TealHeading2>
              <RegularParagraph
                color="blue"
                content="Based on the interviews, two main personals were identified:"
              />
              <div class="flex flex-col">
                <div className="mb-20">
                  <img
                    className="mr-1"
                    src="/Casestudy_IPitch/Casestudy2_Research_Persona_1.svg"
                    alt=""
                    className=""
                  />
                </div>

                <img
                  className="mr-1"
                  src="/Casestudy_IPitch/Casestudy2_Research_Persona_2.svg"
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        {/*Ideation*/}
        <TealBanner color="blue" title="Ideation"></TealBanner>

        {/*Solution*/}
        <TealBanner
          color="blue"
          title="Solution"
          subtitle="I displayed the solution to every pain point I found"
        ></TealBanner>

        {/*Testing*/}
        <TealBanner color="blue" title="Testing"></TealBanner>

        {/*Learning on entire project*/}
        <TealBanner color="blue" title="Learnings on entire project"></TealBanner>




        {/*old file starts*/}
        <div className="grid grid-cols-6 gap-4 mt-32 font-serif">
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
            <div className="flex flex-col lg:flex-row flex-wrap justify-between my-5">
              <div className="lg:max-w-1/4 card-appear transform translate-y-10">
                <Card
                  img="icon-copy.png"
                  imgAlt="Research"
                  eyebrow="Research"
                  title="Gain user insight and understand challenges. Look for ideas."
                />
              </div>
              <div className="lg:max-w-1/4 card-appear transform translate-y-10">
                <Card
                  img="icon-copy.png"
                  imgAlt="Ideation"
                  eyebrow="Ideation"
                  title="Gain ideas and sketch design and user flows."
                />
              </div>
              <div className="lg:max-w-1/4 card-appear transform translate-y-10">
                <Card
                  img="icon-copy.png"
                  imgAlt="Design"
                  eyebrow="Design"
                  title="Craft the brand, the message and interface."
                />
              </div>
              <div className="lg:max-w-1/4 card-appear transform translate-y-10">
                <Card
                  img="icon-copy.png"
                  imgAlt="User Testing"
                  eyebrow="User Testing"
                  title="Get User feedback and iterate."
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
            <div className="flex flex-col lg:flex-row flex-wrap justify-between my-5">
              <div className="lg:max-w-1/3 card-appear simple-card">
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
              <div className="lg:max-w-1/3 card-appear simple-card">
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
              <div className="lg:max-w-1/3 card-appear simple-card">
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
            <BlueHeading headingTitle="Accessing information in a single tap." />
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
              <div className="col-span-1 lg:col-span-3">
                <RegularParagraph
                  content="With a single tap, the user will be able to
                  access the summary view of the
                  required information. On further clicking,
                  the user will be taken to the detailed
                  information. "
                />
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-1 lg:col-span-4">
                <img
                  src="http://unsplash.it/400/450"
                  className="slide-in right opacity-0 transform transition-all translate-x-10"
                />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        <div className="grid grid-cols-6 gap-4 font-serif">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <BlueHeading headingTitle="Appointment organizer." />
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
              <div className="col-span-1 lg:col-span-4">
                <div>
                  <img
                    src="http://unsplash.it/400/500"
                    className="slide-in left opacity-0 transform transition-all -translate-x-10"
                  />
                  <div className="absolute h-50 w-50 top-0 right-0">
                    <img
                      src="/arrowdot.jpg"
                      className="left opacity-0 transform transition-all -translate-x-10"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-1 lg:col-span-3">
                <RegularParagraph
                  content="A simple timeline view of the days for a given month
                    which prioritises the upcoming/past appointments/
                    meeting events, coupled with a collapsible calendar
                    dropdown with a “heat map” view to show which
                    days are busy and which are free, in a quick glance."
                />
                <div className="my-5">
                  <RegularParagraph
                    content="Creation of sales meetings/appointments with
                    feature to maintain mail-based communication to
                    fetch meeting data from it and create event with a
                    single tap "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>

        <div className="grid grid-cols-6 gap-4 font-serif">
          <div className="col-span-1"></div>
          <div className="col-span-4 text-lg">
            <BlueHeading headingTitle="Before/After" />
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-5">
              <div className="col-span-1 lg:col-span-3">
                <RegularParagraph content="Scroll to see the before/after changes" />
              </div>
              <div className="col-span-1"></div>
              <div className="col-span-1 lg:col-span-4">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src="http://unsplash.it/400/450"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="http://unsplash.it/400/500"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}
