
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";


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
