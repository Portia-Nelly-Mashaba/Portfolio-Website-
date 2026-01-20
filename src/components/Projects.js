import React from "react";
import SectionTitle from "./SectionTitle";
import Hotel from "./../assets/hotel-app.png";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import Recipe from "./../assets/recipe-app.png";
import ShoppingList from "./../assets/shoppingList-app.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Featured Projects" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {" "}
          {/* items-center justify-center */}
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Portia-Nelly-Mashaba/Hotel-App-v2.git"
              target="_blank"
              alt="Hotel-App"
            >
              <div>
                <img
                  className="w-full h-full object-contain"
                  src={Hotel}
                  alt="Hotel-App"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Hotel Booking App</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A hotel booking app that allows users to book a hotel room and
                select the number of guests. Add your account with{""}
                <span className="text-textGreen"> 0-auth</span> and make a
                payment using <span className="text-textGreen">Stripe</span>.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React Js</li>
                <li>Tailwind CSS</li>
                <li>Firebase</li>
                <li>Email JS</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Portia-Nelly-Mashaba/Hotel-App-v2.git"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Portia-Nelly-Mashaba/Hotel-App-v2.git"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Projects two */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Portia-Nelly-Mashaba/MERN-Recipe-App-.git"
              target="_blank"
              alt="Hotel-App"
            >
              <div>
                <img
                  className="w-full h-full object-contain"
                  src={Recipe}
                  alt="Recipe-App"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right  z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Recipe App</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                With this app, users can easily{" "}
                <span className="text-textGreen">
                  create, view, update, and delete
                </span>
                recipes. The app's user-friendly interface ensures a seamless
                experience in organizing and accessing{" "}
                <span className="text-textGreen">recipe</span> information.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React Js</li>
                <li>Bootstrap</li>
                <li>MongoDB</li>
                <li>Node JS</li>
                <li>Express JS</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Portia-Nelly-Mashaba/New-Recipe-App.git"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Portia-Nelly-Mashaba/New-Recipe-App.git"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Projects three */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {" "}
          {/* items-center justify-center */}
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://github.com/Portia-Nelly-Mashaba/Redux-Shopping-List.git"
              target="_blank"
              alt="MERN Recipe-App"
            >
              <div>
                <img
                  className="w-full h-full object-contain"
                  src={ShoppingList}
                  alt="Shopping List-App"
                />
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Shopping List App</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                A shopping list app that helps users organize their purchases by
                categories, and track items,
                ensuring a <span className="text-textGreen">convenient and efficient </span>shopping experience.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React Js</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>REST API</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Portia-Nelly-Mashaba/Redux-Shopping-List.git"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/Portia-Nelly-Mashaba/Redux-Shopping-List.git"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
