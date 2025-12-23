import "./Sidebar.css";
import { NavLink, useLocation } from "react-router-dom";
import { X, Home, Compass, Map, Bot, Rss, Phone, Users } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import LoginButton from "./LoginButton";

// Team removed from main navigation array
const navigation = [
  { name: "Welcome", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Campus Map", href: "/map", icon: Map },
  { 
    name: "Thapar AI", 
    href: "https://tiet-nexus-rag-chatbot.streamlit.app/", 
    icon: Bot, 
    isExternal: true 
  },
  { name: "Feeds", href: "/feeds", icon: Rss },
  { name: "Lost & Found", href: "/lost-found", icon: Users },
  { name: "Contact Us", href: "/contact", icon: Phone },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const { user, isLoggedIn } = useAuth();

  const getRoleLabel = (role) => {
    const labels = {
      STUDENT: "Student",
      LNF_ADMIN: "Lost & Found Admin",
      THAPAR_ADMIN: "Thapar Admin",
      SOCIETY_ADMIN: "Society Admin",
    };
    return labels[role] || "Guest";
  };

  const initials = user?.name
    ? user.name.split(" ").map((n) => n[0]).join("")
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

      {/* Profile Section */}
      <div className="sb-profile-wrapper">
        <div className="sb-profile">
          <div className="sb-avatar">{initials}</div>
          <div className="sb-profile-info">
            <p className="sb-name">{isLoggedIn ? user.name : "Guest"}</p>
            <p className="sb-role-label">
              {isLoggedIn ? getRoleLabel(user.role) : "Signed in as Guest"}
            </p>
          </div>
        </div>
        <div className="sb-auth-wrapper">
          <LoginButton />
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sb-nav">
        <ul>
          {navigation.map(({ name, href, icon: Icon, isExternal }) => {
            const active = location.pathname === href;
            const linkInner = (
              <>
                <Icon size={22} />
                <span>{name}</span>
              </>
            );

            return (
              <li key={name}>
                {isExternal ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="sb-link" onClick={onClose}>
                    {linkInner}
                  </a>
                ) : (
                  <NavLink to={href} className={`sb-link ${active ? "active" : ""}`} onClick={onClose}>
                    {linkInner}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Footer Section */}
      <div className="sb-footer-section" style={{ marginTop: 'auto', paddingTop: '20px' }}>
        <p style={{ fontSize: '12px', color: '#6b7280', margin: '0 0 10px 14px', fontWeight: '700' }}>
          Developed by CSED
        </p>
        <NavLink
          to="/team"
          className={({ isActive }) => `sb-link ${isActive ? "active" : ""}`}
          onClick={onClose}
        >
          <Users size={22} />
          <span>Team</span>
        </NavLink>
      </div>
    </div>
  );

  return (
    <>
      <aside className="sb-desktop">
        <Content />
      </aside>

      <aside className={`sb-mobile ${isOpen ? "open" : ""}`}>
        <div className="sb-mobile-header">
          <span>TIET Nexus</span>
          <button onClick={onClose}><X size={20} /></button>
        </div>
        <Content />
      </aside>
    </>
  );
}