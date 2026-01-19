import React from "react";
import { useNavigate } from "react-router-dom";
import studentImage from "../../assets/website/il-7.png";
import backgroundImage from "../../assets/website/bg-2.jpg";

const HeroService = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/services");
    setTimeout(() => {
      const middleContent = document.getElementById("middle-content");
      if (middleContent) {
        middleContent.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div
      className="duration-300"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="container min-h-[100vh] flex items-center justify-center sm:mt-0 font-lato">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={studentImage}
              alt="Student Learning"
              className="w-full sm:max-w-[580px] md:max-w-[630px] rounded-2xl"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-black">
            {/* Headline with animation */}
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-4xl font-semibold font-ubuntu"
              style={{ lineHeight: 1.3 }}
            >
              {["Complete", "Curriculum"].map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-reveal"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {word}
                  {index < 3 && "\u00A0"}
                </span>
              ))}
              <h1
                data-aos="fade-up"
                className="text-5xl sm:text-5xl font-semibold font-ubuntu"
                style={{ lineHeight: 1.3 }}
              >
                <span className="text-primary">
                  {["for", "PUC"].map((word, index) => (
                    <span
                      key={index + 4}
                      className="inline-block opacity-0 animate-reveal"
                      style={{ animationDelay: `${(index + 4) * 0.2}s` }}
                    >
                      {word}
                      {index < 7 && "\u00A0"}
                    </span>
                  ))}
                </span>
              </h1>
            </h1>
            {/* Subheadline */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="subheadline font-bold text-xl"
            >
              Comprehensive coaching for 11th & 12th standard with expert faculty, 
              regular tests, and personalized guidance to help you excel in board exams.
            </p>

            {/* Learn More Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroService;
