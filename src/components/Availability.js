import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

function Availability() {
  const location = useLocation();
  const navigate = useNavigate();

  const service = location.state?.service;

  const today = new Date().toISOString().split("T")[0];

  /* ================= STATE ================= */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
  });

  const [bookedSlots, setBookedSlots] = useState({
    "2026-02-15": ["10:00 AM", "12:00 PM"],
  });

  const timeSlots = [
    "8:00 AM",
    "10:00 AM",
    "12:00 PM",
    "2:00 PM",
    "4:00 PM",
    "6:00 PM",
  ];

  /* ================= HELPERS ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isBooked = (time) =>
    bookedSlots[form.date]?.includes(time);

  /* ================= BOOKING ================= */
  const handleBooking = async () => {
    const { name, email, phone, address, date, time } = form;

    if (!name || !email || !phone || !address || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    const templateParams = {
      name,
      email,
      phone,
      address,
      service: service?.name,
      date,
      time,
    };

    try {
      /* OWNER EMAIL */
      await emailjs.send(
        "service_96ia6og",
        "template_k16ycwc",
        templateParams,
        "CPWn3sVcyaB-X58Ze" 
      );

      /* ===== CUSTOMER EMAIL ===== */
      await emailjs.send(
        "service_96ia6og",
        "template_onjlwgi",
        templateParams,
        "CPWn3sVcyaB-X58Ze"
      );

      /* mark slot booked locally */
      setBookedSlots((prev) => ({
        ...prev,
        [date]: [...(prev[date] || []), time],
      }));

      alert("✅ Booking confirmed! Emails sent successfully.");

      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Failed to send email. Check EmailJS setup.");
    }
  };

  /* ================= UI ================= */
  return (
    <section className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-16">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl space-y-5">

        <h2 className="text-3xl font-bold text-center">
          Book Cleaning Service
        </h2>

        {service && (
          <p className="text-center text-gray-600">
            Service:
            <span className="font-semibold text-blue-600 ml-2">
              {service.name}
            </span>
          </p>
        )}

        {/* ===== FORM FIELDS ===== */}

        <input
          name="name"
          placeholder="Customer Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="address"
          placeholder="Home / Office Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        {/* DATE */}
        <input
          type="date"
          name="date"
          min={today}
          value={form.date}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        {form.date === today && (
          <p className="text-red-500 text-sm text-center">
            Same-day booking is not available
          </p>
        )}

        {/* TIME SLOTS */}
        {form.date && form.date !== today && (
          <div className="grid grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <button
                key={time}
                disabled={isBooked(time)}
                onClick={() =>
                  setForm({ ...form, time })
                }
                className={`p-2 rounded-lg border text-sm
                  ${
                    isBooked(time)
                      ? "bg-gray-300 cursor-not-allowed"
                      : form.time === time
                      ? "bg-blue-600 text-white"
                      : "hover:bg-blue-100"
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        )}

        {/* SUBMIT */}
        <button
          onClick={handleBooking}
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-semibold"
        >
          Confirm Booking
        </button>
      </div>
    </section>
  );
}

export default Availability;
