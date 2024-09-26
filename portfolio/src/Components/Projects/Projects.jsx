// src/components/Projects.js
import React from "react";

function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      description: "A web app to track your expenses with real-time data visualization.",
      link: "https://github.com/yourusername/expense-tracker",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects.",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Pokemon Project",
      description: "A Pokemon project using Vanilla JS, HTML and css.",
      link: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Urvann Clone",
      description: "A UI Clone of e-commerce website using pure HTML and CSS",
      link: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-lg">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
