import {
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../../assets/logo/artha.jpg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 font-lato border-t">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <img src={logo} alt="Artha Tutorials" className="w-40" />

            {/* Tagline */}
            <p className="text-bold text-gray-500 font-medium">
              Guiding PUC Students Towards Academic Excellence
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Artha Tutorials is a trusted PUC coaching institute committed to
              academic excellence, personal attention, and consistent results
              for PUC 1 & 2 students.
            </p>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-3 rounded-full bg-primary/10 text-primary
      hover:bg-primary hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="p-3 rounded-full bg-primary/10 text-primary
      hover:bg-primary hover:text-white transition"
              >
                <FaLinkedin />
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
                <span>+91 9XXXXXXXXX</span>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>
                  4th Main Road, Malleshwaram
                  <br />
                  Pincode: 560003
                  <br />
                  Bengaluru, Karnataka, India
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
