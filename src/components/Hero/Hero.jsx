import React from "react";
import heroBg from "../../assets/Artha-Tutorials.jpeg";

const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[85vh] flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D768C]/90 via-[#0D768C]/75 to-[#0D768C]/50" />

      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="max-w-3xl space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-slow-blink" />
            <span className="text-sm font-medium text-gray-700">
              Admissions Open for 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">
            The Meaning Behind <br />
            <span className="text-primary">Your Success</span>
          </h1>

          {/* Sub text */}
          <p className="text-lg md:text-xl text-white/90 italic max-w-2xl drop-shadow-md">
           Artha empowers commerce students with expert coaching for I & II PUC Commerce and CA Foundation building strong concepts, exam confidence, and a path to professional success.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection("courses")}
              className="bg-primary text-white px-7 py-3 rounded-full font-semibold 
              hover:opacity-90 transition shadow-lg hover:shadow-xl"
            >
              Start Learning Today
            </button>

            <button
              onClick={() => scrollToSection("courses")}
              className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold 
              hover:bg-white hover:text-[#0D768C] transition shadow-lg hover:shadow-xl backdrop-blur-sm"
            >
              View Courses
            </button>
          </div>
        </div>
      </div>

      {/* Soft Glow */}
      <div
        className="absolute right-[-200px] top-1/2 -translate-y-1/2 
        w-[520px] h-[520px] rounded-full pointer-events-none z-[1]"
        style={{
          backgroundColor: "#FFFFFF",
          opacity: 0.08,
          filter: "blur(120px)",
        }}
      />
    </section>
  );
};

export default Hero;
