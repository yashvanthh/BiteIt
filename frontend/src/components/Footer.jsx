import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaSnapchatGhost } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-zinc-900 dark:text-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Bitelt
          </h2>
          <div className="flex gap-2 mb-4">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-10" />
          </div>
          <p className="text-sm">Company # 490039-445, Registered with House of companies.</p>
        </div>

        {/* Newsletter */ }
        <div>
          <h3 className="font-semibold mb-2">Get Exclusive Deals in your Inbox</h3>
          <div className="flex mb-2">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="p-2 w-full rounded-l-md border border-gray-300 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600 transition">Subscribe</button>
          </div>
          <p className="text-xs">
            we won’t spam, read our <a href="#" className="underline">email policy</a>
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaTiktok />
            <FaSnapchatGhost />
          </div>
        </div>

        {/* Legal Pages */ }
        <div>
          <h3 className="font-semibold mb-2">Legal Pages</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:text-orange-500">Terms and conditions</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy</a></li>
            <li><a href="#" className="hover:text-orange-500">Cookies</a></li>
            <li><a href="#" className="hover:text-orange-500">Modern Slavery Statement</a></li>
          </ul>
        </div>

        {/* Important Links */ }
        <div>
          <h3 className="font-semibold mb-2">Important Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:text-orange-500">Get help</a></li>
            <li><a href="#" className="hover:text-orange-500">Add your restaurant</a></li>
            <li><a href="#" className="hover:text-orange-500">Sign up to deliver</a></li>
            <li><a href="#" className="hover:text-orange-500">Create a business account</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */ }
      <div className="bg-gray-900 dark:bg-black text-gray-300 text-sm text-center py-4">
        <p>Bitelt Copyright 2025, All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-2 text-xs flex-wrap">
          <a href="#" className="hover:text-orange-400">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400">Terms</a>
          <a href="#" className="hover:text-orange-400">Pricing</a>
          <a href="#" className="hover:text-orange-400">Do not sell or share my personal information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
