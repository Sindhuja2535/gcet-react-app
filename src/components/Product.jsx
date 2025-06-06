import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { user, products, cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();

  const addToCart = (product) => {
    if (!user) {
      alert("Please login to add to cart!");
      navigate("/login");
      return;
    }

    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert("Product already in cart");
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="page">
      <h2>All Products</h2>
      <div className="products">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((p) => (
            <div className="product-card" key={p.id}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p>₹ {p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Product;
