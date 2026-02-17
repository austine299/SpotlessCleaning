import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      name: "Andrew Marvell",
      text: "Excellent service. My house looks spotless every time!",
      rating: 5,
      image: `${process.env.PUBLIC_URL}/images/review1.jpg`,
    },
    {
      name: "Philip Larkin",
      text: "Very professional team. Arrived on time and cleaned perfectly.",
      rating: 5,
      image: `${process.env.PUBLIC_URL}/images/review2.jpg`,
    },
  ]);

  const [current, setCurrent] = useState(0);

  const [form, setForm] = useState({
    name: "",
    text: "",
    rating: 5,
    image: null,
  });

  /* Auto slide */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  /* Handle image upload */
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setForm({ ...form, image: preview });
    }
  };

  /* Add review */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.text) return;

    setReviews([...reviews, form]);
    setForm({ name: "", text: "", rating: 5, image: null });
    setCurrent(reviews.length);
  };

  const next = () => {
    setCurrent((current + 1) % reviews.length);
  };

  const prev = () => {
    setCurrent((current - 1 + reviews.length) % reviews.length);
  };

  const activeReview = reviews[current];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">Customer Reviews</h2>
          <p className="text-gray-600 mt-2">
            Hear what our happy customers say
          </p>
        </div>

        {/* ===== SLIDER ===== */}
        <div className="relative bg-white rounded-2xl shadow-lg p-10 text-center">

          {/* Avatar */}
          <div className="flex justify-center mb-4">
            <img
              src={
                activeReview.image
                  ? activeReview.image
                  : `${process.env.PUBLIC_URL}/images/default-user.png`
              }
              alt={activeReview.name}
              className="w-20 h-20 rounded-full object-cover border"
            />
          </div>

          <p className="text-gray-600 italic mb-6 text-lg">
            "{activeReview.text}"
          </p>

          {/* Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(activeReview.rating)].map((_, i) => (
              <Star key={i} size={18} className="fill-current  text-green-300" />
            ))}
          </div>

          <h4 className="font-semibold text-gray-800">
            {activeReview.name}
          </h4>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* ===== ADD REVIEW FORM ===== */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-5"
        >
          <h3 className="text-xl font-semibold">Leave a Review</h3>

          {/* Image Upload */}
          <div className="flex items-center gap-4">
            {form.image && (
              <img
                src={form.image}
                alt="preview"
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <input type="file" accept="image/*" onChange={handleImage} />
          </div>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <textarea
            placeholder="Your Review"
            className="w-full border rounded-lg p-3"
            rows="3"
            value={form.text}
            onChange={(e) => setForm({ ...form, text: e.target.value })}
          />

          {/* Star selector */}
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                size={22}
                onClick={() => setForm({ ...form, rating: num })}
                className={`cursor-pointer ${
                  form.rating >= num ? "fill-current text-green-300" : "text-gray-300"
                }`}
              />
            ))}
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}

export default Reviews;
