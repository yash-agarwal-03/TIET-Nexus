import React from 'react';
import './MobileHeader.css';

const MobileHeader = ({ onMenuClick, isMenuOpen }) => {
  return (
    <div className="mobile-header">
      <button 
        className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`} 
        onClick={onMenuClick}
        aria-label="Toggle navigation menu"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`menu-icon ${isMenuOpen ? 'open' : ''}`}
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <h1 className="mobile-title">TIET Nexus</h1>
    </div>
  );
};

export default MobileHeader;