import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileSidebar.css';

// Import the same navigation items from Sidebar
const navItems = [
  { to: '/', label: 'Welcome', icon: '🏠' },
  { to: '/explore', label: 'Explore', icon: '🔎' },
  { to: '/campus-map', label: 'Campus Map', icon: '🗺️' },
  { to: '/thapar-ai', label: 'Thapar AI', icon: '🤖' },
  { to: '/feeds', label: 'Feeds', icon: '📡' },
  { to: '/lost-and-found', label: 'Lost & Found', icon: '🧭' },
  { to: '/contact', label: 'Contact Us', icon: '📞' },
  { to: '/team', label: 'Team', icon: '👥' }
];

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div 
        className={`mobile-sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      <aside className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="mobile-sidebar-header">
          <div className="brand">
            <div className="brand-logo">ti</div>
            <div className="brand-name">TIET Nexus</div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="user-box">
          <div className="avatar">G</div>
          <div className="user-meta">
            <div className="user-name">Guest</div>
          </div>
        </div>

        <nav className="mobile-nav">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active' : '')
              }
              onClick={onClose}
            >
              <span className="nav-icon" aria-hidden>{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default MobileSidebar;