import React from 'react';
import { FaFolder, FaSearch, FaBox, FaCog } from 'react-icons/fa';

const ActivityBar = ({ theme, activeTab }) => {
    const iconClass = `text-xl mb-6 transition-colors duration-200 relative ${theme === 'dark' ? 'text-[#d4d4d4] hover:text-white' : 'text-[#333333] hover:text-[#007acc]'}`;
    const activeClass = `before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 ${theme === 'dark' ? 'before:bg-white' : 'before:bg-[#007acc]'}`;

    const icons = [
        { name: 'Files', icon: FaFolder, tab: 'Home' },
        { name: 'Search', icon: FaSearch, tab: 'Search' },
        { name: 'Extensions', icon: FaBox, tab: 'Projects' },
        { name: 'Settings', icon: FaCog, tab: 'Contact' }
    ];

    return (
        <div className={`w-16 flex flex-col items-center py-6 ${theme === 'dark' ? 'bg-[#252526]' : 'bg-[#f3f3f3]'}`}>
            {icons.map(({ name, icon: Icon, tab }) => (
                <button 
                    key={name}
                    className={`${iconClass} ${activeTab === tab ? activeClass : ''}`}
                    aria-label={name}
                    title={name}
                >
                    <Icon />
                </button>
            ))}
        </div>
    );
};

export default ActivityBar;