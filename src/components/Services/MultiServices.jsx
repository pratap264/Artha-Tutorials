import { FaBook, FaCalculator, FaFlask, FaPen } from "react-icons/fa";
import { MdHistoryEdu, MdLanguage } from "react-icons/md";
import { BiAtom } from "react-icons/bi";

const scienceSubjects = [
  {
    name: "Physics",
    icon: <BiAtom className="text-4xl text-primary" />,
    description:
      "Master mechanics, thermodynamics, electricity, and modern physics with expert instructors.",
    aosDelay: "0",
  },
  {
    name: "Chemistry",
    icon: <FaFlask className="text-4xl text-primary" />,
    description:
      "Understand organic, inorganic, and physical chemistry with practical approach.",
    aosDelay: "300",
  },
  {
    name: "Biology",
    icon: <FaBook className="text-4xl text-primary" />,
    description:
      "Learn human physiology, botany, zoology, and ecology with comprehensive notes.",
    aosDelay: "500",
  },
  {
    name: "Mathematics",
    icon: <FaCalculator className="text-4xl text-primary" />,
    description:
      "Conquer calculus, algebra, and analytical geometry with structured lessons.",
    aosDelay: "700",
  },
];

const commerceSubjects = [
  {
    name: "Accountancy",
    icon: <FaCalculator className="text-4xl text-primary" />,
    description:
      "Learn financial accounting, cost accounting, and auditing principles.",
    aosDelay: "0",
  },
  {
    name: "Economics",
    icon: <FaBook className="text-4xl text-primary" />,
    description:
      "Understand microeconomics, macroeconomics, and economic policies.",
    aosDelay: "300",
  },
  {
    name: "Business Studies",
    icon: <FaPen className="text-4xl text-primary" />,
    description:
      "Master business management, entrepreneurship, and organizational concepts.",
    aosDelay: "500",
  },
  {
    name: "English & Elective",
    icon: <MdLanguage className="text-4xl text-primary" />,
    description:
      "Improve communication skills, literature, and written English proficiency.",
    aosDelay: "700",
  },
];

const humSubjects = [
  {
    name: "History",
    icon: <MdHistoryEdu className="text-4xl text-primary" />,
    description:
      "Study Indian and world history with focus on chronology and key events.",
    aosDelay: "0",
  },
  {
    name: "Political Science",
    icon: <FaBook className="text-4xl text-primary" />,
    description:
      "Learn constitutional law, governance, and political institutions.",
    aosDelay: "300",
  },
  {
    name: "Geography",
    icon: <FaPen className="text-4xl text-primary" />,
    description:
      "Understand physical and human geography with case studies and maps.",
    aosDelay: "500",
  },
  {
    name: "English & Elective",
    icon: <MdLanguage className="text-4xl text-primary" />,
    description:
      "Improve communication and critical thinking through literature and writing.",
    aosDelay: "700",
  },
];

const MultiServices = () => {
  return (
    <div id="middle-content">
      <span id="about"></span>
      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center font-lato">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mt-8 mb-8">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-4xl text-violet-950 mb-8"
            >
              Science Stream - 11th & 12th
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-md pb-6px mt-10px"
            >
              Comprehensive coaching for Physics, Chemistry, Biology & Mathematics with board and competitive exam focus.
            </p>
          </div>

          {/* Science Subjects */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 hover-text-primary">
            {scienceSubjects.map((subject) => (
              <div
                key={subject.name}
                data-aos="fade-up"
                data-aos-delay={subject.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{subject.icon}</div>
                <h1 className="text-lg font-semibold hover:text-primary">
                  {subject.name}
                </h1>
                <p className="text-gray-600 text-md">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mt-8 mb-8">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-4xl text-violet-950 mb-8"
            >
              Commerce Stream - 11th & 12th
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-md pb-6px mt-10px"
            >
              Expert guidance for Accounts, Economics, and Business Studies with practical knowledge.
            </p>
          </div>

          {/* Commerce Subjects */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {commerceSubjects.map((subject) => (
              <div
                key={subject.name}
                data-aos="fade-up"
                data-aos-delay={subject.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{subject.icon}</div>
                <h1 className="text-lg font-semibold hover:text-primary">
                  {subject.name}
                </h1>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3 mt-8 mb-8">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-4xl text-violet-950 mb-8"
            >
              Humanities Stream - 11th & 12th
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 text-md pb-6px mt-10px"
            >
              In-depth teaching of History, Political Science, and Geography for competitive exams.
            </p>
          </div>

          {/* Humanities Subjects */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {humSubjects.map((subject) => (
              <div
                key={subject.name}
                data-aos="fade-up"
                data-aos-delay={subject.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{subject.icon}</div>
                <h1 className="text-lg font-semibold hover:text-primary">
                  {subject.name}
                </h1>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiServices;

