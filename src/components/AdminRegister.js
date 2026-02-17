import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerAdmin } from "../data/AdminStorage";
export default function AdminRegister() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password)
      return alert("Fill all fields");

    await registerAdmin(form);

    alert("Admin registered successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Admin Register</h2>

        <input
          name="name"
          placeholder="Full name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Register
        </button>
        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
