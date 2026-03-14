import { FaChalkboardUser, FaTrophy, FaBook, FaHeadset } from "react-icons/fa6";
import brochurePdf from "../../assets/ARTHA-BROCHURE.pdf";

const aboutPoints = [
  {
    name: "Conceptual Depth",
    icon: <FaChalkboardUser className="text-4xl text-primary" />,
    description:
      "Our teaching philosophy blends conceptual depth with strategic preparation, helping students build strong academic foundations.",
    aosDelay: "0",
  },
  {
    name: "Exam Mastery",
    icon: <FaTrophy className="text-4xl text-primary" />,
    description:
      "We enable students to approach board examinations with clarity and confidence through targeted exam strategies.",
    aosDelay: "300",
  },
  {
    name: "Continuous Mentorship",
    icon: <FaBook className="text-4xl text-primary" />,
    description:
      "The right guidance at the right time can transform a student's academic journey — and that's exactly what we provide.",
    aosDelay: "500",
  },
  {
    name: "Future-Ready Students",
    icon: <FaHeadset className="text-4xl text-primary" />,
    description:
      "We nurture discipline, curiosity, and excellence — shaping students not only for board results but for future success in commerce and professional careers.",
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
              Why Choose ARTHA Academy
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
                  <span>Premium commerce learning space for 1st & 2nd PUC</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Strategic preparation & conceptual clarity</span>
                </li>
                <li
                  data-aos="fade-up"
                  className="flex items-center space-x-4 text-center hover:text-primary transition-all duration-300"
                >
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span>Committed to nurturing discipline, curiosity & excellence</span>
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
            <a
              href={brochurePdf}
              download
              className="primary-btn inline-block"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
