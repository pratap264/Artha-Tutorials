import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/GoToTop";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    // Handle hash-based navigation for smooth scrolling
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Handle initial hash on page load

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />

      {/* Single Page - All sections below */}
      <Home />

      {/* Global Go To Top Button */}
      <GoToTop />

      <Footer />
    </div>
  );
};

export default App;
