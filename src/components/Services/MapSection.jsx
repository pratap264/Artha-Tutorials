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
            4th Main Road, Malleshwaram, Bengaluru – 560003
          </p>
        </div>

        {/* Map Card */}
        <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-xl border bg-white">
          <iframe
            title="Artha Tutorials Location"
            src="https://www.google.com/maps?q=4th%20Main%20Road%20Malleshwaram%20Bengaluru%20560003&output=embed"
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
