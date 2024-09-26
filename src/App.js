import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import ActivityBar from './components/ActivityBar';
import TabBar from './components/TabBar';

function App() {
    const [activeTab, setActiveTab] = useState('Home');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [theme, setTheme] = useState('dark');
    const tabs = ['Home', 'About', 'Projects', 'Contact', 'GitHub', 'Terminal'];

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-[#1e1e1e] text-[#d4d4d4]' : 'bg-white text-black'}`}>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} theme={theme} toggleTheme={toggleTheme} />
            <div className="flex flex-1 overflow-hidden">
                <ActivityBar theme={theme} />
                {sidebarOpen && <Sidebar setActiveTab={setActiveTab} theme={theme} />}
                <div className="flex flex-col flex-1">
                    <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />
                    <MainContent activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />
                </div>
            </div>
        </div>
    );
}

export default App;