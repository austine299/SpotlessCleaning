import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Cart from "./Cart";

function Header() {
  const {
    showCart,
    setShowCart,
    homeRef,
    scrollToSection,
    setShowNavbar,
    contactRef,
  } = useContext(CartContext);

  // List of banner images
  const bannerImages = [
    `${process.env.PUBLIC_URL}/images/img3.JPG`,
    `${process.env.PUBLIC_URL}/images/img8.webp`,
    `${process.env.PUBLIC_URL}/images/img9.webp`,
    `${process.env.PUBLIC_URL}/images/img10.jpeg`,
    `${process.env.PUBLIC_URL}/images/img5.jpeg`,
    `${process.env.PUBLIC_URL}/images/img7.webp`,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate banner every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup
  }, [bannerImages.length]);

  return (
    <div
      ref={homeRef}
      className="relative h-[350px] w-full bg-cover bg-slate-600 bg-center bg-no-repeat transition-all duration-700 flex justify-between px-6 pt-20"
      style={{ backgroundImage: `url(${bannerImages[currentIndex]})` }}
    >
      <div
        className="flex flex-col justify-center sm:items-center md:items-start sm:w-3/5 w-full"
        onClick={() => {
          setShowCart(false);
          setShowNavbar(false);
        }}
      >
        <h1 className="sm:text-4xl text-3xl md:w-[500px] text-center md:text-start text-white font-extrabold drop-shadow-lg mt-7 sm:mt-0">
          WELCOME TO <span className="text-blue-500">LMRN SPOTLESS CLEANING SERVICES</span>
        </h1>
        <span className="text-blue-400 text-center ">Professional Cleaning Services Across the UK</span>
        <small className="text-xl text-center text-white font-bold">
          {" "}
          Let Us Handle the Mess
        </small>
        <span className="text-lg text-center text-white drop-shadow-md">
          We provide versatile cleaning solutions tailored to your needs.
        </span>
        <button
          onClick={() => scrollToSection(contactRef)}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md mt-4 text-white font-semibold w-max"
        >
          Contact Us
        </button>
      </div>
      {/* Desktop Cart */}
      {showCart && (
        <div className="hidden sm:flex justify-end w-1/2 px-5 ">
          <div className="fixed flex flex-col sm:w-2/5 w-full sm:top-30  bg-white opacity-90 z-10  rounded-md shadow-md">
            <Cart />
          </div>
        </div>
      )}

      {/* Mobile Cart (showCart toggle) */}
      {showCart && (
        <div className="sm:hidden fixed top-5 right-2 left-2 z-50 w-full">
          <Cart />
        </div>
      )}
    </div>
  );
}

export default Header;
