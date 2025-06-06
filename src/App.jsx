
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Logout from "./Logout.jsx";
import Product from "./Product.jsx";
import Cart from "./Cart.jsx";
import Order from "./Order.jsx";


export const AppContext = React.createContext();

export default function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // 🔽 Dummy products go here
  useEffect(() => {
    setProducts([
      { id: 1, name: "Shampoo", description: "Hair care product", price: 120 },
      { id: 2, name: "Soap", description: "Gentle body soap", price: 40 },
      { id: 3, name: "Oil", description: "Herbal hair oil", price: 150 },
      { id: 4, name: "Conditioner", description: "Silky conditioner", price: 180 },
    ]);
  }, []);
  
  // remaining code...
}
