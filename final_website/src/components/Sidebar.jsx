import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Map, Cpu, Rss, Compass, Phone, Users, LogOut, LogIn } from 'lucide-react';

const userNavItems = [
  { to: '/', label: 'Welcome', icon: Home },
  { to: '/explore', label: 'Explore', icon: Search },
  { to: '/campus-map', label: 'Campus Map', icon: Map },
  { to: '/thapar-ai', label: 'Thapar AI', icon: Cpu },
  { to: '/feeds', label: 'Feeds', icon: Rss },
  { to: '/lost-and-found', label: 'Lost & Found', icon: Compass },
  { to: '/contact', label: 'Contact Us', icon: Phone },
  { to: '/team', label: 'Team', icon: Users }
];

const adminNavItems = [
  { to: '/admin/profile', label: 'Edit Profile', icon: Home },
  { to: '/explore', label: 'Explore', icon: Search },
  { to: '/campus-map', label: 'Campus Map', icon: Map },
  { to: '/thapar-ai', label: 'Thapar AI', icon: Cpu },
  { to: '/feeds', label: 'Feeds', icon: Rss },
  { to: '/lost-and-found', label: 'Lost & Found', icon: Compass },
  { to: '/contact', label: 'Contact Us', icon: Phone },
  { to: '/team', label: 'Team', icon: Users }
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
            {isAdmin ? <LogOut size={10} /> : <LogIn size={10} />}
          </button>
        </div>
      </div>
      <nav className="nav">
        {(isAdmin ? adminNavItems : userNavItems).map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/' || item.to === '/admin/profile'}
              className={({ isActive }) =>
                'nav-link' + (isActive ? ' active' : '')
              }
            >
              <Icon className="nav-icon" aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}


