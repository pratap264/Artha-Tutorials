import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import DarkLogo from "../../assets/logo/artha.jpg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  return (
    <header
    id="top"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      {/* Accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-artha to-primary" />

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button className="flex items-center">
          <div className="h-16 md:h-20 flex items-center">
            <img src={DarkLogo} alt="Logo" className="h-full w-auto object-contain" />
          </div>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 font-semibold text-[19px]">
          {[
            { label: "Courses", id: "courses" },
            { label: "About Us", id: "about" },
            { label: "Reviews", id: "reviews" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-dark/80 hover:text-primary transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:bg-primary after:w-0 hover:after:w-full after:transition-all"
            >
              {item.label}
            </button>
          ))}

          {/* CTA */}
          <button
            onClick={() => scrollToSection("courses")}
            className="bg-primary text-white px-6 py-2 rounded-full 
            font-semibold text-sm
            shadow-[0_8px_20px_rgba(252,113,10,0.35)]
            hover:shadow-[0_10px_28px_rgba(252,113,10,0.45)]
            hover:-translate-y-[1px]
            transition-all duration-300"
          >
            Enroll Now
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden text-black z-50">
          {showMenu ? (
            <RxCross2 size={32} onClick={() => setShowMenu(false)} />
          ) : (
            <HiMenuAlt3 size={32} onClick={() => setShowMenu(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-xl transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 mt-28 px-6 text-xl font-semibold">
          <button onClick={() => scrollToSection("courses")} className="text-left hover:text-primary">
            Courses
          </button>
          <button onClick={() => scrollToSection("about")} className="text-left hover:text-primary">
            About Us
          </button>
          <button onClick={() => scrollToSection("reviews")} className="text-left hover:text-primary">
            Reviews
          </button>

          <button
            onClick={() => scrollToSection("courses")}
            className="bg-primary text-white py-3 rounded-full"
          >
            Enroll Now
          </button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
