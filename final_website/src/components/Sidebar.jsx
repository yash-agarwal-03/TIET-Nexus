import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const userNavItems = [
  { to: '/', label: 'Welcome', icon: '🏠' },
  { to: '/explore', label: 'Explore', icon: '🔎' },
  { to: '/campus-map', label: 'Campus Map', icon: '🗺️' },
  { to: '/thapar-ai', label: 'Thapar AI', icon: '🤖' },
  { to: '/feeds', label: 'Feeds', icon: '📡' },
  { to: '/lost-and-found', label: 'Lost & Found', icon: '🧭' },
  { to: '/contact', label: 'Contact Us', icon: '📞' },
  { to: '/team', label: 'Team', icon: '👥' }
];

const adminNavItems = [
  { to: '/admin/profile', label: 'Edit Profile', icon: '✏️' },
  { to: '/explore', label: 'Explore', icon: '🔎' },
  { to: '/campus-map', label: 'Campus Map', icon: '🗺️' },
  { to: '/thapar-ai', label: 'Thapar AI', icon: '🤖' },
  { to: '/feeds', label: 'Feeds', icon: '📡' },
  { to: '/lost-and-found', label: 'Lost & Found', icon: '🧭' },
  { to: '/contact', label: 'Contact Us', icon: '📞' },
  { to: '/team', label: 'Team', icon: '👥' }
];

export default function Sidebar() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">ti</div>
        <div className="brand-name">TIET Nexus</div>
      </div>
      <div className={`user-box ${isAdmin ? 'admin' : ''}`}>
        <div className="avatar">
          {isAdmin ? 'A' : 'G'}
        </div>
        <div className="user-meta">
          <div className="user-name">
            {isAdmin ? 'Admin' : 'Guest'}
          </div>
          <button 
            className="toggle-admin" 
            onClick={() => setIsAdmin(!isAdmin)}
            title={isAdmin ? 'Switch to User Mode' : 'Switch to Admin Mode'}
          >
            →
          </button>
        </div>
      </div>
      <nav className="nav">
        {(isAdmin ? adminNavItems : userNavItems).map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/' || item.to === '/admin/profile'}
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }
          >
            <span className="nav-icon" aria-hidden>{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}


