const MapSection = () => {
  return (
    <section className="bg-artha py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl font-bold">
            Visit Our Classes
          </h2>
          <p className="text-white/90 mt-2">
            4th Cross Road, Malleshwaram, Bengaluru – 560003
          </p>
        </div>

        {/* Map Card */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl border bg-white">
          <iframe
            title="Artha Tutorials Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6934.0!2d77.57273648549835!3d13.002324235699772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179c408c26c3%3A0x75091a71410ecab2!2sArtha%20tutorials!5e0!3m2!1sen!2sin!4v1773503342641!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
