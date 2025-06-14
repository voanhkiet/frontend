import { useEffect } from "react";

const CartPage = ({ cart }) => {
    useEffect(() => {
  console.log("CartPage Received Cart Data:", cart);
}, [cart]);
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Shopping Cart 🛒</h1>
      {cart && cart.length > 0 ? (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <h2>{item.title}</h2>
              <img className="w-32 h-32 object-cover" src={item.image} alt={item.title} />
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
