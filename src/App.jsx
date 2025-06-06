import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Logout from "./components/Logout.jsx";
import Product from "./components/Product.jsx";
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";  // If this is your order summary
import Home from "./components/Home.jsx";    // This should exist
import Orders from "./components/Orders.jsx"; // If showing all orders

export const AppContext = React.createContext();

export default function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // ✅ Add this

  return (
    <BrowserRouter> {/* ✅ Fixed from <Router> */}
      <AppContext.Provider value={{ user, setUser, products, setProducts, cart, setCart, orders, setOrders }}>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" replace />} />
            <Route path="/orders" element={user ? <Orders /> : <Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}
