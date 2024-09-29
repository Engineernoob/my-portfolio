import React from 'react';
import { FaFolder, FaSearch, FaBox, FaCog } from 'react-icons/fa';

const ActivityBar = ({ theme }) => {
    const iconClass = `text-xl mb-6 transition-colors duration-200 ${theme === 'dark' ? 'text-[#d4d4d4] hover:text-white' : 'text-[#333333] hover:text-[#007acc]'}`;

    return (
        <div className={`w-16 flex flex-col items-center py-6 ${theme === 'dark' ? 'bg-[#252526]' : 'bg-[#f3f3f3]'}`}>
            <button className={iconClass} aria-label="Files">
                <FaFolder />
            </button>
            <button className={iconClass} aria-label="Search">
                <FaSearch />
            </button>
            <button className={iconClass} aria-label="Extensions">
                <FaBox />
            </button>
            <button className={iconClass} aria-label="Settings">
                <FaCog />
            </button>
        </div>
    );
};

export default ActivityBar;