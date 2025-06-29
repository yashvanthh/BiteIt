import React from "react";
import { useNavigate } from "react-router-dom";
import cookImage from "../assets/cook.jpg";
import aboutImage from "../assets/poster.jpg"; 


const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[90vh]">
        <img
          src={cookImage}
          alt="Chef cooking"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-orange-400">Bitelt</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            We are passionate about delivering delicious meals right to your
            doorstep. With a focus on quality, speed, and taste, Bitelt brings
            your cravings to life!
          </p>
          <p className="mt-4 text-gray-300 max-w-2xl">
            Our mission is to connect people with their favorite local
            restaurants and provide an unforgettable food delivery experience.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 bg-orange-500 text-white py-8 px-4 flex flex-col md:flex-row justify-around items-center text-center gap-6 rounded-md">
        <div>
          <p className="text-3xl font-bold">546+</p>
          <p className="text-sm">Registered Riders</p>
        </div>
        <div>
          <p className="text-3xl font-bold">789,900+</p>
          <p className="text-sm">Orders Delivered</p>
        </div>
        <div>
          <p className="text-3xl font-bold">690+</p>
          <p className="text-sm">Restaurants Partnered</p>
        </div>
        <div>
          <p className="text-3xl font-bold">17,457+</p>
          <p className="text-sm">Food items</p>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-white dark:bg-[#111827] text-gray-800 dark:text-white pt-10 pb-20 px-6 md:px-20 transition-colors duration-300">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4">
            Know More About Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Serving flavor, freshness, and joy — one meal at a time.
          </p>
        </section>

        {/* About Image and Story */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <img
            src={aboutImage}
            alt="Delicious food"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bitelt was born from a simple idea: bring people happiness through
              food. What started as a small kitchen has turned into a rapidly
              growing online food delivery platform loved by thousands.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We believe food should be more than just filling — it should be
              exciting, memorable, and crafted with care. That’s why we use only
              fresh ingredients and deliver with speed and a smile.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="text-center mb-20">
          <h2 className="text-2xl font-bold mb-8">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#1f2937] shadow hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Curated Menus
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A mix of flavors from around the world, tailored for your taste
                buds.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#1f2937] shadow hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hot and fresh food delivered to your doorstep in record time.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gray-100 dark:bg-[#1f2937] shadow hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                Customer Love
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Thousands of happy foodies trust Bitelt every day for their
                cravings.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">Why Choose Bitelt?</h2>
          <p className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
            We don’t just deliver food — we deliver experiences. From our chefs
            to your table, every meal is crafted with passion. Whether you're
            looking for a quick bite or a gourmet experience, Bitelt brings you
            the best.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Join thousands of happy customers!
          </h3>
          <button
            onClick={() => navigate("/menu")}
            className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition"
          >
            Explore Our Menu
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
