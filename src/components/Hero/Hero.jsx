import React from "react";

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
      className="relative overflow-hidden bg-[#0D768C]"
    >
      <div className="max-w-7xl mx-auto px-4 py-28">
        <div className="max-w-3xl space-y-8">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-slow-blink" />
            <span className="text-sm font-medium text-gray-700">
              Admissions Open for 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Unlock Your <br />
            <span className="text-primary">Academic Potential</span>
          </h1>

          {/* Sub text */}
          <p className="text-lg md:text-xl text-white/80 italic max-w-2xl">
            Expert coaching for PUC exams with personalized attention,
            proven methodologies, and a proven track record of success.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => scrollToSection("courses")}
              className="bg-primary text-white px-7 py-3 rounded-full font-semibold 
              hover:opacity-90 transition"
            >
              Start Learning Today
            </button>

            <button
              onClick={() => scrollToSection("courses")}
              className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold 
              hover:bg-white hover:text-[#0D768C] transition"
            >
              View Courses
            </button>
          </div>
        </div>
      </div>

      {/* Soft Glow */}
      <div
        className="absolute right-[-200px] top-1/2 -translate-y-1/2 
        w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          backgroundColor: "#FFFFFF",
          opacity: 0.12,
          filter: "blur(120px)",
        }}
      />
    </section>
  );
};

export default Hero;
