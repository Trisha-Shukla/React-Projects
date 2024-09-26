// src/components/Skills.js
import React from "react";

function Skills() {
  const skills = ["JavaScript", "React", "Node.js", "Tailwind CSS", "HTML", "CSS"];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center ">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-800 text-white px-4 py-2 rounded-lg">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
