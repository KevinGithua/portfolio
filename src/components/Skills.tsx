"use client";

import React from "react";
import { BsCheck2Circle } from "react-icons/bs"; // Importing the icon

interface Skill {
  title: string;
  description: string;
}

const skillsData = {
  frontend: [
    { title: "HTML", description: "Structure web content with semantic markup." },
    { title: "JavaScript", description: "Add interactivity and dynamic behavior." },
    { title: "React", description: "Build user interfaces with reusable components." },
    { title: "TypeScript", description: "Enhance JavaScript with type safety." },
    { title: "Tailwind CSS", description: "A utility-first CSS framework for rapid design." },
  ],
  backend: [
    { title: "Node.js", description: "JavaScript runtime for server-side applications." },
    { title: "Express", description: "Fast web framework for building APIs." },
    { title: "MongoDB", description: "NoSQL database for flexible data management." },
    { title: "SQL", description: "Language for managing relational databases." },
    { title: "Firebase", description: "Backend as a Service for rapid app development." },
  ],
};

const SkillItem: React.FC<Skill> = ({ title, description }) => (
  <li className="flex items-start">
    {/* New Icon */}
    <BsCheck2Circle className="text-accent text-2xl mr-2" /> 
    <div className="text-left text-base">
      <strong className="text-primary text-xl">{title}:</strong> {description}
    </div>
  </li>
);

const SkillsComponent: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 drop-shadow-md text-accent">My Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        {/* Front-End Development Card */}
        <div className="p-6 sm:p-8 rounded-lg shadow-lg transition-transform transform sm:hover:scale-105 duration-300 ease-in-out">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 border-b-2 border-secondary pb-2">Front-End Development</h3>
          <ul className="text-base sm:text-lg space-y-4">
            {skillsData.frontend.map((skill, index) => (
              <SkillItem key={index} title={skill.title} description={skill.description} />
            ))}
          </ul>
        </div>

        {/* Back-End Development Card */}
        <div className="p-6 sm:p-8 rounded-lg shadow-lg transition-transform transform sm:hover:scale-105 duration-300 ease-in-out">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 border-b-2 border-secondary pb-2">Back-End Development</h3>
          <ul className="text-base sm:text-lg space-y-4">
            {skillsData.backend.map((skill, index) => (
              <SkillItem key={index} title={skill.title} description={skill.description} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
