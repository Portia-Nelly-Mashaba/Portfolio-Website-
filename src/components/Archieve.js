import React from "react";
import ArchieveCard from "./ArchieveCard";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Archieve = () => {
  const [showMore, setShowMore] = React.useState(false);

  // Projects ordered: Helpdesk, Document Q&A, Dev Notes, Restaurant App, then existing ones
  const initialProjects = [
    {
      title: "Help Desk & FAQ System",
      desc: "A comprehensive help desk and FAQ system that manages customer support tickets, provides automated responses, and maintains a knowledge base for common queries.",
      listItem: ["Laravel", "Blade", "MySQL", "PHP"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/Help-Desk-and-FAQ-System.git",
    },
    {
      title: "Document Q&A System",
      desc: "An intelligent document question and answer system that allows users to upload documents and get instant answers to their questions using AI-powered natural language processing.",
      listItem: ["Python", "AI/ML", "NLP", "Flask"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/Document-QA-System.git",
    },
    {
      title: "Dev Notes",
      desc: "A developer-focused note-taking application designed to help developers organize code snippets, technical documentation, and project notes efficiently.",
      listItem: ["React", "Node.js", "MongoDB", "Express"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/Dev-Notes.git",
    },
    {
      title: "Restaurant App",
      desc: "A restaurant reservation app that allows users to book tables, view menus, and receive personalized dining suggestions, ensuring enjoyable dining experience.",
      listItem: ["ReactNative", "MongoDB", "NodeJS"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/portfolio-of-evidence.git",
    },
  ];

  const additionalProjects = [
    {
      title: "Marketplace App",
      desc: "A user-friendly marketplace app that connects buyers and sellers seamlessly, offering a secure and efficient way to discover, purchase, and sell items with ease.",
      listItem: ["ReactJS", "NodeJS", "MongoDB"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/MERN-e-commerce.git",
    },
    {
      title: "Geo Gallery App",
      desc: "App allows user to capture memories by adding the name, image, and location of places they visit. The app supports CRUD functions, and everything is saved on the database.",
      listItem: ["ReactNative", "CSS", "SQLITE", "Google API"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/Geo-Gallery.git",
    },
    {
      title: "MERN Recipe App",
      desc: "A full-stack recipe app where users can create, view, update, and delete recipes. It ensures efficient data management and a seamless user experience.",
      listItem: ["React Js", "NodeJs", "MongoDB"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/MERN-Recipe-App-.git",
    },
    {
      title: "Library Management System",
      desc: "A Library Management System implemented using MongoDB shell (mongosh), showcasing database creation, collections setup, CRUD operations, and advanced queries.",
      listItem: ["MongoDB", "NodeJs", "ExpressJs"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/Library-Management-System-.git",
    },
    {
      title: "Travel Weather App",
      desc: "A travel weather app predicting 7-day forecasts and suggesting activities based on the weather, ensuring users can make the most of their trips, regardless of the weather conditions.",
      listItem: ["ReactJS", "Google API", "CSS"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/Weather-Based-Travel-Planner-with-API-Integration.git",
    },
    {
      title: "News App",
      desc: "A comprehensive news app featuring categories, search functionality, bookmarking, and social media sharing.",
      listItem: ["ReactJs", "NewsAPI", "ExpressJs"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/News-App.git",
    },
    {
      title: "Quiz Application App",
      desc: "A command-line quiz app with a timer alert. Users can test their knowledge and enjoy a seamless experience.",
      listItem: ["NodeJs", "ExpressJs"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/Node.Js---Quizz-App.git",
    },
    {
      title: "UI Challenge App",
      desc: "A UI challenge app created using CSS and ReactJs, featuring a beautifully designed card component.",
      listItem: ["ReactJs", "CSS"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/Single-price-grid-component.git",
    },
    {
      title: "Tip Calculator App",
      desc: "A tip calculator app that allows users to split the bill among themselves. It ensures accurate calculations and a seamless user experience.",
      listItem: ["ReactJs", "CSS"],
      repoLink: "https://github.com/Portia-Nelly-Mashaba/Code-Tribe.git",
    },
  ];

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <SectionTitle title="Other Projects" titleNo="03a" />
        <p className="text-sm font-titleFont text-textGreen">
          A broader view of shipped work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {initialProjects.map((project) => (
          <ArchieveCard key={project.title} {...project} />
        ))}

        {showMore &&
          additionalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <ArchieveCard {...project} />
            </motion.div>
          ))}
      </div>

      {showMore ? (
        <div className="mt-12 flex items-center justify-center">
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        </div>
      ) : (
        <div className="mt-12 flex items-center justify-center">
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Archieve;
