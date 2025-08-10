import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Welcome", href: "/", icon: "🏠" },
  { name: "Explore", href: "/explore", icon: "🧭" },
  { name: "Campus Map", href: "/map", icon: "🗺️" },
  { name: "Thapar AI", href: "/ai", icon: "🤖" },
  { name: "Feeds", href: "/feeds", icon: "📰" },
  { name: "Contact Us", href: "/contact", icon: "📞" },
  { name: "Team", href: "/team", icon: "👥" },
];

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [retracted, setRetracted] = useState(false);

  return (
    <aside
      className={`fixed z-50 inset-y-0 left-0 border-r shadow-xl transform transition-transform duration-200 lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${retracted ? "w-20" : "w-64"} bg-[#eb4034] hidden lg:block`}
      style={{ minWidth: retracted ? 80 : 256, background: '#eb4034' }}
    >
      <div className={`flex items-center justify-between p-4 border-b border-[#eb4034] ${retracted ? 'justify-center' : ''}`}>
        {!retracted && <span className="font-bold text-lg text-white tracking-wide">TIET Nexus</span>}
        <button
          className="p-1 rounded hover:bg-white/10"
          onClick={() => setRetracted((r) => !r)}
          title={retracted ? "Expand" : "Retract"}
        >
          <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={retracted ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
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
            className={`flex items-center ${retracted ? 'justify-center px-0' : 'gap-3 px-4'} py-2 rounded transition-colors duration-150 font-medium text-white hover:bg-white/10 ${
              location.pathname === item.href ? "bg-white/20 text-yellow-200 font-bold" : ""
            }`}
            style={retracted ? { width: '40px', height: '40px', justifyContent: 'center' } : {}}
            title={item.name}
          >
            <span className="text-xl">{item.icon}</span>
            {!retracted && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
