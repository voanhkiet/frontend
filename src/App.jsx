import { useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";





const App = () => {
  const [cart, setCart] = useState([]);

    // ✅ Load cart from localStorage when the app starts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // ✅ Ensure cart updates in localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
