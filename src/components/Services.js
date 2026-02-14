import React, { useContext, useState } from "react";
import { FaBroom, FaSprayCan, FaWhatsapp } from "react-icons/fa";
import products from "../product";
import autoParts from "../autoparts"; // Import auto parts separately
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { motion } from "framer-motion";

function Product() {
  const { addToCart, setShowCart, productRef, setShowNavbar } =
    useContext(CartContext);

  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Label for dropdown
  const [activeCategory, setActiveCategory] = useState(null); // Actual products to display

  // Display products based on activeCategory
  const displayedProducts = activeCategory
    ? activeCategory === "Auto Parts"
      ? autoParts
      : products[activeCategory] || []
    : Object.values(products).flat().concat(autoParts);

  // Handle category selection
  const handleCategorySelect = (category, updateLabel = true) => {
    setActiveCategory(category); // Always update products
    if (updateLabel) setSelectedCategory(category); // Update label only if needed
    setShowCategory(false);
    setShowCart(false);
  };

  const num = process.env.REACT_APP_MOBILE;

  const customMsg = "Thank you for contacting OJIAKAANU NIG LTD";

  return (
    <section
      ref={productRef}
      className="flex sm:flex-row flex-col-reverse bg-gray-50 py-12 px-2 md:px-10 gap-3"
      onClick={() => {
        setShowCart(false);
        setShowCategory(false);
        setShowNavbar(false);
      }}
    >
      {/* Product List */}
      <div className="sm:w-full w-full flex flex-col items-center">
        <div className="relative flex justify-between bg-blue-100 py-3 px-4 mb-10">
          <h1 className="sm:text-3xl text-   font-extrabold text-gray-800 flex items-center gap-3">
            <FaBroom className="text-blue-600" /> Our Services{" "}
            <FaSprayCan className="text-blue-600" />
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProducts.length === 0 ? (
            <div className="col-span-full text-center text-2xl font-bold text-gray-500 py-20">
              🚧 Coming Soon 🚧
            </div>
          ) : (
            displayedProducts.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-xl gap-3 shadow hover:shadow-lg transition duration-300 p-4 flex flex-col justify-center h-full text-center"
              >
                <Link
                  to="/availability"
                  state={{ service: item }}
                  className="flex flex-col gap-1 items-center justify-center px-4 flex-grow"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                    alt={item.name}
                    className="w-full h-[250px] object-cover rounded-lg mb-4"
                  />
                  <h2 className="font-bold text-2xl text-gray-900 w-full overflow-hidden whitespace-nowrap text-ellipsis">
                    {item.name}
                  </h2>
                </Link>
                <hr />
                <span className="text-xl flex flex-col text-left">
                  <span className="text-xl">{item.time}</span>

                  <span className="text-xl">{item.description}</span>
                </span>
                <div className="flex justify-between items-center w-full mt-4 gap-2">
                  <Link
                    to="/availability"
                    state={{ service: item }}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-2 py-2 rounded-lg text-sm transition text-center"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Product;
