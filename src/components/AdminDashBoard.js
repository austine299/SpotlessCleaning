import { useState, useEffect } from "react";
import {
  addService,
  getServices,
  deleteService,
  updateService,
} from "../data/serviceStorage";
import { useNavigate } from "react-router-dom";
import { getAdmin, logoutAdmin } from "../data/AdminStorage";
import { isLoggedIn } from "../data/AdminStorage";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const emptyForm = {
    id: null,
    name: "",
    image: "",
    time: "",
    description: "",
  };

  const [form, setForm] = useState(emptyForm);
  const [services, setServices] = useState([]);
  const [editing, setEditing] = useState(false);

  /* load services */
  useEffect(() => {
    setServices(getServices());
  }, []);

  const refresh = () => setServices(getServices());

  /* inputs */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* image upload */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () =>
      setForm((prev) => ({ ...prev, image: reader.result }));

    reader.readAsDataURL(file);
  };

  /* add or update */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.image) return alert("Upload an image");

    if (editing) {
      updateService(form);
      alert("Service updated!");
    } else {
      addService({ ...form, id: Date.now() });
      alert("Service added!");
    }

    setForm(emptyForm);
    setEditing(false);
    refresh();
  };

  /* edit */
  const handleEdit = (service) => {
    setForm(service);
    setEditing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* delete */
  const handleDelete = (id) => {
    if (!window.confirm("Delete this service?")) return;

    deleteService(id);
    refresh();
  };

  useEffect(() => {
  if (!isLoggedIn()) navigate("/admin/login");
}, [navigate]);


  const admin = getAdmin();

  return (

    <div className="min-h-screen bg-gray-50 p-10 space-y-10">
      <div className="flex justify-between items-center mb-6 fixed top-0 left-0 w-full p-12 h-20 bg-white/80 backdrop-blur  z-50 shadow-md">
        <h2 className="text-2xl font-bold">Welcome, {admin?.name}</h2>

        <button
          onClick={() => {
            logoutAdmin();
            navigate("/login");
          }}
          className="bg-red-600 text-white px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>

      {/* ================= FORM ================= */}
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow space-y-4">
        <h2 className="text-2xl font-bold">
          {editing ? "Update Service" : "Add New Service"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Service name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input type="file" accept="image/*" onChange={handleImageUpload} />

          {form.image && (
            <img
              src={form.image}
              alt=""
              className="h-32 rounded-lg object-cover"
            />
          )}

          <input
            name="time"
            placeholder="Duration"
            value={form.time}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button className="bg-green-600 text-white w-full py-2 rounded">
            {editing ? "Update Service" : "Add Service"}
          </button>

          {editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(false);
                setForm(emptyForm);
              }}
              className="bg-gray-300 w-full py-2 rounded"
            >
              Cancel Edit
            </button>
          )}

          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white w-full py-2 rounded"
          >
            Back
          </button>
        </form>
      </div>

      {/* ================= PREVIEW LIST ================= */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Posted Services</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-4 rounded-xl shadow space-y-3"
            >
              <img
                src={service.image}
                className="h-40 w-full object-cover rounded"
                alt=""
              />

              <h4 className="font-bold">{service.name}</h4>
              <p className="text-sm">{service.time}</p>
              <p className="text-sm text-gray-600">{service.description}</p>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(service)}
                  className="flex-1 bg-yellow-500 text-white py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(service.id)}
                  className="flex-1 bg-red-600 text-white py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
