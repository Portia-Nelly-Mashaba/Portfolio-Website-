import React from "react";
import SectionTitle from "./SectionTitle";
import { AiFillCode } from "react-icons/ai";
import Profile from "./../assets/profile.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-containerSmaller mx-auto py-20 lg:py-24 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Portia Mashaba, and I am a versatile software
            developer with a passion for creating impactful digital solutions
            across multiple platforms and technologies. My expertise spans web
            development, mobile applications, backend systems, and database
            management.
          </p>
          <p>
            I have a strong foundation in{" "}
            <span className="text-textGreen">
              Python, Flutter, Laravel, React, React Native, Node.js, MongoDB,
              MySQL, and various database systems
            </span>
            . This diverse technical background allows me to approach problems
            from multiple angles and choose the best technology stack for each
            project.
          </p>
          <p>
            My experience includes building full-stack applications, RESTful
            APIs, mobile apps with React Native, web applications with React
            and Laravel, and managing databases with MongoDB and MySQL. I'm
            skilled in{" "}
            <span className="text-textGreen">
              software testing, UI/UX design, and end-to-end project
              management
            </span>
            .
          </p>
          <p>
            <span className="text-textGreen">My goal</span> is to continue
            building innovative, scalable solutions while contributing to the
            tech ecosystem. I'm always eager to learn new technologies and
            tackle challenging problems.
          </p>
          <p>Here are some of the technologies I work with:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              Flutter
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              Laravel
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              React.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              React Native
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              MySQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              PHP
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCode />
              </span>{" "}
              Tailwind CSS
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                           <img
                className="rounded-lg h-full w-full object-cover"
                src={Profile}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              {/* <div className="hidden lgl:inline-flex absolute w-full h-80 border-2 border-textGreen rounded-md bottom-0 top-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>            */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
