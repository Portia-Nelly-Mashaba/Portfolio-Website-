import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full-stack and Mobile Developer",
      company: "Mlab CodeTribe",
      location: "Tembisa, South Africa",
      period: "2024 - 2025",
      type: "Learnership",
      responsibilities: [
        "Developed cross-platform mobile applications using Flutter, React Native, and .NET (C#)",
        "Built responsive web applications using Angular, React.js, and modern frontend technologies",
        "Implemented backend solutions using Python (Django, Flask), Node.js, PHP, and .NET (C#)",
        "Designed and managed SQL databases (MySQL, PostgreSQL, TSQL) and NoSQL databases",
        "Collaborated in Agile teams, participated in code reviews, and followed best practices",
      ],
    },
  ];

  return (
    <div id="experience" className="max-w-containerSmaller mx-auto py-20 lg:py-24">
      <SectionTitle title="Work Experience" titleNo="02b" />
      <div className="mt-10 flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#112240] flex items-center justify-center text-textGreen">
                <MdWork className="text-xl" />
              </div>
              {index !== experiences.length - 1 && (
                <div className="w-[2px] h-full bg-[#233554] mt-2"></div>
              )}
            </div>
            <div className="flex-1 pb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-titleFont font-semibold text-textLight">
                    {exp.title}
                  </h3>
                  <p className="text-textGreen font-medium">{exp.company}</p>
                  <p className="text-sm text-textDark">{exp.location} • {exp.type}</p>
                </div>
                <span className="text-sm text-textGreen font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-4 flex flex-col gap-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-sm text-textDark flex gap-2">
                    <span className="text-textGreen mt-1">▹</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
