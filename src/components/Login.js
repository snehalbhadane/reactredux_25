import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="username" aria-label="username" />
      <input placeholder="password" aria-label="password" type="password" />
      <button type="submit">Login</button>
    </form>
  );
}