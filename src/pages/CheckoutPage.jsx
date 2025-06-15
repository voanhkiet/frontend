import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const [cart, setCart] = useState([]);
   const navigate = useNavigate();

       useEffect(() => {
           const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
           setCart(savedCart);
   }, []);  
  const [userInfo, setUserInfo] = useState({ name: "", address: "", payment: "" });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Order placed for ${userInfo.name}! 🎉`);
    setCart([]); // ✅ Clear cart after purchase
    localStorage.removeItem("cart"); // ✅ Remove stored cart data
    navigate("/confirmation"); // Redirect after purchase
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">Checkout 🛒</h1>
      <h2 className="text-xl font-bold mt-4">Order Summary:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title} - ${item.price}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-4">Your Details:</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} />
      <input type="text" name="payment" placeholder="Payment Method" onChange={handleChange} />

      <button className="checkout-btn mt-4" onClick={handleCheckout}>
        ✅ Confirm Purchase
      </button>
    </div>
  );
};

export default CheckoutPage;
