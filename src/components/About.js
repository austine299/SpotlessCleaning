import React, { useContext } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaCarSide, FaCogs } from "react-icons/fa";
import { CartContext } from "./CartContext";

const About = () => {
  const { aboutRef } = useContext(CartContext);
  return (
    <section ref={aboutRef} className="bg-white py-12 px-6 md:px-20">
      {/* Banner */}
      <div className="bg-blue-900 text-white text-center py-12 px-3 rounded-2xl shadow-lg mb-10">
        <h1 className="sm:text-4xl text-2xl font-bold mb-2">
          Let Us Handle the Mess
        </h1>
        <p className="text-lg">
          We provide versatile cleaning solutions tailored to your needs.
        </p>
      </div>

      {/* Description */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <p className="text-gray-600 text-lg">
            <strong>SPOTLESS CLEANING SERVICES </strong> specializes in reliable
            residential and commercial cleaning. Our fully trained cleaners ensure
            a safe and healthy environment with effective cleaning products that
            deliver the highest standards. Experience customized services fit for
            your schedule.
          </p>
          <p className="text-gray-600 text-lg">
            We offer <strong> industrial-grade cleaning solutions </strong> and specialized equipment
            to maintain a clean, safe, and professional workspace.
          </p>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/img10.jpeg`}  className="rounded-lg" />    
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-lg font-medium text-gray-800">
          Where cleanliness meets excellence.
        </p>
        <h2 className="text-xl font-bold text-blue-700">
          CHOOSE SPOTLESS CLEANING SERVICES.
        </h2>
      </div>
    </section>
  );
};

export default About;
