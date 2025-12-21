// Sidebar.jsx
import "./Sidebar.css";
import { NavLink, useLocation } from "react-router-dom";
import { X, LogIn, LogOut } from "lucide-react";
import {
  Home,
  Compass,
  Map,
  Bot,
  Rss,
  Phone,
  Users,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useModal } from "../context/ModalContext";

const navigation = [
  { name: "Welcome", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Campus Map", href: "/map", icon: Map },
  { name: "Thapar AI", href: "/ai", icon: Bot },
  { name: "Feeds", href: "/feeds", icon: Rss },
  { name: "Lost & Found", href: "/lnf", icon: Users },
  { name: "Contact Us", href: "/contact", icon: Phone },
  { name: "Team", href: "/team", icon: Users },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const { user, isLoggedIn, logout } = useAuth();
  const { openLogin } = useModal();

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "G";

  const Content = () => (
    <div className="sb-container">
      {/* Logo */}
      <div className="sb-logo">
        <div className="sb-logo-img">
          <img src="/tiet.png" alt="TIET" />
        </div>
        <span className="sb-logo-text">TIET Nexus</span>
      </div>

      {/* Profile */}
      <div className="sb-profile">
        <div className="sb-avatar">{initials}</div>
        <div className="sb-profile-info">
          <p className="sb-name">
            {isLoggedIn ? user.name : "Guest"}
          </p>
          {isLoggedIn && (
            <p className="sb-email">{user.email}</p>
          )}
        </div>

        {!isLoggedIn ? (
          <button className="sb-login-btn" onClick={openLogin}>
            <LogIn size={18} />
          </button>
        ) : (
          <button className="sb-logout-btn" onClick={logout}>
            <LogOut size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="sb-nav">
        <ul>
          {navigation.map(({ name, href, icon: Icon }) => {
            const active = location.pathname === href;
            return (
              <li key={name}>
                <NavLink
                  to={href}
                  className={`sb-link ${active ? "active" : ""}`}
                  onClick={onClose}
                >
                  <Icon size={22} />
                  <span>{name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="sb-desktop">
        <Content />
      </aside>

      {/* Mobile */}
      <aside className={`sb-mobile ${isOpen ? "open" : ""}`}>
        <div className="sb-mobile-header">
          <span>TIET Nexus</span>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <Content />
      </aside>
    </>
  );
}
