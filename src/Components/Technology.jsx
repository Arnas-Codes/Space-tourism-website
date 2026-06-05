import { useState } from "react";
import Header from "./Header";
import LaunchVehicleImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceportImg from "../assets/technology/image-spaceport-portrait.jpg";
import SpaceCapsuleImg from "../assets/technology/image-space-capsule-portrait.jpg";

const technologyData = [
  {
    id: 1,
    img: LaunchVehicleImg,
    name: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    img: SpaceportImg,
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    img: SpaceCapsuleImg,
    name: "Space Capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const Technology = ({ setActivePage }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="technology-bg min-h-screen w-full text-white pb-12 lg:pb-0 animate-fade-in flex flex-col overflow-x-hidden">
      <Header setActivePage={setActivePage} />

      <div className="flex flex-col flex-1 lg:pl-24 max-w-360 mx-auto w-full">
        <h2 className="tracking-widest text-lg md:text-xl uppercase my-4 text-center md:text-left px-6 lg:px-0">
          <span className="font-bold opacity-25 mr-3">03</span> Space Launch 101
        </h2>

        {/* 1. MAIN TRACK: This container holds everything */}
        <div className="flex flex-col lg:flex-row items-center justify-between flex-1 w-full mt-4 overflow-hidden">
          {/* IMAGE SLIDER CONTAINER */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2 overflow-hidden">
            <div
              className="flex w-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {technologyData.map((tech) => (
                <div
                  key={tech.id}
                  className="w-full shrink-0 flex justify-center lg:justify-end"
                >
                  <img
                    className="w-full max-h-77.5 md:max-h-100 lg:max-h-130 object-cover lg:object-contain"
                    src={tech.img}
                    alt={tech.name}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CONTROLS & DESCRIPTION CONTAINER */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start text-center lg:text-left px-6 lg:px-0 w-full lg:w-1/2 order-2 lg:order-1 mt-6 lg:mt-0">
            {/* Numbered Dots Navigation */}
            <div className="flex lg:flex-col gap-4 font-serif text-lg md:text-xl z-10">
              {technologyData.map((tech, index) => (
                <button
                  key={tech.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                    activeIndex === index
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-gray-600 hover:border-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* TEXT SLIDER CONTAINER */}
            <div className="overflow-hidden w-full relative h-62.5 md:h-50 lg:h-auto">
              <div
                className="flex w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {technologyData.map((tech) => (
                  <div key={tech.id} className="w-full shrink-0">
                    <span className="text-sm tracking-widest text-gray-400 uppercase block mb-2">
                      THE TERMINOLOGY...
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif uppercase tracking-wide mb-4">
                      {tech.name}
                    </h1>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
