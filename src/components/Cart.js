import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const itemCount = cart.length;
  

  return (
    <div style={{padding: "2rem"}}>
      <h2>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
      <div >
        {cart.map(item =>(
          <div key={item._id} style={{marginBottom: "1rem", border: "1px solid #ccc", paddingBottom: "0.5rem"}}>
            <h4>{item.title}</h4>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => dispatch(removeFromCart(item._id)) }>
              Remove 
            </button>
          </div>
        ))}

        <div style={{marginTop: "2rem", borderTop: "2px solid #000", paddingTop: "1rem"}}>
          <h3>🧾 Cart Summary</h3>
          <p>Items: ${itemCount}</p>
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
          <button
            onClick={()=>{
              // optional: navigate to checkout page or alert for now
              alert("Proceeding to checkout...")
            }}
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
              Proceed to Checkout
          </button>
        </div>
     </div>
      )}
    </div>
  );
};

export default Cart;
