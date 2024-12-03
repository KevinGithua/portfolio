"use client";
import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive and interactive web applications using React, Next.js, and other modern frameworks.",
  },
  {
    title: "Full-Stack Development",
    description:
      "Creating end-to-end solutions by integrating front-end and back-end technologies, including databases and server-side programming.",
  },
  {
    title: "API Development",
    description:
      "Designing and implementing RESTful APIs to facilitate communication between different services and applications.",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting user-friendly interfaces and experiences to enhance user engagement and satisfaction.",
  },
  {
    title: "Code Review & Optimization",
    description:
      "Reviewing existing codebases for optimization, best practices, and performance improvements.",
  },
  {
    title: "Consultation & Support",
    description:
      "Providing expert advice and ongoing support for software projects, from conception to deployment.",
  },
  {
    title: "Machine Learning Integration",
    description:
      "Incorporating machine learning models and solutions to enhance application functionality and intelligence.",
  },
];

const ServicesComponent = () => {
  return (
    <section className="py-8 sm:py-16 px-4 sm:px-6 text-foreground">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10 text-accent">
          My Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="shadow-lg rounded-lg p-6 sm:p-8 bg-background text-foreground transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-primary">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
