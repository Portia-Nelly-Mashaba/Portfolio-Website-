import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import Frontend from "./skills/Frontend";
import Backend from "./skills/Backend";
import Mobile from "./skills/Mobile";
import Databases from "./skills/Databases";
import DevOps from "./skills/DevOps";
import Testing from "./skills/Testing";
import Tools from "./skills/Tools";
import Other from "./skills/Other";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div id="skills" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="My Skills" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => handleCategoryChange("frontend")}
            className={`${
                activeCategory === "frontend"
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Frontend
          </li>
          <li
            onClick={() => handleCategoryChange("backend")}
            className={`${
                activeCategory === "backend"
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Backend
          </li>
          <li
            onClick={() => handleCategoryChange("mobile")}
            className={`${
                activeCategory === "mobile"
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Mobile
          </li>
          <li
            onClick={() => handleCategoryChange("databases")}
            className={`${
                activeCategory === "databases"
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Databases
          </li>
          <li
            onClick={() => handleCategoryChange("devops")}
            className={`${
                activeCategory === "devops"
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            DevOps
          </li>
          <li
            onClick={() => handleCategoryChange("testing")}
            className={`${
                activeCategory === "testing"
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Testing
          </li>
          <li
            onClick={() => handleCategoryChange("tools")}
            className={`${
                activeCategory === "tools"
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Tools
          </li>
          <li
            onClick={() => handleCategoryChange("other")}
            className={`${
                activeCategory === "other"
                  ? "border-l-2 border-l-textGreen text-textGreen"
                  : "border-l-2 border-l-hoverColor text-textDark"
              } bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Other
          </li>
        </ul>
        {activeCategory === "frontend" && <Frontend />}
        {activeCategory === "backend" && <Backend />}
        {activeCategory === "mobile" && <Mobile />}
        {activeCategory === "databases" && <Databases />}
        {activeCategory === "devops" && <DevOps />}
        {activeCategory === "testing" && <Testing />}
        {activeCategory === "tools" && <Tools />}
        {activeCategory === "other" && <Other />}
      </div>
    </div>
  );
};

export default Skills;
