import Home from "./components/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomerService from "./components/CustomerService";
import Availability from "./components/Availability";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashBoard";
import AdminRegister from "./components/AdminRegister";

function App() {
  const location = useLocation();

  // hide layout on admin pages
  const isAdminPage =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/login");

  return (
    <div className="App">

      {/* ⭐ Hide for admin */}
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/availability" element={<Availability />} />

        {/* admin */}
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {/* ⭐ Hide for admin */}
      {!isAdminPage && <CustomerService />}
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;
