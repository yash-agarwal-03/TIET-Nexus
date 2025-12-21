// MobileHeader.jsx — STRICT 1:1 translation of Next.js mobile-header.tsx
import React from "react";
import { Menu, X } from "lucide-react";
import "./MobileHeader.css";

export default function MobileHeader({ onMenuClick, isMenuOpen }) {
  return (
    <div className="mh-root">
      <button
        className="mh-menu-btn"
        onClick={onMenuClick}
        aria-expanded={!!isMenuOpen}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        type="button"
      >
        {!isMenuOpen ? <Menu className="mh-icon" /> : <X className="mh-icon" />}
      </button>

      <div className="mh-brand">
        <div className="mh-logo">
          <img
            src="/tiet.png"
            alt="Thapar Institute Logo"
          />
        </div>
        <span className="mh-title">TIET Nexus</span>
      </div>
    </div>
  );
}
