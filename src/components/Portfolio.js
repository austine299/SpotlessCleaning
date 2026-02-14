import React from "react";
import { Clock} from "lucide-react";

const services = [
  {
    title: "Facade Washing",
    time: "5 hours",
    image: "/images/img17.jpg",
  },
  {
    title: "Kitchen Deep Cleaning",
    time: "4 hours",
    image: "/images/img18.jpg",
  },
  {
    title: "Bathroom Sanitization",
    time: "3 hours",
    image: "/images/img19.webp",
  },
  {
    title: "Office Cleaning",
    time: "2 hours",
    image: "/images/img20.jpeg",
  },
];

function Portfolio() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Cleaning Portfolio
          </h2>
          <p className="text-gray-600 mt-3">
            Professional cleaning services delivered with care and excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={`${process.env.PUBLIC_URL}${service.image}`}
                alt={service.title}
                className="h-60 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>

                <div className="flex justify-between text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {service.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
