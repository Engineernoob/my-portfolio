import React from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ProjectCard = ({ title, description, technologies, github, demo, codeSnippet, theme }) => {
    const cardVariants = {
        hover: { 
            scale: 1.03,
            boxShadow: "0px 3px 3px rgba(0,0,0,0.15)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        },
        tap: { 
            scale: 0.98,
            boxShadow: "0px 0px 0px rgba(0,0,0,0.15)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    };

    return (
        <motion.div 
            variants={cardVariants}
            whileHover="hover"
            whileTap="tap"
            className={`${theme === 'dark' ? 'bg-[#2d2d2d] text-[#d4d4d4]' : 'bg-white text-black'} p-6 rounded-lg shadow-lg transition-all duration-300`}
        >
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-[#ff6b6b]' : 'text-[#007acc]'}`}>{title}</h3>
            <p className="mb-4">{description}</p>
            <div className="mb-4">
                {technologies.map((tech, index) => (
                    <span key={index} className={`inline-block ${theme === 'dark' ? 'bg-[#333333] text-[#d4d4d4]' : 'bg-[#f3f3f3] text-black'} px-2 py-1 rounded mr-2 mb-2 text-sm`}>
                        {tech}
                    </span>
                ))}
            </div>
            {codeSnippet && (
                <SyntaxHighlighter language="javascript" style={theme === 'dark' ? vscDarkPlus : vs}>
                    {codeSnippet}
                </SyntaxHighlighter>
            )}
            <div className="flex space-x-4 mt-4">
                <a href={github} target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#007acc]' : 'text-[#0000ff]'} hover:underline`}>GitHub</a>
                <a href={demo} target="_blank" rel="noopener noreferrer" className={`${theme === 'dark' ? 'text-[#007acc]' : 'text-[#0000ff]'} hover:underline`}>Live Demo</a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;