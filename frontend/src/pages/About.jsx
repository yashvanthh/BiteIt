import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import Placeorder from '../assets/images/place_order.png';
import TrackProgress from '../assets/images/track_progress.jpg';
import GetOrder from '../assets/images/get_order.jpg';
import cookImage from '../assets/cook.jpg';

const AboutUs = () => {
  const navigate = useNavigate(); 
  return (
    <>
      {/* Hero Section  */}
      <div className="relative w-full h-[90vh]">
        <img src={cookImage} alt="Chef cooking" className="w-full h-full object-cover absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-70 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-orange-400">Bitelt</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            We are passionate about delivering delicious meals right to your doorstep.
            With a focus on quality, speed, and taste, Cravy brings your cravings to life!
          </p>
          <p className="mt-4 text-gray-300 max-w-2xl">
            Our mission is to connect people with their favorite local restaurants and
            provide an unforgettable food delivery experience.
          </p>
          <button
            onClick={() => navigate('/menu')} // 👈 navigate on click
            className="mt-6 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition"
          >
            Explore Our Menu
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full px-4 py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
            Know more about us!
          </h2>
          <div className="flex justify-center gap-6 flex-wrap mb-6">
            <button className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full">
              Frequent Questions
            </button>
            <button className="text-gray-600 dark:text-gray-300 font-medium">Who we are?</button>
            <button className="text-gray-600 dark:text-gray-300 font-medium">Partner Program</button>
            <button className="text-gray-600 dark:text-gray-300 font-medium">Help & Support</button>
          </div>

          <div className="bg-[#0B0E1E] dark:bg-gray-800 text-white rounded-md flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-1/3 p-6 space-y-4 border-b md:border-b-0 md:border-r border-gray-700">
              <button className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-full">
                Howdoes Bitelt work?
              </button>
              <p className="font-medium">What payment methods are accepted?</p>
              <p className="font-medium">Can I track my order in real-time?</p>
              <p className="font-medium">Are there any special discounts or promotions available?</p>
              <p className="font-medium">Is Bitelt available in my area?</p>
            </div>

            <div className="w-full md:w-2/3 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <img src={Placeorder} alt="Place Order" className="mx-auto h-16 mb-2" />
                <h3 className="font-bold text-lg">Place an Order!</h3>
                <p className="text-gray-300">Place order through our website or Mobile app</p>
              </div>
              <div>
                <img src={TrackProgress} alt="Track Progress" className="mx-auto h-16 mb-2" />
                <h3 className="font-bold text-lg">Track Progress</h3>
                <p className="text-gray-300">You can track your order status with delivery time</p>
              </div>
              <div>
                <img src={GetOrder} alt="Get Order" className="mx-auto h-16 mb-2" />
                <h3 className="font-bold text-lg">Get your Order!</h3>
                <p className="text-gray-300">Receive your order at lightning-fast speed!</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-4 max-w-4xl mx-auto">
          Bitelt simplifies the food ordering process. Browse through our diverse menu,
            select your favorite dishes, and proceed to checkout. Your delicious meal will
            be on its way to your doorstep in no time!
          </p>
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
      </div>
    </>
  );
};

export default AboutUs;
