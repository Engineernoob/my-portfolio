import React from 'react';

const Contact = () => {
  return (
    <div className="text-[#d4d4d4]">
      <h2 className="text-3xl font-bold mb-4 text-[#ff6b6b]">Contact Me</h2>
      <p className="mb-4">
        I'm always open to new opportunities and collaborations. Feel free to reach out to me!
      </p>
      <ul className="list-none">
        <li className="mb-2">
          <span className="font-bold">Email:</span> t.denmark@outlook.com
        </li>
        <li className="mb-2">
          <span className="font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/yourprofile" className="text-[#007acc] hover:underline">linkedin.com/in/yourprofile</a>
        </li>
        <li className="mb-2">
          <span className="font-bold">GitHub:</span> <a href="https://github.com/EngineerNoob" className="text-[#007acc] hover:underline">github.com/EngineerNoob</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
