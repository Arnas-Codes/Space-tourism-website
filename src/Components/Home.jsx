import Header from "../Components/Header";

const Home = ({ setActivePage }) => {
  return (
    <main className="home-bg min-h-screen w-full flex flex-col text-white gap-12 text-center lg:text-left opacity-0 animate-[fade-in_1s_ease-out_forwards]">
      {/* Navigation Header */}
      <Header setActivePage={setActivePage} />

      {/* Main Content Layout Container */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center flex-1 items-center p-8 lg:p-24 xl:p-0 gap-16 max-w-6xl w-full mx-auto ">
        {/* Left Side Text Content */}
        <div className="max-w-md">
          <p className="tracking-widest text-sm md:text-md uppercase text-gray-400 mb-4">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="text-7xl md:text-9xl font-serif uppercase tracking-wider text-white">
            Space
          </h1>
          <p className="mt-6 text-gray-300 leading-relaxed text-sm md:text-base">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        {/* Explore Interactive Core Button */}
        <button
          onClick={() => setActivePage?.(1)}
          className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 bg-white text-black
           rounded-full text-2xl sm:text-3xl lg:text-4xl uppercase font-serif 
           tracking-widest transition-all duration-300
           hover:shadow-[0_0_0_50px_rgba(255,255,255,0.1)]
           focus:outline-none cursor-pointer mt-8"
        >
          EXPLORE
        </button>
      </div>
    </main>
  );
};

export default Home;
