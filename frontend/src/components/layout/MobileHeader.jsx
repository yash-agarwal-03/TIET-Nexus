import React from "react";

const MobileHeader = ({ onMenuClick }) => (
  <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-[#eb4034] bg-gradient-to-r from-[#eb4034] to-[#ffb3a7] px-4 shadow-md sm:gap-x-6 sm:px-6 lg:hidden">
  <button className="p-2 rounded hover:bg-[#eb4034]/80" onClick={onMenuClick}>
      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
        <span className="text-[#eb4034] font-bold text-sm">T</span>
      </div>
      <span className="text-xl font-bold text-white tracking-wide">TIET Nexus</span>
    </div>
  </div>
);

export default MobileHeader;
