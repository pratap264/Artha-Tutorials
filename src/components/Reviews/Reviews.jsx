import Slider from "react-slick";

const Reviews = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
const testimonialData = [
  {
    id: 1,
    name: "Nityashree R (98%) — State 10th Rank",
    text: "Artha Tutorials has been more than just a tuition — they have guided us in times of need, built our confidence, and been tremendously supportive alongside preparing us to ace our exams. I have never felt stressed at all and have been able to do my best in my exams as well as University personal interviews. Thanks to Artha I have been able to secure the 10th rank for the state. Thank you, Artha for giving me another place to call 'home'.",
  },
  {
    id: 2,
    name: "Savitha Ramu — Parent of Greeshma Ramu (96.17%), State 21st Rank",
    text: "A big applause and thank you to Rajesh sir, Akshay sir, and all the other teachers for their hard work and passion. With all of your constant support and guidance, my ward Greeshma Ramu has scored a distinction in the exam. I feel that my decision was right in sending my ward to Artha Tutorials. I wish for great success to Artha. Keep it up.",
  },
  {
    id: 3,
    name: "Namana (97.50%) — Crash Course Student",
    text: "Artha Tutorials is not your average commerce coaching center. The moment you step inside, you're greeted by educators who are genuinely invested in your academic growth. Here, I found the best teachers whom I can call my best friends. They create a space where students feel empowered to explore and learn and also ensure that each one of them feels valued and understood. In short, Artha is a home away from home :)",
  },
  {
    id: 4,
    name: "Vibha Gangamma (96%) — National Level Hockey Team",
    text: "I could never imagine tutorials being more fun, creative, and inclusive. Artha's teachers focus on connecting with each individual and bringing out their shine, which distinguishes them from normal tutorials. They provide not only academic support but also guarantee fun-filled learning outside the world of books.",
  },
  {
    id: 5,
    name: "Purnima Raghu — Parent of Monitha (92.33%)",
    text: "I'm very happy to send my daughter to Artha tutorials. The teachers are excellent and will pay individual attention to students and have a great atmosphere. I recommend Artha tutorials to students who want to join and excel in their studies. The teachers are very understanding and very reliable. Overall I'm happy with my daughter's performance.",
  },
  {
    id: 6,
    name: "Vanitha Sukesh — Parent of Smrithi (95%), Teacher at Good Shepherd",
    text: "I thank you for your dedication to helping your students learn and grow. Your passion for teaching is truly inspiring. Your encouragement and support have helped my child build confidence in her abilities. I would highly recommend Artha Tutorials for coaching.",
  },
  {
    id: 7,
    name: "Purav (86%) — Crash Course Student",
    text: "Artha has been more than just a tutorial to me. I've made friends who are family here at Artha. I couldn't ask for such good teachers who understand the students so well. Apart from academics, Artha has imparted certain lessons and morals in me which will last for a lifetime. Artha has helped me understand the key fact that 'knowledge is always greater than marks'.",
  },
  {
    id: 8,
    name: "Sudha P — Parent",
    text: "Artha tutorials is an excellent coaching centre for commerce subjects. The faculty here provide excellent training paired with a friendly and jovial environment which promotes the Gen Z generation to regularly attend the classes and at the same time study on a regular basis. Very happy and proud that my daughter is associated with this institute.",
  },
  {
    id: 9,
    name: "Kusuma N — Parent",
    text: "The teaching at Artha Tutorials is very good. The teachers explain concepts in a different and engaging way instead of only relying on textbook methods. My child was very weak in Statistics and Economics earlier, but I can see clear improvement now. Thank you to the teachers for their effort and support.",
  },
  {
    id: 10,
    name: "Nakul Muniswamy — Student",
    text: "I've had a great experience studying at Artha Tutorials. The teaching is really good, and the methods used are very different from the usual boring textbook learning. Concepts are explained in a simple and engaging way, which makes it much easier to understand and remember. The environment is also very friendly and supportive — it honestly feels like a second home for students.",
  },
  {
    id: 11,
    name: "Keerthana — Student",
    text: "You will find one of the best teachers here, they will explain the concepts in a very practical manner and you will have fun while learning too. ARTHA tutorials is not just about studying, you learn so much more things about life. Highly suggested to join this tutorials, had a very amazing time here. Thank you Artha!",
  },
  {
    id: 12,
    name: "Chinmayee G — Student",
    text: "The best place for you to learn those subjects you struggle with, also for sure you'll see an increase in the marks drastically. More than satisfied with the teaching and worth the price paid. Staff is very friendly and approachable too.",
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
