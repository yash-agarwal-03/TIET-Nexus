import React from "react";

const MobileHeader = ({ onMenuClick }) => (
  <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-md sm:gap-x-6 sm:px-6 lg:hidden">
    <button className="text-[#d51212] p-2 rounded hover:bg-[#d51212]/10" onClick={onMenuClick}>
      <svg className="h-6 w-6 text-[#d51212]" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
      <div className="flex items-center gap-3 font-sans">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#d51212]/10 text-[#d51212] font-bold text-lg">T</span>
        <span className="flex items-center gap-2 font-extrabold text-xl text-[#d51212] tracking-tight font-sans">TIET Nexus</span>
      </div>
  </div>
);

export default MobileHeader;
