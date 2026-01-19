import { FaChalkboardUser, FaTrophy, FaBook, FaHeadset } from "react-icons/fa6";

const aboutPoints = [
  {
    name: "Expert Faculty",
    icon: <FaChalkboardUser className="text-4xl text-primary" />,
    description:
      "Experienced educators dedicated to student success with proven teaching methodologies.",
    aosDelay: "0",
  },
  {
    name: "Proven Track Record",
    icon: <FaTrophy className="text-4xl text-primary" />,
    description:
      "Consistently high pass rates and student achievements in board exams.",
    aosDelay: "300",
  },
  {
    name: "Comprehensive Curriculum",
    icon: <FaBook className="text-4xl text-primary" />,
    description:
      "Complete coverage of all subjects with focus on conceptual clarity.",
    aosDelay: "500",
  },
  {
    name: "Student Support",
    icon: <FaHeadset className="text-4xl text-primary" />,
    description:
      "Personalized guidance and doubt clearing sessions available for all students.",
    aosDelay: "700",
  },
];

const AboutUs = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center font-lato">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mt-8">
            <h1
              data-aos="fade-up"
              className="text-4xl font-semibold sm:text-4xl text- uppercase"
            >
              Why Choose Artha Tutorials
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
                  <span>Personalized learning approach</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Regular practice tests and assessments</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Affordable and flexible coaching plans</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {aboutPoints.map((point) => (
              <div
                key={point.name}
                data-aos="fade-up"
                data-aos-delay={point.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{point.icon}</div>
                <h1 className="text-lg font-semibold hover:text-primary">
                  {point.name}
                </h1>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button
              className="primary-btn"
              onClick={() => (window.location.href = "https://forms.gle/qrMgUkXB9g13JRbd8")}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
