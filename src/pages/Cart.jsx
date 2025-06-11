import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🛒 Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg bg-white">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md" />
              <h2 className="text-xl font-bold mt-2">{item.title}</h2>
              <p className="text-gray-500">${item.price}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-700"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
