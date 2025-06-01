import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const name = location.state?.name || "Guest";

  return <h2>Welcome {name}!</h2>;
}
