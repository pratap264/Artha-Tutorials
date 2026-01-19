import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/GoToTop";
import { Route, Routes } from "react-router-dom";
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

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Global Go To Top Button */}
      <GoToTop />

      <Footer />
    </div>
  );
};

export default App;
