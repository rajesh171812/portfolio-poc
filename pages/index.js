import Head from "next/head";
import React, { useEffect } from "react";
import BlueBanner from "../components/blueBanner";
import Card from "../components/card";
import SimpleCard from "../components/simpleCard";
import GrayHeading from "../components/grayHeading";
import BlueHeading from "../components/blueHeading";
import RegularParagraph from "../components/regularParagraph";
import Link from "next/link";
export default function Home() {
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
    // debounce(checkSlide)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

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
            backgroundImage: `url(http://unsplash.it/1300/250)`,
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
                <img
                  src="http://unsplash.it/400/500"
                  className="slide-in left opacity-0 transform transition-all -translate-x-10"
                />
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
        <div>
          <Link href="/searchProject">
              <div className="my-5 text-center text-sans cursor-pointer">Search Project ></div>
          </Link>
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
