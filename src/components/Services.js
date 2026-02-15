import { useContext, useEffect, useState } from "react";
import { FaBroom, FaSprayCan } from "react-icons/fa";
import { getServices } from "../data/serviceStorage";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { motion } from "framer-motion";

function Services() {
  const { setShowCart, serviceRef, setShowNavbar } =
    useContext(CartContext);

  const [services, setServices] = useState([]);

  /* load services */
  useEffect(() => {
    setServices(getServices());
  }, []);

  return (
    <section
      ref={serviceRef}
      className="bg-gray-50 py-12 px-2 md:px-10"
      onClick={() => {
        setShowCart(false);
        setShowNavbar(false);
      }}
    >
      <div className="w-full flex flex-col items-center">

        {/* Header */}
        <div className="relative flex justify-between bg-blue-100 py-3 px-4 mb-10 w-full max-w-7xl rounded-lg">
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center gap-3">
            <FaBroom className="text-blue-600" />
            Our Services
            <FaSprayCan className="text-blue-600" />
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl w-full">

          {services.length === 0 && (
            <p className="col-span-full text-center text-gray-500 text-xl py-16">
              No services added yet
            </p>
          )}

          {services.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col text-center"
            >
              <Link
                to="/availability"
                state={{ service: item }}
                className="flex flex-col flex-grow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[230px] object-cover rounded-lg mb-4"
                />

                <h2 className="font-bold text-xl mb-1">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-600">{item.time}</p>

                <p className="text-sm text-gray-500 mt-2">
                  {item.description}
                </p>
              </Link>

              <Link
                to="/availability"
                state={{ service: item }}
                className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg"
              >
                Book Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
