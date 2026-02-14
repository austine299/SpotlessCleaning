import {useContext } from "react";
import { Menu, X } from "lucide-react";
import { CartContext } from "./CartContext";

function Navbar() {
  
  const {
    aboutRef,
    servicesRef,
    contactRef,
    homeRef,
    portfolioRef,
    testmonialRef,
    scrollToSection,
    showNavbar, 
    setShowNavbar,
    handleSectionClick,
  } = useContext(CartContext);

 
  const handleNav = () => setShowNavbar(!showNavbar);

  const navItems = [
    { label: "Home", ref: homeRef },
    { label: "Service List", ref: servicesRef },
    { label: "About Us", ref: aboutRef },
    { label: "Tesmonials", ref: testmonialRef },
    { label: "Book Online", ref: servicesRef },
    { label: "Contact", ref: contactRef },
    { label: "Portfolio", ref: portfolioRef },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur  z-50 shadow-md">
      <div className="flex justify-between items-center h-20 px-6 sm:px-12">
        {/* Logo */}
        <button
          className="w-30 text-blue-600 tracking-wide text-xl"
          onClick={() => scrollToSection(homeRef)}
        >
           <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" className="rounded-full w-16"/>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleSectionClick(item.ref, item.label)}
              className="font-semibold text-lg hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition-all duration-200"
            >
              {item.label}
            </button>
          ))}

          {/* Cart Icon */}
        
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={handleNav} className="sm:hidden text-blue-600 z-50">
          {showNavbar ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {showNavbar && (
        <div className="sm:hidden absolute top-20 right-0 sm:w-2/5 w-1/2 bg-white border-t z-40 opacity-100 shadow-md">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  handleSectionClick(item.ref, item.label);
                  handleNav();
                }}
                className="text-lg font-semibold text-gray-800 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
