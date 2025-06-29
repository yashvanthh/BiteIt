import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPromptModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          Please Log in to Continue
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          You need to login or signup before adding items to your cart.
        </p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
            onClick={() => {
              onClose();
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-400"
            onClick={() => {
              onClose();
              navigate("/signup");
            }}
          >
            Signup
          </button>
        </div>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoginPromptModal;
