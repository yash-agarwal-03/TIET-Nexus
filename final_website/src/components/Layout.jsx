// Layout.jsx
import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import MobileHeader from "./MobileHeader";
import MobileSidebar from "./MobileSidebar";
import "./Layout.css";

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      {/* Mobile Header: Hidden on Desktop via CSS in the component */}
      <MobileHeader onMenuClick={() => setIsMobileMenuOpen(true)} />

      {/* Desktop Sidebar: Controlled by .sidebar-container in Layout.css */}
      <div className="sidebar-container">
        <Sidebar />
      </div>

      {/* Mobile Sidebar: Sliding Drawer */}
      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Overlay: Mirrors the logic in your Next.js main-layout.tsx */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}