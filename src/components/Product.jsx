import React, { useEffect, useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
import "./Product.css";

export default function Product() {
  const { user, products, setProducts, cart, setCart } = useContext(AppContext);
  const API = import.meta.env.VITE_API_URL;

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${API}/products/all`);
      console.log("✅ API Response:", res.data);

      // Check if response is an array or has a 'products' key
      if (Array.isArray(res.data)) {
        setProducts(res.data); // direct array
      } else if (Array.isArray(res.data.products)) {
        setProducts(res.data.products); // array inside object
      } else {
        console.error("❌ Unexpected API response format:", res.data);
        setProducts([]); // prevent crash
      }
    } catch (error) {
      console.error("❌ Failed to fetch products:", error);
      setProducts([]); // prevent crash
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (id) => {
    if (!cart[id]) {
      setCart({ ...cart, [id]: 1 });
    }
  };

  return (
    <div>
      <h3>Welcome {user?.name || "User"}!</h3>
      <div className="App-Product-Row">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((value) => (
            <div key={value._id}>
              <h3>{value.name}</h3>
              <h4>{value.price}</h4>
              <button onClick={() => addToCart(value.pid)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}
