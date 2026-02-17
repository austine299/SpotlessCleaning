import React, { useContext } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { CartContext } from "./CartContext";

const Contact = () => {
  const { contactRef } = useContext(CartContext);

  const contactNum = process.env.REACT_APP_CONTACT;
  return (
    <section ref={contactRef} className="bg-white">
      {/* Top Banner */}
      <div
        className="h-48 sm:h-48 bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/img1.jpg')" }} // Replace with your banner image
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact LMRN Spotless Cleaning Services
          </h1>
          <p className="text-lg text-gray-100 mt-2">
            ✨ Let’s Refresh Your Space — Contact Us Today
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Info</h2>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-700 text-2xl" />
              <span className="text-lg text-gray-700">
                Hull, UK
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-700 text-2xl" />
              <span className="text-lg text-gray-700">+{contactNum}</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-700 text-2xl" />
              <span className="text-lg text-gray-700">
                spotlesscleaning@gmail.com
              </span>
            </div>
            <p className="mt-6 text-gray-600">
              📅 Monday to Saturday | 🕘 9:00 AM – 6:00 PM
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Social Media
            </h2>
            <div className="flex flex-col items-start gap-4">
              <a href="https://www.facebook.com/profile.php?id=61583952003567" className="flex gap-3 hover:underline hover:text-blue-600">
                <FaInstagram className="text-red-400 text-4xl" /><span className="text-lg">preciousegboba</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583952003567" className="flex gap-3 hover:underline hover:text-blue-600">
                <FaFacebook className="text-blue-500 text-4xl" /><span className="text-lg">precious Egbobawaye</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583952003567" className="flex gap-3 hover:underline hover:text-blue-600">
                <FaTiktok className="bg-black text-4xl text-white rounded-lg" /><span className="text-lg">precious4real</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583952003567" className="flex gap-3 hover:underline hover:text-blue-600">
                <FaWhatsapp className="bg-green-600 text-4xl text-white rounded-lg" /><span className="text-lg">precious</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
