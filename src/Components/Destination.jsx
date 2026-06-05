import { useState } from "react";
import Header from "./Header";

import MoonImg from "../assets/destination/image-moon.png";
import MarsImg from "../assets/destination/image-mars.png";
import EuropaImg from "../assets/destination/image-europa.png";
import TitanImg from "../assets/destination/image-titan.png";

const destinations = [
  {
    id: 1,
    img: MoonImg,
    name: "MOON",
    info: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travelTime: "3 days",
  },
  {
    id: 2,
    img: MarsImg,
    name: "MARS",
    info: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 mil. km",
    travelTime: "9 months",
  },
  {
    id: 3,
    img: EuropaImg,
    name: "EUROPA",
    info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travelTime: "3 years",
  },
  {
    id: 4,
    img: TitanImg,
    name: "TITAN",
    info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travelTime: "7 years",
  },
];

const fadeInClass = "opacity-0 animate-[fade-in_1s_ease-out_forwards]";

const Destination = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = useState("MOON");

  const currentDestination = destinations.find(
    (dest) => dest.name === activeTab,
  );

  const { img, name, info, distance, travelTime } = currentDestination;

  return (
    <div className="destination-bg min-h-screen w-full text-white pb-12 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
      <Header setActivePage={setActivePage} />

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center md:gap-20">
        {/* Page Title */}
        <h2 className="my-4 md:ml-15 mb-10 md:mt-10 self-center text-lg uppercase tracking-widest md:text-xl lg:self-start">
          <span className="mr-3 font-bold opacity-25">01</span>
          Pick your destination
        </h2>

        <main className="flex w-full flex-col items-center justify-between gap-12 lg:flex-row lg:gap-60">
          {/* Planet Image */}
          <div className={`flex flex-1 justify-center ${fadeInClass}`}>
            <img
              src={img}
              alt={name}
              className="h-56 w-56 animate-[spin_100s_linear_infinite] object-contain sm:h-72 sm:w-72 lg:h-96 lg:w-96"
            />
          </div>

          {/* Destination Content */}
          <div className="flex flex-1 flex-col items-center max-w-md lg:items-start lg:text-left">
            {/* Tabs */}
            <div className="mb-6 flex gap-6 text-sm tracking-widest text-gray-400">
              {destinations.map(({ id, name: tabName }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(tabName)}
                  className={`cursor-pointer border-b-2 pb-2 uppercase transition-all hover:border-gray-400 hover:text-white ${
                    activeTab === tabName
                      ? "border-white text-white"
                      : "border-transparent"
                  }`}
                >
                  {tabName}
                </button>
              ))}
            </div>

            {/* Destination Details */}
            <div
              key={activeTab}
              className={`flex w-full flex-col items-center lg:items-start ${fadeInClass}`}
            >
              <h1 className="mb-4 font-serif text-6xl uppercase tracking-wide md:text-8xl">
                {name}
              </h1>

              <p className="w-full border-b border-gray-700 pb-8 text-sm leading-relaxed text-gray-300 md:text-base">
                {info}
              </p>

              {/* Stats */}
              <footer className="mt-6 flex w-full flex-col gap-8 text-center uppercase tracking-widest sm:flex-row sm:gap-16 lg:text-left">
                <div>
                  <span className="block text-xs text-gray-400">
                    Avg. distance
                  </span>
                  <span className="font-serif text-2xl">{distance}</span>
                </div>

                <div>
                  <span className="block text-xs text-gray-400">
                    Est. travel time
                  </span>
                  <span className="font-serif text-2xl">{travelTime}</span>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Destination;
