import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="py-10 px-4 mt-20 lg:px-16 min-h-screen bg-white text-gray-800 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Inner Container */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-500">Connect</span> with Our Team of Experts
          </h2>
          <p className="mb-6">
            Contact our team of excellence-driven experts today to bring your project to life.
          </p>
          <ul className="text-sm space-y-2">
            <li>📞 713.953.5200</li>
            <li>✉️ lja@lja.com</li>
            <li>📍 See Our Locations</li>
          </ul>
          <div className="mt-8">
            <p className="font-medium mb-2">Want to Join Our Talented Team?</p>
            <a href="/join" className="text-blue-600 underline hover:text-blue-800 dark:hover:text-blue-400">
              Visit our job board
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
      
    </div>
    
  );
};

export default Contact;
