import React from 'react';
import { LuLightbulb } from "react-icons/lu";
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import Animation from './lottiefiles/skills.lottie';

const skillsData = {
  softwareToolsIcons: [
    "https://skillicons.dev/icons?i=figma",
    "https://skillicons.dev/icons?i=azure",
    "https://skillicons.dev/icons?i=visualstudio",
    "https://skillicons.dev/icons?i=selenium",
    "https://skillicons.dev/icons?i=vscode",
    "https://skillicons.dev/icons?i=github",
    "https://skillicons.dev/icons?i=docker",
    "https://skillicons.dev/icons?i=discord",
    "https://skillicons.dev/icons?i=pycharm"

  ],
  softwareToolsText: [
    "MobileIron", 
    "Putty", 
    "Filezilla", 
    "SQL Server Management Studio", 
    "TeamViewer", 
    "StarUML", 
    "VMware vSphere", 
    "Cisco-Technologien", 
    "Trello", 
    "RStudio"
  ],
  databasesIcons: [
    "https://skillicons.dev/icons?i=mongodb",
    "https://skillicons.dev/icons?i=mysql",
    "https://skillicons.dev/icons?i=firebase"

  ],
  databasesText: [
     "MariaDB", "SQL", "Data Science", "Data Engineering", 
    "Datenvisualisierung", "Datenanalyse"
  ],
  programmingIcons: [
    "https://skillicons.dev/icons?i=python",
    "https://skillicons.dev/icons?i=javascript",
    "https://skillicons.dev/icons?i=nodejs",
    "https://skillicons.dev/icons?i=angular",
    "https://skillicons.dev/icons?i=css",
    "https://skillicons.dev/icons?i=html",
    "https://skillicons.dev/icons?i=npm",
    "https://skillicons.dev/icons?i=r",


  ],


  methods: [
    "Machine Learning", "Machine Learning Algorithms", "Agile Methods", "Scrum", 
    "Agile Application Development", "Frontend Development", "Programming", 
    "Object-Oriented Programming (OOP)", "Unified Modeling Language (UML)"
  ],
  generalSkills: [
    "Microsoft Office Suite", 
    "Excel (Advanced)", 
    "Presentation Skills", 
    "Project Management"
  ]
};

const skills = () => {
  const renderIcons = (icons) =>
    icons.map((src, index) => (
      <img
        key={index}
        src={src}
        alt=""
        style={{ width: 45, height: 45 , marginTop: 8, marginBottom: 8 }}
        className="inline md:pb-3 mr-2"
      />
    ));

  const renderTextList = (items) =>
    items.map((item, index) => (
      <li key={index} className="text-sm font-semibold mb-1">{item}</li>
    ));

  return (
    <div className="md:p-22 md:pt-24 p-8 flex justify-between md:pb-22 md:px-40 md:h-full select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] md:mt-0 mt-6 pt-16">
      <div>
        <div className="md:w-6/12">
          <div className="md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6">
            <LuLightbulb className="md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px" size={22} />
            <span className="text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-0 md:-top-0 -top-1 md:pb-0">My Skills</span>
          </div>
        </div>
<div>
  <h1 className="font-poppins text-4xl font-medium">
    My <span className="bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent">Technical</span>
    <br className="md:block hidden" /> Experience/<span className="md:hidden block"> </span>Skills.
  </h1>
  <hr className="md:w-44 w-32 md:mb-6 mb-6 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]" />
</div>


        {/* Software Tools and Platforms Block */}
        <div className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm">
          <h1 className="md:font-semibold font-bold md:text-2xl mb-2">Software Tools and Platforms</h1>
          <div className="mb-4 flex flex-wrap">{renderIcons(skillsData.softwareToolsIcons)}</div>
          <ul className="list-disc list-inside ml-5 mt-2">
            {renderTextList(skillsData.softwareToolsText)}
          </ul>
        </div>

        {/* Databases and Data Tools Block */}
        <div className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm">
          <h1 className="md:font-semibold font-bold md:text-2xl mb-2">Databases and Data Tools</h1>
          <div className="mb-4 flex flex-wrap">{renderIcons(skillsData.databasesIcons)}</div>
          <ul className="list-disc list-inside ml-5 mt-2">
            {renderTextList(skillsData.databasesText)}
          </ul>
        </div>

        {/* Programming Languages and Frameworks Block */}
        <div className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm">
          <h1 className="md:font-semibold font-bold md:text-2xl mb-2">Programming Languages and Frameworks</h1>
          <div className="mb-4 flex flex-wrap">{renderIcons(skillsData.programmingIcons)}</div>

        </div>

        {/* Methods and Techniques Block */}
        <div className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm">
          <h1 className="md:font-semibold font-bold md:text-2xl mb-2">Methods and Techniques</h1>
          <ul className="list-disc list-inside ml-5 mt-2">
            {renderTextList(skillsData.methods)}
          </ul>
        </div>

        {/* General Skills and Abilities Block */}
        <div className="border border-gray-300 rounded-lg p-4 mb-6 shadow-sm">
          <h1 className="md:font-semibold font-bold md:text-2xl mb-2">General Skills and Abilities</h1>
          <ul className="list-disc list-inside ml-5 mt-2">
            {renderTextList(skillsData.generalSkills)}
          </ul>
        </div>
      </div>

{/* Animationsbereich */}
<div className="lg:block hidden w-full h-auto lg:absolute lg:top-40 lg:right-20 lg:w-1/2 lg:h-[500px] lg:mt-4">
  <DotLottiePlayer src={Animation} autoplay loop className="w-full h-full object-cover" />
</div>


    </div>
  );
};

export default skills;
