import { FaTrophy, FaGraduationCap, FaChartLine, FaStar } from "react-icons/fa";

const resultHighlights = [
  {
    name: "95%+ Pass Rate",
    icon: <FaTrophy className="text-4xl text-primary" />,
    description: "Consistent high success rate in board exams.",
    aosDelay: "0",
  },
  {
    name: "Top Scorers",
    icon: <FaStar className="text-4xl text-primary" />,
    description: "Students regularly achieving 90+ percentages.",
    aosDelay: "300",
  },
  {
    name: "Medical/Engineering",
    icon: <FaGraduationCap className="text-4xl text-primary" />,
    description: "Success in competitive entrance examinations.",
    aosDelay: "500",
  },
  {
    name: "Career Growth",
    icon: <FaChartLine className="text-4xl text-primary" />,
    description: "Students admitted to prestigious institutions.",
    aosDelay: "700",
  },
];

const CreatorsService = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center font-lato">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mt-8">
            <h1
              data-aos="fade-up"
              className="text-4xl font-semibold sm:text-4xl text-violet-950 uppercase"
            >
              Student Results & Success Stories
            </h1>
            <br />
            {/* Space between Heading and Points */}
            <div className="mt-6">
              {/* Point Circle Icons */}
              <ul className="flex flex-col sm:flex-row justify-center sm:space-x-8 space-y-4 sm:space-y-0 text-sm sm:text-base">
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Excellence in Board Exams</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Success in Competitive Exams</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Get paid for your work</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Image above skillsData section */}
          <div className="text-center my-8">
            <img
              src={yellowCar} // Replace with the URL of your image
              alt="Career Image"
              className="w-full max-w-3xl mx-auto rounded-lg"
              data-aos="zoom-in" // Add the AOS zoom-in animation
              data-aos-duration="1000" // Duration of the animation
              data-aos-delay="200" // Delay before the animation starts
            />
          </div>

          {/* Campaign Steps Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {resultHighlights.map((highlight) => (
              <div
                key={highlight.name}
                data-aos="fade-up"
                data-aos-delay={highlight.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{highlight.icon}</div>
                <h1 className="text-lg font-semibold hover:text-primary transition-colors duration-300">{highlight.name}</h1>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div> 

          {/* Button */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button
              className="primary-btn"
              onClick={() =>
                (window.location.href = "https://forms.gle/qrMgUkXB9g13JRbd8")
              }
            >
              Apply Now
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CreatorsService;
