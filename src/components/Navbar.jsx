import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold store-title">🎨 Painting Store</h1>
        <div className="space-x-4 navbar-links">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/gallery" className="text-white hover:underline">Gallery</Link>
          <Link to="/cart" className="text-white hover:underline">Cart</Link>
          <Link to="/checkout" className="text-white hover:underline">Checkout</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
