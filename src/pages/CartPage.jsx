import { useEffect, useState } from "react";



const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
}, []); // Loads cart when the page is opened
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Shopping Cart 🛒</h1>
      {cart.length > 0 ? (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <h2>{item.title}</h2>
              <img loading="lazy" className="w-32 h-32 object-cover" src={item.image} alt={item.title} />
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xl text-gray-500 text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage; // ✅ Ensure this is correctly exporting the component
