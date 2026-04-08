const facultyData = [
  {
    name: "Mr Rajesh M (PhD), M.Com",
    title: "Founder, ARTHA",
    role: "Faculty of Commerce, Specialised in Accounts & Economics",
    experience: "5+ years of experience in Accounting, Tax and Audit",
    aosDelay: "0",
  },
  {
    name: "Mr Akshay Krishna P B, B.Com",
    title: "Founder, ARTHA",
    role: "Faculty of Commerce, Specialised in Statistics",
    experience: "5+ years of industry experience in Accounting and ERP Implementation",
    aosDelay: "100",
  },
  {
    name: "CS Adithya Sri Hari, CS, B.Com, LLB",
    title: "",
    role: "Faculty of Law, Specialised in Business Studies, Economics and Management",
    experience: "3+ years of experience in Corporate Governance",
    aosDelay: "200",
  },
  {
    name: "Ms Harshitha B M (PhD), M.Com (Gold Medalist)",
    title: "",
    role: "Faculty of Commerce, Specialised in Economics",
    experience: "3+ years of experience in Accounting and Taxation",
    aosDelay: "0",
  },
  {
    name: "Mr Venkatesh R M, MSc in ML & AI",
    title: "",
    role: "Faculty of Mathematics, Specialised in core Mathematics",
    experience: "Senior Software Engineer with 6+ years of experience in microservices architecture",
    aosDelay: "100",
  },
  {
    name: "Ms Shalini, B.Com",
    title: "",
    role: "Faculty of Commerce, Specialised in Management",
    experience: "3+ years of experience in Accounting and Audit for Big Four Firm",
    aosDelay: "200",
  },
  {
    name: "Ms Nandini, LLB (BMS School of Law)",
    title: "",
    role: "Faculty of Commerce, Specialised in Economics and Management",
    experience: "2+ years of experience in Economics & Legal Methodologies",
    aosDelay: "0",
  },
  {
    name: "Mr Mohith Krishna P, B.Com",
    title: "",
    role: "Associate Faculty of Commerce, Specialised in Mathematics",
    experience: "2+ years of experience in Mathematics and Logical Reasoning",
    aosDelay: "100",
  },
  {
    name: "Mr Karthik S, BSc (Multimedia & Design)",
    title: "Head, Social Media and Marketing",
    role: "",
    experience: "2+ years of experience in Design, Multimedia and Marketing",
    aosDelay: "200",
  },
];

const Faculty = () => {
  return (
    <section id="faculty" className="bg-white py-20 font-lato scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl font-semibold text-gray-900"
          >
            Our Faculty
          </h1>

          <p
            data-aos="fade-up"
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Experienced and dedicated educators committed to guiding students
            towards academic excellence in PUC 1 & 2.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {facultyData.map((member) => (
            <div
              key={member.name}
              data-aos="fade-up"
              data-aos-delay={member.aosDelay}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100
              hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              {/* Name with accent bar */}
              <div className="flex items-start gap-3">
                <div className="w-1 h-10 bg-primary rounded-full mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {member.name}
                  </h2>
                  {member.title && (
                    <p className="text-sm font-semibold text-primary mt-0.5">
                      {member.title}
                    </p>
                  )}
                </div>
              </div>

              {/* Role & Experience */}
              <div className="mt-4 space-y-2 pl-4">
                {member.role && (
                  <p className="text-sm text-gray-700">
                    {member.role}
                  </p>
                )}
                <p className="text-sm text-gray-500 italic">
                  {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faculty;
