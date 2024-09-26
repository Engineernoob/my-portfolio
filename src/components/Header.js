import React from "react";

const Header = ({ sidebarOpen, setSidebarOpen, theme, toggleTheme }) => {
  return (
    <header className={`${theme === 'dark' ? 'bg-[#2d2d2d] text-[#d4d4d4]' : 'bg-[#f3f3f3] text-black'} p-2 flex justify-between items-center`}>
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mr-4 focus:outline-none"
        >
          ☰
        </button>
        <span className="hidden sm:inline">File</span>
        <span className="hidden sm:inline ml-4">Edit</span>
        <span className="hidden md:inline ml-4">Selection</span>
        <span className="hidden md:inline ml-4">View</span>
        <span className="hidden lg:inline ml-4">Go</span>
        <span className="hidden lg:inline ml-4">Run</span>
        <span className="hidden xl:inline ml-4">Terminal</span>
        <span className="hidden xl:inline ml-4">Help</span>
      </div>
      <div className="flex items-center">
        <button onClick={toggleTheme} className="mr-4">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <span className="truncate">Taahirah Denmark - Visual Studio Code</span>
      </div>
    </header>
  );
};

export default Header;
