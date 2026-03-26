import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaGooglePlay, FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* LOGO + DESC */}
        <div>
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <FaGooglePlay className="text-green-500" /> AppStore
          </h2>
          <p className="mt-4 text-sm leading-6">
            Discover, install and manage trending apps easily.  
            Your trusted marketplace for modern applications.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">Apps</li>
            <li className="hover:text-green-400 cursor-pointer">Installed Apps</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CATEGORY */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-green-400 cursor-pointer">Productivity</li>
            <li className="hover:text-green-400 cursor-pointer">Social</li>
            <li className="hover:text-green-400 cursor-pointer">Games</li>
            <li className="hover:text-green-400 cursor-pointer">Education</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaGithub className="hover:text-white cursor-pointer" />
            <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
     <div className="border-t border-gray-700 text-center py-4 text-sm flex items-center justify-center gap-2">
  <FaCopyright /> 
  <span>2026 AppStore. All rights reserved.</span>
</div>
    </footer>
  );
};

export default Footer;