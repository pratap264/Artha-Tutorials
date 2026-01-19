import React from "react";
import { useNavigate } from "react-router-dom";
import resultsImage from "../../assets/website/rb_2132.png";
import backgroundImage from "../../assets/website/bg-2.jpg";

const HeroCreators = () => {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    navigate("/contact");
  };

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
      <div className="container min-h-[100vh] flex items-center justify-center sm:mt-0 font-ubuntu">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src={resultsImage}
              alt="Student Results"
              className="w-full sm:max-w-[680px] md:max-w-[730px] rounded-2xl"
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40 text-black">
            {/* Headline with animation */}
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-4xl font-semibold font-ubuntu"
              style={{
                lineHeight: 1.5,
                marginBottom: "20px",
              }}
            >
              {["Student", "Success", "Stories"].map((word, index) => (
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
                className="text-5xl sm:text-5xl font-semibold font-ubuntu"
                style={{
                  lineHeight: 1.2,
                  marginBottom: "20px",
                }}
              >
                <span className="text-primary">
                  {["&", "Results"].map((word, index) => (
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
              style={{
                marginBottom: "30px",
              }}
            >
              At Artha Tutorials, we take pride in our students' exceptional performance. 
              Over the years, our dedicated coaching has helped hundreds of students achieve 
              excellent results in their PUC board examinations and competitive entrance tests.
            </p>

            {/* Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
              onClick={handleGetInTouchClick}
            >
              View Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCreators;
