import React from "react";
import { FaReact, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';

function About({ theme }) {
  const skills = [
    { name: 'React', icon: FaReact, level: 90 },
    { name: 'JavaScript', icon: FaJs, level: 85 },
    { name: 'HTML5', icon: FaHtml5, level: 95 },
    { name: 'CSS3', icon: FaCss3, level: 90 },
  ];

  return (
    <div className={`p-6 ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#333333]'}`}>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-6">
        Hi there! I'm Taahirah Denmark, a passionate software engineer with a love for creating 
        intuitive and visually appealing user interfaces. My journey in tech started with a 
        curiosity for how things work, which led me to dive deep into web development.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map(({ name, icon: Icon, level }) => (
            <div key={name} className="flex items-center">
              <Icon className="w-6 h-6 mr-2" />
              <span className="w-24">{name}</span>
              <div className="flex-grow bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
