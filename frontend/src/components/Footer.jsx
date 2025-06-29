import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from "react-icons/fi";
import logo from "../assets/logo3.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer className="bg-gray-100 dark:bg-[#111827] text-gray-800 dark:text-white pt-10 pb-6 px-6 md:px-20 relative transition-colors duration-300">
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#1f2937] p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-orange-500 mb-2">
              Thank you for subscribing!
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We’ll keep you updated with the latest deals and offers.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 z-0">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="Bitelt Logo"
              className="w-22 h-12 rounded-full"
            />
            <h1 className="text-2xl font-bold text-orange-500">Bitelt</h1>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Satisfying your cravings with every bite. Fresh, fast, and flavorful
            meals delivered to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-orange-500">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl text-gray-600 dark:text-gray-300">
            <a href="#" className="hover:text-orange-500">
              <FiFacebook />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FiInstagram />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-orange-500">
              <FiMail />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Get the latest food deals and updates.
          </p>
          <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-300 dark:border-gray-600"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-orange-500 font-semibold">Bitelt</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
