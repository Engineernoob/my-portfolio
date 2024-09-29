import React from 'react';

function Contact({ theme }) {
  return (
    <div className={`p-6 ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#333333]'}`}>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4">
        // Enhance form fields with better styling
        <input 
          type="text" 
          placeholder="Name" 
          className="w-full p-2 bg-[#3c3c3c] border border-[#007acc] rounded"
        />
        // Add more form fields (email, message)
        // ...
        <button 
          type="submit" 
          className="px-4 py-2 bg-[#007acc] text-white rounded hover:bg-[#005999] transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
      // Add social media links or icons
    </div>
  );
}

export default Contact;
