import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
  };
const testimonialData = [
  {
    id: 1,
    name: "Ramesh Kumar (Parent, PUC 2)",
    text: "Artha Tutorials played a major role in my son’s academic improvement. The faculty are highly experienced and give individual attention to every student. We saw a clear improvement in confidence and results.",
  },
  {
    id: 2,
    name: "Sneha S (PUC 1 Student)",
    text: "The teaching style at Artha Tutorials is very clear and easy to understand. Concepts in Accountancy and Economics became simple for me. Regular tests really helped me improve my performance.",
  },
  {
    id: 3,
    name: "Mahesh Rao (Parent, PUC 1)",
    text: "What we liked most about Artha Tutorials is their disciplined approach and regular feedback to parents. Faculty members are approachable and truly care about student success.",
  },
  {
    id: 4,
    name: "Aditya K (PUC 2 Student)",
    text: "Artha Tutorials helped me build strong fundamentals in Statistics and Business Studies. The revision sessions before exams were extremely useful. I feel much more confident now.",
  },
];

  return (
    <section
      id="reviews"
      className="bg-artha py-20 font-lato scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div
          data-aos="fade-up"
          className="text-center space-y-4 mb-14"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold text-white">
            What Parents & Students Say
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto">
            Trusted by parents and loved by students for quality teaching,
            personal attention, and consistent results.
          </p>
        </div>

        {/* Slider */}
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text }) => (
              <div key={id} className="px-4">
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">

                  {/* Quote */}
                  <p className="text-gray-700 text-lg leading-relaxed">
                    “{text}”
                  </p>

                  {/* Name */}
                  <h3 className="mt-6 font-semibold text-gray-900">
                    {name}
                  </h3>

                  {/* Decorative quotes */}
                  <span className="absolute bottom-4 right-6 text-gray-200 text-[6rem] font-serif">
                    ,,
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
