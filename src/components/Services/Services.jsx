import { FaBook, FaCalculator, FaFlask } from "react-icons/fa";
import { MdHistoryEdu } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    name: "Science Stream",
    icon: <FaFlask className="text-4xl text-primary" />,
    link: "#",
    description:
      "Physics, Chemistry & Biology with expert faculty. Comprehensive coaching for board exams and competitive exams.",
    aosDelay: "0",
  },
  {
    name: "Commerce Stream",
    icon: <FaCalculator className="text-4xl text-primary" />,
    link: "#",
    description:
      "Accounts, Economics & Business Studies. Master financial concepts and succeed in your board examinations.",
    aosDelay: "300",
  },
  {
    name: "Humanities Stream",
    icon: <MdHistoryEdu className="text-4xl text-primary" />,
    link: "#",
    description:
      "History, Civics & Geography. In-depth analysis and conceptual clarity for better understanding.",
    aosDelay: "500",
  },
  {
    name: "English & Vernacular",
    icon: <FaBook className="text-4xl text-primary" />,
    link: "#",
    description:
      "Comprehensive language training for all streams. Improve grammar, writing & communication skills.",
    aosDelay: "700",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/services");
    setTimeout(() => {
      const middleContent = document.getElementById("middle-content");
      if (middleContent) {
        middleContent.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center font-lato">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mt-8">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-black-950 mb-8"
            >
              Our PUC Courses (11th & 12th)
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-md pb-6px"
            >
              Choose from three streams and excel in your board exams with Artha Tutorials' expert guidance and proven teaching methods.
            </p>
          </div>

          {/* Courses Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
            {coursesData.map((course) => (
              <div
                key={course.name}
                data-aos="fade-up"
                data-aos-delay={course.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{course.icon}</div>
                <h1 className="text-lg font-semibold">{course.name}</h1>
                <p className="text-gray-600 text-md">{course.description}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-16 sm:mt-8 mb-8"
          >
            <button className="primary-btn" onClick={handleButtonClick}>
              View Detailed Curriculum
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

