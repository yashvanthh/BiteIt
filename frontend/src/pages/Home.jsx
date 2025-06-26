import React from 'react';
import Footer from '../components/Footer'; 
import AboutUs from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      

      <section
        className="relative min-h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/07/12/83/38/360_F_712833870_OPlItvafwhUSSROSD8MXzcz5w5fTRwRy.jpg')",
        }}
      >
        {/* Black overlay only on image */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text content on top */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-3xl text-center text-white">
            <h1 className="text-5xl font-extrabold mb-4">
              Welcome to <span className="text-orange-500">Bitelt</span>
            </h1>
            <p className="text-lg sm:text-xl">
              Explore our delicious menu crafted with fresh ingredients and passion.
              Whether you’re craving something spicy, sweet, or savory, Bitelt has the perfect dish for you.
            </p>
          </div>
        </div>
      </section>
      <AboutUs/>
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;
