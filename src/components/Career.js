import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { MdWork, MdSchool } from "react-icons/md";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Siyakha Consulting — Sandton (Remote)",
    period: "May 2024 - November 2025",
    summary:
      "Full-stack delivery with Laravel, PHP, SQL, and REST APIs; CI/CD, deployment automation, Agile delivery.",
    bullets: [
      "Built full-stack features with Laravel/PHP, SQL, and integrated external APIs.",
      "Implemented CI/CD pipelines, automated deployments, and environment configuration.",
      "Delivered responsive apps with PWA functionality; performed QA testing, debugging, and code reviews.",
      "Collaborated in Agile teams using Git and Jira to ship production-ready solutions.",
    ],
  },
  {
    id: 2,
    role: "Mobile & Web Developer",
    company: "Mlab CodeTribe — Tembisa",
    period: "July 2024 - March 2025",
    summary:
      "React.js/React Native and Node.js builds with Firebase; REST APIs, microservices mindset, PWA exposure.",
    bullets: [
      "Developed full-stack apps using React.js, React Native, Node.js, and Firebase.",
      "Focused on REST API integrations and scalable, responsive design with microservices principles.",
      "Participated in Agile ceremonies (sprints, stand-ups) to deliver production-ready features.",
    ],
  },
  {
    id: 3,
    role: "Freelance Web & Mobile Developer",
    company: "Tshikamisava Holdings — Remote",
    period: "November 2020 - April 2024",
    summary:
      "Python/Django, React.js, Angular, React Native, Node.js, Flutter; PWA features; SQL/NoSQL.",
    bullets: [
      "Shipped full-stack web and mobile solutions with Python, Django, React.js, Angular, React Native, Node.js, and Flutter.",
      "Integrated REST APIs/SDKs and PWA features to enhance UX across devices.",
      "Worked with SQL/NoSQL databases and microservices design; delivered unit, integration, and functional testing.",
    ],
  },
  {
    id: 4,
    role: "Help Desk Agent / IT Development",
    company: "Ram Courier Transport — Isando",
    period: "August 2015 - September 2020",
    summary:
      "First-line support, mobile app support, testing, data analysis, SQL/SSRS reporting, .NET/Python apps.",
    bullets: [
      "Supported mobile app development and IT systems; created SQL reports with SSRS.",
      "Assisted .NET (C#) and Python-based applications; integrated APIs for reporting solutions.",
      "Handled bug tracking/validation, QA testing, and smooth deployments.",
    ],
  },
];

const education = [
  {
    id: 1,
    title: "ProDev Back-End Developer",
    institution: "ALX Africa",
    period: "2025",
    details:
      "Advanced SQL, Python (async/generators/decorators), Pytest, CI/CD (GitHub Actions, Jenkins), Docker/Kubernetes, microservices, Redis, GraphQL, security best practices.",
  },
  {
    id: 2,
    title: "Diploma in Information Technology",
    institution: "University of South Africa (UNISA)",
    period: "2025 – 2027",
    details: "Majors: Software Development and System Design.",
  },
  {
    id: 3,
    title: "Software Development Certificate",
    institution: "Power Learn Project",
    period: "2022 – 2023",
    details:
      "Python & Django, SQL/NoSQL databases, Flutter/Dart, HTML, CSS, JavaScript.",
  },
  {
    id: 4,
    title: "NCV Certificates in Software Development",
    institution: "Ekurhuleni West College",
    period: "2011 – 2013",
    details: "Majors: Software Development and ICT.",
  },
];

const Career = () => {
  const [tab, setTab] = useState("experience");

  return (
    <div
      id="career"
      className="max-w-containerSmaller mx-auto py-20 lg:py-24 flex flex-col gap-10"
    >
      <SectionTitle title="Experience & Education" titleNo="02a" />

      <div className="flex flex-col lg:flex-row lg:items-start gap-8">
        {/* Tabs */}
        <div className="flex lg:flex-col gap-3 w-full lg:w-52">
          <button
            onClick={() => setTab("experience")}
            className={`text-left px-4 py-3 rounded-md border ${
              tab === "experience"
                ? "border-textGreen text-textGreen bg-hoverColor/30"
                : "border-[#233554] text-textDark hover:border-textGreen"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setTab("education")}
            className={`text-left px-4 py-3 rounded-md border ${
              tab === "education"
                ? "border-textGreen text-textGreen bg-hoverColor/30"
                : "border-[#233554] text-textDark hover:border-textGreen"
            }`}
          >
            Education
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {tab === "experience" &&
            experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 border border-[#233554] rounded-lg bg-[#0b1c33]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-textGreen">
                    <MdWork className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-titleFont font-semibold text-textLight">
                          {exp.role}
                        </h3>
                        <p className="text-textGreen font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-textGreen font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-textDark mt-2">{exp.summary}</p>
                    <ul className="mt-3 flex flex-col gap-2">
                      {exp.bullets.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-textDark flex gap-2"
                        >
                          <span className="text-textGreen mt-1">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

          {tab === "education" &&
            education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 border border-[#233554] rounded-lg bg-[#0b1c33]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-textGreen">
                    <MdSchool className="text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-titleFont font-semibold text-textLight">
                          {edu.title}
                        </h3>
                        <p className="text-textGreen font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-sm text-textGreen font-medium whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-textDark mt-2">{edu.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
