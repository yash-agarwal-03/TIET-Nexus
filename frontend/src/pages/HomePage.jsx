import React from "react";


function HomePage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-800 mb-6 drop-shadow-lg">TIET Nexus</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
          Your campus, your community, your hub. Discover societies, events, feeds, and more—all in one place.
        </p>
        <a href="/explore" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow transition-all text-lg">Explore Societies</a>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl mb-3">🧭</span>
          <h3 className="text-xl font-bold mb-2 text-blue-700">Explore Societies</h3>
          <p className="text-gray-600">Browse and join student societies, clubs, and organizations that match your interests.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl mb-3">📰</span>
          <h3 className="text-xl font-bold mb-2 text-blue-700">Campus Feeds</h3>
          <p className="text-gray-600">Stay updated with the latest news, announcements, and events happening around campus.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <span className="text-4xl mb-3">🗺️</span>
          <h3 className="text-xl font-bold mb-2 text-blue-700">Interactive Map</h3>
          <p className="text-gray-600">Navigate the campus with an interactive map and discover key locations and facilities.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 text-center bg-blue-700 text-white mt-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-6">Sign in to personalize your experience and connect with your campus community.</p>
        <a href="/feeds" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-3 rounded-lg shadow transition-all text-lg">View Campus Feeds</a>
      </section>
    </div>
  );
}

export default HomePage;
