import React, { useState, useEffect, useRef } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to Taahirah Denmark\'s portfolio terminal!', 'Type "help" for a list of commands.']);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    processCommand(input);
    setInput('');
  };

  const processCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    let response = '';

    switch (command) {
      case 'help':
        response = 'Available commands: about, skills, projects, contact, clear';
        break;
      case 'about':
        response = 'Taahirah Denmark - Aspiring AI/ML Engineer with a strong foundation in software development.';
        break;
      case 'skills':
        response = 'Skills: JavaScript, React, Python, Machine Learning, AI';
        break;
      case 'projects':
        response = 'Projects: VS Code Portfolio, AI Personal Assistant, NLP Experiments';
        break;
      case 'contact':
        response = 'Email: t.denmark@outlook.com | GitHub: github.com/EngineerNoob';
        break;
      case 'clear':
        setOutput([]);
        return;
      default:
        response = `Command not recognized: ${command}. Type "help" for a list of commands.`;
    }

    setOutput(prev => [...prev, `> ${cmd}`, response]);
  };

  return (
    <div className="bg-[#1e1e1e] text-[#d4d4d4] p-4 font-mono h-full overflow-auto">
      {output.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      <form onSubmit={handleInputSubmit} className="mt-2">
        <span className="text-[#569cd6]">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          ref={inputRef}
          className="bg-transparent border-none outline-none ml-2 w-full"
        />
      </form>
    </div>
  );
};

export default Terminal;
