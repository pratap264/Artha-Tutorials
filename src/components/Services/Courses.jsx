import { FaGraduationCap } from "react-icons/fa";

const pucSubjects = [
  "Accountancy",
  "Business Studies",
  "Economics",
  "Statistics",
  "Basic Mathematics",
];

const coursesData = [
  {
    name: "PUC 1 (11th Standard)",
    description:
      "Strong foundation building with focus on concepts, fundamentals, and exam-oriented preparation.",
    aosDelay: "0",
  },
  {
    name: "PUC 2 (12th Standard)",
    description:
      "Advanced learning with in-depth subject mastery, revision strategies, and board exam readiness.",
    aosDelay: "200",
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="bg-artha py-20 font-lato scroll-mt-24"
    >
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold text-white"
          >
            PUC Courses (11th & 12th)
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-white/80 max-w-2xl mx-auto"
          >
            Structured coaching programs designed specifically for Karnataka PUC
            students with a focus on results and conceptual clarity.
          </p>
        </div>

        {/* PUC Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {coursesData.map((course) => (
            <div
              key={course.name}
              data-aos="fade-up"
              data-aos-delay={course.aosDelay}
              className="bg-white rounded-2xl p-8 shadow-lg space-y-5"
            >
              {/* Title */}
              <div className="flex items-center gap-3">
                <FaGraduationCap className="text-3xl text-primary" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  {course.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600">
                {course.description}
              </p>

              {/* Subjects */}
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-3">
                  Commerce Subjects Offered
                </p>

                <div className="flex flex-wrap gap-3">
                  {pucSubjects.map((subject) => (
                    <span
                      key={subject}
                      className="px-4 py-1.5 rounded-full text-sm font-medium
                      bg-primary/10 text-primary"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-center mt-16"
        >
          <button className="primary-btn">
            View Detailed Curriculum
          </button>
        </div>

      </div>
    </section>
  );
};

export default Courses;
