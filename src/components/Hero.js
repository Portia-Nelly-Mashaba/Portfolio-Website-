import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Portia Mashaba.{" "}
        <span className="text-textDark at-2 lgl:mt-4">
          I build things for mobile and web.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        {" "}
        I'm a versatile software developer with expertise spanning web and mobile
        development, backend systems, and database management. My journey includes
        working with diverse technologies like Python, Flutter, Laravel, React,
        Node.js, and MongoDB. Currently seeking new opportunities where I can
        leverage my broad technical knowledge to build innovative solutions that
        solve real-world problems.
        <br />
        <a href="mailto:pnpnelly@gmail.com">
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            pnpnelly@gmail.com | +27 78 152 6964
            <span className="absolute w-full h-[2px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 translation-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
      <motion.a href="#projects" initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }} className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300 flex items-center justify-center" > Check out my Projects! </motion.a>
    </div>
  );
};

export default Hero;
