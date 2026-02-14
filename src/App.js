import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetails";
import Cart from "./components/Cart";
import ConfirmOrder from "./components/ConfirmOrder";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomerService from "./components/CustomerService";
import Availability from "./components/Availability";



function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Availability" element={<Availability />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmOrder" element={<ConfirmOrder />} />
      </Routes>
      <CustomerService />
      <Footer />
    </div>
  );
}

export default App;
