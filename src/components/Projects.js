import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "VS Code Portfolio",
      description: "A portfolio website inspired by Visual Studio Code's interface.",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/yourusername/vscode-portfolio",
      demo: "https://codewitht24.netlify.app/"
    },
    {
      title: "AI Personal Assistant",
      description: "An AI-powered personal assistant using natural language processing.",
      technologies: ["Python", "TensorFlow", "NLP"],
      github: "https://github.com/yourusername/ai-assistant",
      demo: "https://your-ai-assistant-demo.com"
    },
    // Add more projects here
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold mb-6 text-[#ff6b6b]">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
