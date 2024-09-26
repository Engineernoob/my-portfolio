import React from 'react';

const Home = ({ setActiveTab }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white animate-fade-in-down">Taahirah Denmark</h1>
      <h2 className="text-2xl md:text-3xl mb-8 text-[#d4d4d4] animate-fade-in-up">Software Engineer</h2>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
        <button 
          onClick={() => setActiveTab('Projects')} 
          className="bg-[#ff6b6b] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors transform hover:scale-105"
        >
          View Work
        </button>
        <button 
          onClick={() => setActiveTab('Contact')}
          className="border-2 border-[#ff6b6b] text-[#ff6b6b] px-8 py-3 rounded-full hover:bg-[#ff6b6b] hover:text-white hover:bg-opacity-10 transition-colors transform hover:scale-105"
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Home;