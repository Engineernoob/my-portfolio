import React from 'react';

const TabBar = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="flex bg-[#2d2d2d] text-[#d4d4d4] overflow-x-auto">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`px-4 py-2 cursor-pointer whitespace-nowrap ${activeTab === tab ? 'bg-[#1e1e1e] border-t-2 border-[#007acc]' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};

export default TabBar;