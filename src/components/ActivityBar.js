import React from 'react';
// ... other imports ...

function ActivityBar({ theme }) {
    return (
        <div className={`w-12 flex-shrink-0 ${theme === 'dark' ? 'bg-[#333333]' : 'bg-[#2c2c2c]'}`}>
            // Consider adding hover effects and tooltips
            <button className="w-full p-2 hover:bg-[#1e1e1e] transition-colors duration-200">
                <FileIcon className="w-6 h-6" />
            </button>
            // Add more activity buttons (e.g., search, git, extensions)
            // ...
        </div>
    );
}

export default ActivityBar;