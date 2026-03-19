function WhyChooseUs() {
  const points = [
    "Reliable and trustworthy",
    "Detail-focused cleaning",
    "Flexible bookings to suit your schedule",
    "Affordable and transparent pricing",
    "Dedicated to customer satisfaction",
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          Why Choose Us?
        </h2>

        {/* Subtitle (optional but recommended) */}
        <p className="text-gray-600 mb-10">
          We go above and beyond to deliver exceptional cleaning services you can trust.
        </p>

        {/* Points */}
        <div className="grid gap-4 sm:grid-cols-2 text-left">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="text-green-500 text-xl">✔️</span>
              <p className="text-gray-700 font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;