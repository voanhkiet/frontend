import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const itemCount = cart.length;
  return (
    <div>
      <div classname="cart-items">
        {cart.map(item =>(
          <div key={item._id}>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
      <div className="cart-summary">
      <h3>🧾 Cart Summary</h3>
      <p>Items: ${itemCount}</p>
      <p>Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
