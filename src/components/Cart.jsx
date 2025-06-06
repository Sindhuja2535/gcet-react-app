import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, user } = useContext(AppContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const proceedToOrder = () => {
    if (!user) {
      alert("Please login to order!");
      navigate("/login");
    } else {
      navigate("/order");
    }
  };

  return (
    <div className="page">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
      <button onClick={proceedToOrder}>Confirm Order</button>
    </div>
  );
};

export default Cart;
