import akshay from "../../assets/our_team/Akshay.jpg";
import rajesh from "../../assets/our_team/rajesh.jpg";
import aditya from "../../assets/our_team/aditya.jpg";
import bharadwaj from "../../assets/our_team/Bharadwaj.jpg";

const facultyData = [
  {
    name: "Akshay",
    role: "Senior Faculty – Accountancy",
    photo: akshay,
    aosDelay: "0",
  },
  {
    name: "Rajesh",
    role: "Faculty – Business Studies",
    photo: rajesh,
    aosDelay: "200",
  },
  {
    name: "Aditya",
    role: "Faculty – Economics",
    photo: aditya,
    aosDelay: "400",
  },
  {
    name: "Bharatdwaj",
    role: "Faculty – Statistics & Basic Maths",
    photo: bharadwaj,
    aosDelay: "600",
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
            data-aos-delay="150"
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Experienced and dedicated educators committed to guiding students
            towards academic excellence in PUC 1 & 2.
          </p>
        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {facultyData.map((member) => (
            <div
              key={member.name}
              data-aos="fade-up"
              data-aos-delay={member.aosDelay}
              className="text-center bg-white rounded-xl p-6
              shadow-sm hover:shadow-md transition"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-36 h-36 rounded-full mx-auto object-cover"
              />

              <h2 className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </h2>

              <p className="text-sm text-gray-600 mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faculty;
