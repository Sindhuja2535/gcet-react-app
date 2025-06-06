
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


   return (
    <Router>
      <AppContext.Provider value={{ user, setUser, products, setProducts, cart, setCart, orders, setOrders }}>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" replace />} />
            <Route path="/orders" element={user ? <Orders /> : <Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </AppContext.Provider>
    </Router>
  );
}
  // remaining code...

