import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginAdmin, setSession } from "../data/AdminStorage";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = () => {
    const success = loginAdmin(form.email, form.password);

    if (!success) return alert("Invalid credentials");

    setSession();
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow w-96 space-y-4">
        <h2 className="text-xl font-bold text-center">Admin Login</h2>

        <input
          placeholder="Email"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>

        <p className="text-sm text-center">
          No account?{" "}
          <Link to="/admin/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
