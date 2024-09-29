import React from "react";

function About({ theme }) {
  return (
    <div className={`p-6 ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#333333]'}`}>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        // Add a more personal and engaging description
        Hi there! I'm a passionate web developer with a love for creating 
        intuitive and visually appealing user interfaces. My journey in 
        tech started with...
      </p>
      // Consider adding a skills section with progress bars or tags
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">Skills</h3>
        // Add skill tags or progress bars here
      </div>
    </div>
  );
}

export default About;
