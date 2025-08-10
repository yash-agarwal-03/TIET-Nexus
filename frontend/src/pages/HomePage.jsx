import React from "react";


function HomePage() {
  return (
  <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[#2563eb] text-white font-bold text-3xl">T</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#222] tracking-tight font-sans">TIET Nexus</h1>
        </div>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl font-sans">
          Your campus, your community, your hub. Discover societies, events, feeds, and more—all in one place.
        </p>
        <a href="/explore" className="inline-block bg-[#d51212] hover:bg-[#a80e0e] text-white font-semibold px-8 py-3 rounded-lg shadow transition-all text-lg font-sans">Explore Societies</a>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#d51212]/10 text-[#d51212] text-3xl mb-3">
            <svg width="32" height="32" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
          </span>
          <h3 className="text-xl font-bold mb-2 text-[#d51212] font-sans">Explore Societies</h3>
          <p className="text-gray-600 font-sans">Browse and join student societies, clubs, and organizations that match your interests.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#d51212]/10 text-[#d51212] text-3xl mb-3">
            <svg width="32" height="32" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17a4 4 0 0 1 4-4h12"/><circle cx="8" cy="17" r="2"/></svg>
          </span>
          <h3 className="text-xl font-bold mb-2 text-[#d51212] font-sans">Campus Feeds</h3>
          <p className="text-gray-600 font-sans">Stay updated with the latest news, announcements, and events happening around campus.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#d51212]/10 text-[#d51212] text-3xl mb-3">
            <svg width="32" height="32" fill="none" stroke="#d51212" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="7" height="13"/><rect x="14" y="3" width="7" height="17"/></svg>
          </span>
          <h3 className="text-xl font-bold mb-2 text-[#d51212] font-sans">Interactive Map</h3>
          <p className="text-gray-600 font-sans">Navigate the campus with an interactive map and discover key locations and facilities.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 text-center bg-[#d51212] text-white mt-12 rounded-xl mx-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-sans">Ready to get started?</h2>
        <p className="text-lg mb-6 font-sans">Sign in to personalize your experience and connect with your campus community.</p>
        <a href="/feeds" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-[#d51212] font-semibold px-8 py-3 rounded-lg shadow transition-all text-lg font-sans">View Campus Feeds</a>
      </section>
    </div>
  );
}

export default HomePage;
