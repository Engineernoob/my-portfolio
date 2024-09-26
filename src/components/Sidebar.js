import React from 'react';

const Sidebar = ({ setActiveTab, theme }) => {
    const handleItemClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <aside className={`w-64 ${theme === 'dark' ? 'bg-[#252526] text-[#d4d4d4]' : 'bg-[#f3f3f3] text-black'} p-4 flex flex-col h-full overflow-auto`}>
            <h2 className={`${theme === 'dark' ? 'text-[#d7ba7d]' : 'text-[#007acc]'} mb-4 uppercase font-bold text-sm`}>Explorer</h2>
            <ul className="flex-grow">
                <li className="mb-2">
                    <span className="text-[#d7ba7d] mr-2">▶</span> 
                    <span className="uppercase text-sm">Portfolio</span>
                </li>
                {['Home', 'About', 'Projects', 'Contact', 'GitHub', 'Terminal'].map((item, index) => (
                    <li key={index} className="ml-4 mb-1 cursor-pointer hover:bg-[#2a2d2e] p-1 rounded" onClick={() => handleItemClick(item)}>
                        <span className="mr-2">📄</span>
                        <span className={`${
                            item === 'About' ? 'text-[#e37933]' :
                            item === 'Projects' ? 'text-[#cbcb41]' :
                            'text-[#519aba]'
                        }`}>{item}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;