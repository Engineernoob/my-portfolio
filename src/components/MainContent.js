import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Github from "./GitHub";
import Terminal from "./Terminal";

const MainContent = ({ activeTab, setActiveTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <Home setActiveTab={setActiveTab} />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "GitHub":
        return <Github />;
      case "Terminal":
        return <Terminal />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -50 },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.main
          key={activeTab}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="flex-1 p-4 md:p-8 bg-[#1e1e1e] z-10 overflow-auto"
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 md:w-2/3 md:h-2/3 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-10"
        >
          <path
            fill="#FF6B6B"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.3C32.4,86,16.2,88,-0.4,88.7C-17,89.4,-34,88.8,-47.1,81.2C-60.2,73.6,-69.4,59,-76.2,44.1C-83,29.2,-87.4,14.6,-88.3,-0.5C-89.2,-15.6,-86.5,-31.2,-78.7,-43.8C-70.9,-56.4,-58,-66,-44.3,-73.3C-30.7,-80.6,-15.3,-85.6,0.2,-86C15.7,-86.4,31.5,-82.2,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default MainContent;
