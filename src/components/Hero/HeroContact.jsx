import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import contactImage from "../../assets/website/rb_c.png";

const HeroContact = () => {
  return (
    <div className="bg-white duration-300 py-8">
      <div className="container min-h-[500px] flex flex-col lg:flex-row items-start justify-between gap-16 mt-16 sm:mt-0 mb-0 font-lato">

        {/* Left Section */}
        <div className="flex flex-col space-y-8 flex-1 mt-8">

          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src={contactImage} 
              alt="Contact Image" 
              className="w-full sm:w-3/4 lg:w-1/2 rounded-lg"
              style={{ height: 'auto' }}
            />
          </div>

          {/* Address Details Section */}
          <div className="flex flex-col lg:flex-row justify-between lg:space-x-6 mt-8 lg:mt-16">
            {/* Location Section */}
            <div className="flex items-center space-x-3 justify-center sm:justify-start flex-col sm:flex-row" data-aos="fade-up">
              <FaLocationArrow className="text-2xl text-primary"/>
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <h2 className="text-2xl sm:text-2xl font-semibold text-black">Location</h2>
                <h3 className="text-md text-primary mt-1">Bangalore, Karnataka</h3>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center space-x-3 mt-4 lg:mt-0 justify-center sm:justify-start flex-col sm:flex-row" data-aos="fade-up">
              <FaEnvelope className="text-2xl text-primary" />
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <h2 className="text-2xl sm:text-2xl font-semibold text-black">Email</h2>
                <h3 className="text-md text-primary mt-1">
                  <a href="mailto:info@arthatutorials.com" className="text-primary underline">
                    info@arthatutorials.com
                  </a>
                </h3>
              </div>
            </div>

            {/* Call Section */}
            <div className="flex items-center space-x-3 mt-4 lg:mt-0 justify-center sm:justify-start flex-col sm:flex-row" data-aos="fade-up">
              <FaPhoneAlt className="text-xl text-primary" />
              <div className="text-center sm:text-left mt-2 sm:mt-0">
                <h2 className="text-2xl sm:text-2xl font-semibold text-black">Call</h2>
                <h3 className="text-md text-primary mt-1">+91 XXXX XXXX XX</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Map) */}
        <div className="w-full max-w-md sm:max-w-lg xl:max-w-2xl flex-1 mt-8 lg:mt-0" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7756.78!2d77.6245!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d41d6601001%3A0xf00ef62049a4ee0!2sBangalore!5e0!3m2!1sen!2sin!4v1733711543137!5m2!1sen!2sin"
            width="100%" height="450" style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HeroContact;








