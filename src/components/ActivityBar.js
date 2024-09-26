import React from 'react';

const ActivityBar = () => {
    return (
        <div className="w-12 bg-[#333333] flex flex-col items-center py-4">
            <button className="mb-4 text-[#d4d4d4] hover:text-white">📁</button>
            <button className="mb-4 text-[#d4d4d4] hover:text-white">🔍</button>
            <button className="mb-4 text-[#d4d4d4] hover:text-white">📦</button>
            <button className="mb-4 text-[#d4d4d4] hover:text-white">⚙️</button>
        </div>
    );
};

export default ActivityBar;