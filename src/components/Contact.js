import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Contact({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const inputClass = `w-full p-2 ${theme === 'dark' ? 'bg-[#3c3c3c] text-[#d4d4d4]' : 'bg-white text-[#333333]'} border border-[#007acc] rounded`;

  return (
    <div className={`p-6 ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#333333]'}`}>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="text" 
          name="name"
          placeholder="Name" 
          className={inputClass}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          className={inputClass}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea 
          name="message"
          placeholder="Message" 
          className={`${inputClass} h-32`}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button 
          type="submit" 
          className="px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#005999] transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
      <div className="mt-6 flex justify-center space-x-4">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#007acc]">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#007acc]">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#007acc]">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
}

export default Contact;
