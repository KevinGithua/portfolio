"use client";

import React from "react";

const projects = [
  {
    title: "Resumer",
    description:
      "A resume writing and job application assistance platform that provides services such as resume writing, cover letter writing, and LinkedIn profile optimization.",
    link: "https://yourresumerlink.com", // Update with the actual link
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my skills, projects, and services as a software developer.",
    link: "https://yourportfolio.com", // Update with the actual link
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with React and Node.js, featuring user authentication, product management, and a shopping cart.",
    link: "https://yourecommerceplatform.com", // Update with the actual link
  },
  {
    title: "Blogging Platform",
    description:
      "A blogging platform that allows users to create, edit, and share their blogs with built-in commenting and user authentication.",
    link: "https://yourblogplatform.com", // Update with the actual link
  },
  {
    title: "Task Manager",
    description:
      "A task management application for tracking and organizing tasks, built with React and Firebase for real-time updates.",
    link: "https://yourtaskmanager.com", // Update with the actual link
  },
  {
    title: "Weather App",
    description:
      "A weather forecasting application that fetches real-time data from a weather API, providing users with current and future weather information.",
    link: "https://yourweatherapp.com", // Update with the actual link
  },
];

const ProjectSection: React.FC = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl text-accent sm:text-4xl font-bold mb-8 drop-shadow-md">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg transition-transform hover:scale-105 duration-300 ease-in-out">
            <h3 className="text-2xl text-primary font-semibold mb-2">{project.title}</h3>
            <p className="text-lg mb-4">{project.description}</p>
            <a
              href={project.link}
              className="font-bold text-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
