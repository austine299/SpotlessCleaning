import { useState, useEffect, useContext } from "react";
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

  // Banner images
  const bannerImages = [
    `${process.env.PUBLIC_URL}/images/img3.JPG`,
    `${process.env.PUBLIC_URL}/images/img8.webp`,
    `${process.env.PUBLIC_URL}/images/img9.webp`,
    `${process.env.PUBLIC_URL}/images/img10.jpeg`,
    `${process.env.PUBLIC_URL}/images/img5.jpeg`,
    `${process.env.PUBLIC_URL}/images/img7.webp`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerImages.length]);

  return (
    <div
      ref={homeRef}
      className="relative h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700 flex justify-between px-10 pt-32 pb-10"
      style={{ backgroundImage: `url(${bannerImages[currentIndex]})` }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div
        className="relative z-10 flex flex-col justify-center sm:items-center md:items-start sm:w-3/5 w-full"
        onClick={() => {
          setShowCart(false);
          setShowNavbar(false);
        }}
      >
        {/* HEADLINE */}
        <h1 className="sm:text-4xl text-3xl md:w-[500px] text-center md:text-start text-white font-extrabold drop-shadow-lg mt-7 sm:mt-0">
          LMRN SPOTLESS CLEANING SERVICES.
        </h1>
        <h3 className="sm:text-3xl text-xl md:w-[500px] text-center md:text-start text-white font-extrabold drop-shadow-lg mt-7 sm:mt-0">
          Reliable & Affordable Cleaning Services in Hull, UK – Tailored to Your
          Needs
        </h3>

        {/* SUBTEXT */}
        <span className="text-white text-center md:text-start font-medium drop-shadow-md mt-2">
          Professional Cleaning Services Across the UK
        </span>

        {/* TAGLINE */}
        <small className="text-xl text-center md:text-start text-white font-bold mt-2">
          Let Us Handle the Mess
        </small>

        {/* DESCRIPTION */}
        <span className="text-lg text-center md:text-start text-white drop-shadow-md mt-2">
          We provide versatile cleaning solutions tailored to your needs.
        </span>

        {/* TRUST SIGNALS */}
        <div className="mt-3 text-white text-sm space-y-1 text-center md:text-start">
          <p>✔️ Fully Insured & Vetted Cleaners</p>
          <p>⭐ Trusted by Hundreds of Happy Clients</p>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => scrollToSection(contactRef)}
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-md mt-5 text-white font-semibold shadow-lg transition"
        >
          Get a Free Quote
        </button>
      </div>

      {/* DESKTOP CART */}
      {showCart && (
        <div className="hidden sm:flex justify-end w-1/2 px-5">
          <div className="fixed flex flex-col sm:w-2/5 w-full sm:top-30 bg-white opacity-90 z-10 rounded-md shadow-md">
            <Cart />
          </div>
        </div>
      )}

      {/* MOBILE CART */}
      {showCart && (
        <div className="sm:hidden fixed top-5 right-2 left-2 z-50 w-full">
          <Cart />
        </div>
      )}
    </div>
  );
}

export default Header;
