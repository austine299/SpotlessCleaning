// src/components/CartContext.js
import { createContext, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(null);
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const footerRef = useRef(null);
  const portfolioRef = useRef(null);
  const testmonialRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = (ref, label) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: label } });
    } else {
      scrollToSection(ref);
    }

    if (showNavbar) {
      setShowNavbar(false);
    }
  };

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        showCart,
        setShowCart,
        decreaseQty,
        increaseQty,
        aboutRef,
        servicesRef,
        contactRef,
        homeRef,
        footerRef,
        portfolioRef,
        testmonialRef,
        scrollToSection,
        showNavbar,
        setShowNavbar,
        handleSectionClick,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
