import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={() => navigate("/home", { state: { name } })}>Submit</button>
    </div>
  );
}
