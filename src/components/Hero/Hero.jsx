import React from "react";
import { useNavigate } from "react-router-dom";
import studentImage from "../../assets/website/il-2-ed.png";
import heroBackground from "../../assets/website/bg-3.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/services");
  };

  return (
    <div
      className="duration-300"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="container min-h-[100vh] flex items-center justify-center sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={studentImage}
              alt="Student Success"
              className="w-full sm:max-w-[580px] md:max-w-[630px] rounded-xl object-cover object-center"
              style={{
                height: "auto",
                width: "100%",
                objectPosition: "center",
              }}
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-black">
            {/* Headline with animation */}
            <h1
              data-aos="fade-up"
              className="text-5xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              {["Master", "Your", "Board", "Exams"].map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-reveal font-ubuntu"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}
                  {index < 3 && "\u00A0"}
                </span>
              ))}
              <h1
                data-aos="fade-up"
                className="text-6xl sm:text-6xl font-semibold font-ubuntu"
              >
                <span className="text-primary">
                  {["with", "Artha"].map((word, index) => (
                    <span
                      key={index + 4}
                      className="inline-block opacity-0 animate-reveal"
                      style={{ animationDelay: `${(index + 4) * 0.2}s` }}
                    >
                      {word}
                      {index < 1 && "\u00A0"}
                    </span>
                  ))}
                </span>
              </h1>
            </h1>

            {/* Subheadline */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="subheadline font-lato font-base text-xl"
            >
              Expert guidance for PUC 11th & 12th | Science, Commerce & Humanities streams
            </p>

            {/* Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn font-lato"
              onClick={handleLearnMoreClick}
            >
              Explore Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
