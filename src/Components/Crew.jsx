import { useState } from "react";
import Header from "./Header";

import DouglasImg from "../assets/crew/image-douglas-hurley.png";
import MarkImg from "../assets/crew/image-mark-shuttleworth.png";
import VictorImg from "../assets/crew/image-victor-glover.png";
import AnoushehImg from "../assets/crew/image-anousheh-ansari.png";

const CREW_MEMBERS = [
  {
    id: 1,
    img: DouglasImg,
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer and former NASA astronaut. He is a veteran of two space shuttle missions and has logged over 1,000 hours in space.",
  },
  {
    id: 2,
    img: MarkImg,
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is a South African entrepreneur and the first African in space. He is a former CEO of Canonical and has been involved in various space exploration initiatives.",
  },
  {
    id: 3,
    img: VictorImg,
    name: "Victor Glover",
    role: "Pilot",
    bio: "Victor Glover is an American naval officer and pilot. He is a veteran of the U.S. Navy and has logged over 1,000 hours of flight time in various aircraft.",
  },
  {
    id: 4,
    img: AnoushehImg,
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian-American engineer and businesswoman. She is the first female Iranian in space and has been involved in various space exploration initiatives.",
  },
];

const Crew = ({ setActivePage }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCrew = CREW_MEMBERS[activeIndex];

  return (
    <div className="crew-bg flex min-h-screen w-full flex-col text-white animate-fade-in">
      <Header setActivePage={setActivePage} />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6">
        {/* Title */}
        <h2 className="my-6 text-center text-lg uppercase tracking-widest md:text-left md:text-xl">
          <span className="mr-3 font-bold opacity-25">02</span>
          Meet your crew
        </h2>

        <main className="flex flex-1 flex-col items-center gap-8 lg:flex-row lg:justify-between">
          {/* Content */}
          <div className="order-2 flex flex-1 flex-col items-center pb-8 text-center lg:order-1 lg:max-w-xl lg:items-start lg:justify-center lg:pb-0 lg:text-left">
            <div
              key={activeCrew.id}
              className="animate-fade-in flex flex-col items-center lg:items-start"
            >
              <h4 className="mb-2 font-serif text-xl uppercase text-gray-400 opacity-70 md:text-2xl lg:text-3xl">
                {activeCrew.role}
              </h4>

              <h1 className="mb-6 font-serif text-4xl uppercase tracking-wide md:text-6xl lg:text-7xl">
                {activeCrew.name}
              </h1>

              <p className="max-w-md text-sm leading-relaxed text-gray-300 md:text-base lg:max-w-lg">
                {activeCrew.bio}
              </p>
            </div>

            {/* Navigation Dots */}
            <div
              className="mt-12 flex gap-4"
              role="tablist"
              aria-label="Crew member selector"
            >
              {CREW_MEMBERS.map((crew, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={crew.id}
                    onClick={() => setActiveIndex(index)}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Go to crew member ${crew.name}`}
                    className={`h-4 w-4 rounded-full transition-all duration-300 hover:bg-gray-400 ${
                      isActive ? "bg-white" : "bg-gray-600"
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 flex w-full flex-1 items-center justify-center border-b border-gray-700 lg:order-2 lg:border-none">
            <img
              key={activeCrew.id}
              src={activeCrew.img}
              alt={activeCrew.name}
              className={`animate-slide-in object-contain
                h-80
                sm:h-105
                lg:h-125
                xl:h-137.5
                w-auto
                ${activeCrew.id === 2 ? "lg:h-112.5 xl:h-125" : ""}`}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Crew;
