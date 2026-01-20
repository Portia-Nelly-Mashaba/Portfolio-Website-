import React, { useState } from "react";
import { motion } from "framer-motion";
import resume from "./../assets/portia_mashaba_resume.pdf";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-textGreen">Portia Mashaba</h1>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <a href="#home" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }}>Home</motion.li>
            </a>
            <a href="#about" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.2 }}><span className="text-textGreen">01.</span> About</motion.li>
            </a>
            <a href="#skills" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}><span className="text-textGreen">02.</span> Skills</motion.li>
            </a>
            <a href="#projects" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}><span className="text-textGreen">03.</span> Projects</motion.li>
            </a>
            <a href="#contact" className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}><span className="text-textGreen">04.</span> Contact</motion.li>
            </a>
          </ul>
          <a href={resume} target="_blank">
            <motion.button initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
              Resume
            </motion.button>
          </a>
        </div>
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group" onClick={toggleMenu}>
          <span className={`w-full h-[2px] bg-textGreen inline-flex transform transition-all ease-in-out duration-300 ${showMenu ? "translate-y-2 rotate-45" : ""}`}></span>
          <span className={`w-full h-[2px] bg-textGreen inline-flex transform transition-all ease-in-out duration-300 ${showMenu ? "opacity-0" : ""}`}></span>
          <span className={`w-full h-[2px] bg-textGreen inline-flex transform transition-all ease-in-out duration-300 ${showMenu ? "-translate-y-2 -rotate-45" : ""}`}></span>
        </div>
      </div>
      {showMenu && (
        <div className="absolute top-20 left-0 w-full bg-bodyColor text-center py-5 mdl:hidden">
          <ul className="flex flex-col gap-4">
            <a href="#home" onClick={toggleMenu}>Home</a>
            <a href="#about" onClick={toggleMenu}>01. About</a>
            <a href="#skills" onClick={toggleMenu}>02. Skills</a>
            <a href="#projects" onClick={toggleMenu}>03. Projects</a>
            <a href="#contact" onClick={toggleMenu}>04. Contact</a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

