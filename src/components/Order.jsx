import React, { useContext } from "react";
import { AppContext } from "../App";

const Order = () => {
  const { cart } = useContext(AppContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="page">
      <h2>Order Summary</h2>
      {cart.length === 0 ? (
        <p>No items in order.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
          <h3>Total Bill: ₹{total}</h3>
          <p>Thank you for your order!</p>
        </>
      )}
    </div>
  );
};

export default Order;
