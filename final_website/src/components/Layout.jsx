import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar.jsx';
import MobileHeader from './MobileHeader';
import MobileSidebar from './MobileSidebar';
import './Layout.css';

export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Check initially
    checkIfMobile();

    // Add resize listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close mobile menu if window is resized to desktop
  useEffect(() => {
    if (!isMobileView && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileView]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`app-shell ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <MobileHeader 
        onMenuClick={toggleMobileMenu} 
        isMenuOpen={isMobileMenuOpen}
      />
      
      {/* Desktop Sidebar */}
      <div className="sidebar-container">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}


