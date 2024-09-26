import React from "react";

const GitHub = () => {
  return (
    <div className="text-[#d4d4d4]">
      <h2 className="text-3xl font-bold mb-4 text-[#ff6b6b]">My GitHub</h2>
      <p className="mb-4">
        Check out my GitHub profile to see more of my projects and
        contributions:
      </p>
      <a
        href="https://github.com/EngineerNoob"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#2d2d2d] text-[#d4d4d4] px-4 py-2 rounded hover:bg-[#3d3d3d] transition-colors"
      >
        Visit My GitHub Profile
      </a>
      <p className="mt-4">
        Here you'll find a collection of my personal projects, contributions to
        open-source, and experiments with various technologies.
      </p>
    </div>
  );
};

export default GitHub;
