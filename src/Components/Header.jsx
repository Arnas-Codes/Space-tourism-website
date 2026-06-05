import { useState } from "react";
import Logo from "../assets/shared/logo.svg";
import Menu from "../assets/shared/icon-hamburger.svg";
import Close from "../assets/shared/icon-close.svg";

const Header = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];

  return (
    <div className="w-full p-6 md:p-0 md:pl-12 flex justify-between items-center relative z-50">
      {/* Logo */}
      <img className="w-12 h-12 my-6" src={Logo} alt="Space" />

      <div className="hidden lg:block h-px  flex-1 ml-16 -mr-8 relative z-50" />

      <nav className="hidden md:flex gap-12 px-16 lg:px-32 backdrop-blur-2xl h-24 items-center">
        {navLinks.map((page, index) => (
          <button
            key={page}
            onClick={() => setActivePage?.(index)}
            className="h-full border-b-2 border-transparent hover:border-white/50 transition-all uppercase tracking-widest text-sm cursor-pointer text-gray-200 hover:text-white"
          >
            <span className="font-bold mr-3 hidden lg:inline">0{index}</span>
            {page}
          </button>
        ))}
      </nav>

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden focus:outline-none cursor-pointer"
        >
          <img className="w-6 h-6" src={Menu} alt="open menu" />
        </button>
      )}
      <div
        className={`fixed top-0 bottom-0 right-0 h-screen w-64 backdrop-blur-2xl p-6 flex flex-col gap-12 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="w-6 h-6 cursor-pointer ml-auto mt-2 focus:outline-none"
        >
          <img src={Close} alt="close menu" />
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col gap-8 pl-4 uppercase tracking-widest text-sm text-left">
          {navLinks.map((page, index) => (
            <button
              key={page}
              className="text-left text-gray-200 transition-colors hover:text-white cursor-pointer py-1 hover:border-b-2 hover:border-white/50 "
              onClick={() => {
                setActivePage?.(index);
                setIsOpen(false);
              }}
            >
              <span className="font-bold mr-3 text-white">0{index}</span>
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
