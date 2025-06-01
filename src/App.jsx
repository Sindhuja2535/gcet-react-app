import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>My Online Shop</h1>
          <Link to="/">Home</Link> -
          <Link to="/cart">Cart</Link> -
          <Link to="/login">Login</Link>
          <hr />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>

        <footer>
          <hr />
          &copy; 2005. All rights Reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
