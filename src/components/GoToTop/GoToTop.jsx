import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const topSection = document.getElementById("top");
    if (topSection) {
      topSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        aria-label="Go to top"
        className="
          fixed bottom-6 right-6 z-[999]
          w-12 h-12 rounded-full
          bg-primary text-white
          flex items-center justify-center
          shadow-lg
          hover:bg-primary-dark
          hover:-translate-y-1
          transition-all duration-300
        "
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default GoToTop;
