import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/logo/artha-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 font-lato border-t">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <img src={logo} alt="Artha Academy" className="w-40" />

            {/* Tagline */}
            <p className="text-bold text-gray-500 font-medium">
              Guiding Students Towards Academic Excellence
            </p>

            <p className="text-gray-800 text-sm leading-relaxed">
              Artha empowers commerce students with expert coaching for I & II
              PUC Commerce and CA Foundation building strong concepts, exam
              confidence, and a path to professional success.
            </p>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/arthatutorials/"
                className="p-3 rounded-full bg-primary/10 text-primary
      hover:bg-primary hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/arthatutorials/"
                className="p-3 rounded-full bg-primary/10 text-primary
      hover:bg-primary hover:text-white transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#top" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-primary">
                  Courses
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-primary">
                  Faculty
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-primary">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-primary mt-1" />
                <span>
                  +91 80733 57057
                  <br />
                  +91 85533 66974
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaEnvelope className="text-primary mt-1" />
                <a
                  href="mailto:arthatutorials@gmail.com"
                  className="hover:text-primary"
                >
                  arthatutorials@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>
                  #37(72), 4th Cross, Kodandaramapuram, Malleshwaram
                  <br />
                  Bangalore - 560003
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Artha Tutorials. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
