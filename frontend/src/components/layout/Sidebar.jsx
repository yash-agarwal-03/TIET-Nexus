import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Welcome", href: "/", icon: (
    <svg width="22" height="22" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12L12 3l9 9"/><path d="M9 21V9h6v12"/></svg>
  ) },
  { name: "Explore", href: "/explore", icon: (
    <svg width="22" height="22" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  ) },
  { name: "Campus Map", href: "/map", icon: (
    <svg width="22" height="22" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="7" height="13"/><rect x="14" y="3" width="7" height="17"/></svg>
  ) },
  { name: "Thapar AI", href: "/ai", icon: (
    <svg width="22" height="22" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
  ) },
  { name: "Feeds", href: "/feeds", icon: (
    <svg width="22" height="22" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17a4 4 0 0 1 4-4h12"/><circle cx="8" cy="17" r="2"/></svg>
  ) },
  { name: "Contact Us", href: "/contact", icon: (
    <svg width="22" height="22" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5"/><path d="M3 10.5l9 6 9-6"/></svg>
  ) },
  { name: "Team", href: "/team", icon: (
    <svg width="22" height="22" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><circle cx="8" cy="8" r="4"/><circle cx="16" cy="8" r="4"/><rect x="2" y="16" width="20" height="6" rx="3"/></svg>
  ) },
];

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [retracted, setRetracted] = useState(false);

  return (
    <aside
      className={`fixed z-50 inset-y-0 left-0 border-r shadow-xl transform transition-all duration-300 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
  } ${retracted ? "w-20" : "w-64"} bg-white hidden lg:block font-sans border-r border-gray-200`}
  style={{ minWidth: retracted ? 80 : 256, background: '#fff', borderRight: '1px solid #eee' }}
    >
      <div className={`flex items-center justify-between p-4 border-b border-gray-200 ${retracted ? 'justify-center' : ''}`}>
        {!retracted && (
          <span className="flex items-center gap-2 font-extrabold text-2xl text-[#d51212] tracking-tight font-sans">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#d51212]/10 text-[#d51212] font-bold text-lg">T</span>
            TIET Nexus
          </span>
        )}
        <button
          className="p-1 rounded hover:bg-white/10"
          onClick={() => setRetracted((r) => !r)}
          title={retracted ? "Expand" : "Retract"}
        >
          <svg className="h-5 w-5 text-[#d51212]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={retracted ? "M19 12l-7-7v14z" : "M9 5l7 7-7 7"}
            />
          </svg>
        </button>
        {!retracted && (
          <button className="lg:hidden ml-2" onClick={onClose}>
            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      <nav className={`flex flex-col gap-1 mt-4 ${retracted ? 'items-center' : ''}`}>
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center ${retracted ? 'justify-center px-0' : 'gap-3 px-4'} py-2 rounded transition-colors duration-150 font-semibold text-[#d51212] hover:bg-[#d51212]/10 ${
              location.pathname === item.href ? "bg-[#d51212]/10 text-[#d51212] font-bold" : ""
            } font-sans`}
            style={retracted ? { width: '40px', height: '40px', justifyContent: 'center' } : {}}
            title={item.name}
          >
            <span className="text-xl">{React.cloneElement(item.icon, { stroke: '#d51212' })}</span>
            {!retracted && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
