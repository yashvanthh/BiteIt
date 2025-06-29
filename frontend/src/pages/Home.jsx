import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import AboutUs from "./About";
import Contact from "./Contact";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { isLoggedIn } = useAuth();
  const [showOrderPopup, setShowOrderPopup] = useState(false);

  useEffect(() => {
    if (isLoggedIn && localStorage.getItem("orderPlaced") === "true") {
      setShowOrderPopup(true);
      localStorage.removeItem("orderPlaced"); // prevent repeated popup
    }
  }, [isLoggedIn]);

  return (
    <>
      <section
        className="relative min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/07/12/83/38/360_F_712833870_OPlItvafwhUSSROSD8MXzcz5w5fTRwRy.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-3xl text-center text-white">
            <h1 className="text-5xl font-extrabold mb-4">
              Welcome to <span className="text-orange-500">Bitelt</span>
            </h1>
            <p className="text-lg sm:text-xl">
              Explore our delicious menu crafted with fresh ingredients and
              passion. Whether you’re craving something spicy, sweet, or savory,
              Bitelt has the perfect dish for you.
            </p>
          </div>
        </div>
      </section>

      <AboutUs />
      <Contact />
      <Footer />

      {showOrderPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <h2 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-4">
              Thank you for your order!
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We’ve received your order and it’s being processed.
            </p>
            <button
              onClick={() => setShowOrderPopup(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
