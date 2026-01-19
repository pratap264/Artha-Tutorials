import React from "react";
import aboutImage from "../../assets/website/rb_29.png";
import backgroundImage from "../../assets/website/bg-2.jpg";

const HeroCareer = () => {
  return (
    <div
      className="dark:bg-gray-950 dark:text-white duration-300"
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
              src={aboutImage}
              alt="About Artha Tutorials"
              className="w-full sm:max-w-[580px] md:max-w-[630px] rounded-2xl"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-black">
            {/* Headline with animation */}
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold font-ubuntu"
              style={{ lineHeight: 1.2 }}
            >
              {["About", "Artha"].map((word, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-reveal"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {word}
                  {index < 3 && "\u00A0"}
                </span>
              ))}
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold font-ubuntu"
                style={{ lineHeight: 1.2 }}
              >
                <span className="text-primary">
                  {["Tutorials"].map((word, index) => (
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
            <p data-aos="fade-up" data-aos-delay="300">
              Artha Tutorials is a premier coaching center dedicated to helping students 
              excel in their PUC (11th & 12th) board examinations. With experienced faculty, 
              comprehensive study materials, and personalized guidance, we prepare students 
              for academic success and competitive exams.
            </p>

            {/* Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCareer;
