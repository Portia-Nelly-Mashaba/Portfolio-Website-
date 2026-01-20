import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { MdSchool } from "react-icons/md";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Software Development",
      institution: "Mlab CodeTribe",
      location: "Tembisa, South Africa",
      period: "2024 - 2025",
      description: "Intensive full-stack development program focusing on React, React Native, Node.js, and modern web technologies",
    },
  ];

  return (
    <div id="education" className="max-w-containerSmaller mx-auto py-20 lg:py-24">
      <SectionTitle title="Education" titleNo="02a" />
      <div className="mt-10 flex flex-col gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#112240] flex items-center justify-center text-textGreen">
                <MdSchool className="text-xl" />
              </div>
              {index !== education.length - 1 && (
                <div className="w-[2px] h-full bg-[#233554] mt-2"></div>
              )}
            </div>
            <div className="flex-1 pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-titleFont font-semibold text-textLight">
                    {edu.degree}
                  </h3>
                  <p className="text-textGreen font-medium">{edu.institution}</p>
                  <p className="text-sm text-textDark">{edu.location}</p>
                </div>
                <span className="text-sm text-textGreen font-medium whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              <p className="text-sm text-textDark mt-2">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
