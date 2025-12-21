// src/components/LoginButton.jsx
import React from "react";
import { LogIn, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../context/ModalContext";
import "./LoginButton.css";

export default function LoginButton() {
  const { isLoggedIn, logout } = useAuth();
  const { openLogin } = useModal();

  if (isLoggedIn) {
    return (
      <button className="auth-btn logout" onClick={logout}>
        <LogOut size={18} />
        <span>Logout</span>
      </button>
    );
  }

  return (
    <button className="auth-btn login" onClick={openLogin}>
      <LogIn size={18} />
      <span>Login</span>
    </button>
  );
}