import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Compass,
  Map,
  Bot,
  Rss,
  Search,
  Phone,
  Users,
  X,
  LogIn,
  LogOut,
} from "lucide-react";
import { useModal } from "../context/ModalContext";
import { useAuth } from "../context/AuthContext";
import "./MobileSidebar.css";

// Team removed from main navItems array
const navItems = [
  { name: "Welcome", to: "/", icon: Home },
  { name: "Explore", to: "/explore", icon: Compass },
  { name: "Campus Map", to: "/map", icon: Map },
  {
    name: "Thapar AI",
    to: "https://tiet-nexus-rag-chatbot.streamlit.app/",
    icon: Bot,
    isExternal: true,
  },
  { name: "Feeds", to: "/feeds", icon: Rss },
  { name: "Lost & Found", to: "/lost-found", icon: Search },
  { name: "Contact Us", to: "/contact", icon: Phone },
];

export default function MobileSidebar({ isOpen, onClose }) {
  const { openLogin } = useModal();
  const { user, isLoggedIn, logout } = useAuth();

  if (!isOpen) return null;

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "G";

  return (
    <>
      <div className="msb-overlay active" onClick={onClose} />

      <aside className="msb-drawer open">
        <div className="msb-header">
          <div className="msb-brand">
            <div className="msb-logo-box">
              <img src="/tiet.png" alt="TIET Logo" />
            </div>
            <span className="msb-brand-name">TIET Nexus</span>
          </div>
          <button className="msb-close-x" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="msb-user-section">
          <div className="msb-user-card">
            <div className="msb-avatar">{initials}</div>
            <div className="msb-user-info">
              <span className="msb-username">
                {isLoggedIn ? user.name : "Guest"}
              </span>
            </div>
            {!isLoggedIn ? (
              <button
                className="msb-auth-btn"
                onClick={() => {
                  onClose();
                  openLogin();
                }}
              >
                <LogIn size={18} />
              </button>
            ) : (
              <button className="msb-auth-btn" onClick={logout}>
                <LogOut size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Main Menu List */}
        <nav className="msb-nav">
          <ul>
            {navItems.map(({ name, to, icon: Icon, isExternal }) => (
              <li key={name}>
                {isExternal ? (
                  <a
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="msb-link"
                    onClick={onClose}
                  >
                    <Icon size={22} className="msb-icon" />
                    <span>{name}</span>
                  </a>
                ) : (
                  <NavLink
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `msb-link ${isActive ? "active" : ""}`
                    }
                    onClick={onClose}
                  >
                    <Icon size={22} className="msb-icon" />
                    <span>{name}</span>
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Footer Section */}
        <div
          className="msb-footer-section"
          style={{ marginTop: "auto", padding: "16px 12px" }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "#6b7280",
              margin: "0 0 10px 14px",
              fontWeight: "700",
            }}
          >
            Developed by CSED
          </p>
          <NavLink
            to="/team"
            className={({ isActive }) => `msb-link ${isActive ? "active" : ""}`}
            onClick={onClose}
          >
            <Users size={22} className="msb-icon" />
            <span>Team</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}
