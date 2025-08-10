import React, { useEffect, useState, useRef } from "react";
import SocietyCard from "../components/SocietyCard";



function ExplorePage() {
  const [societies, setSocieties] = useState([]);
  const [selectedSociety, setSelectedSociety] = useState(null);

  useEffect(() => {
    fetch("/data/societies.json")
      .then((res) => res.json())
      .then(setSocieties);
  }, []);

  // Modal logic
  const overlayRef = useRef();
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) setSelectedSociety(null);
  };

  return (
    <div className="min-h-screen bg-[#eb4034] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Explore TIET Societies & Clubs</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Discover amazing communities, develop new skills, and make lifelong connections. Join a society that matches your interests and passions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {societies.map((society) => (
            <SocietyCard key={society.id} society={society} onClick={() => setSelectedSociety(society)} />
          ))}
        </div>
        {/* Modal for society details */}
        {selectedSociety && (
          <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-fadeIn p-8 border border-gray-100">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-[#eb4034] text-2xl font-bold"
                onClick={() => setSelectedSociety(null)}
                aria-label="Close"
              >
                &times;
              </button>
              {/* About Us */}
              <h2 className="text-xl font-bold mb-2">About Us</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">{selectedSociety.fullDescription}</p>
              <hr className="my-4" />
              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center gap-2"><span className="font-bold text-[#eb4034]">{selectedSociety.memberCount}</span> active members</div>
                <div className="flex items-center gap-2"><span className="font-bold text-[#eb4034]">{selectedSociety.contactEmail}</span></div>
                <div className="flex items-center gap-2">Established in <span className="font-bold text-[#eb4034]">{selectedSociety.establishedYear}</span></div>
                <div className="flex items-center gap-2"><span className="font-bold text-[#eb4034]">{selectedSociety.contactPhone}</span></div>
                <div className="flex items-center gap-2">{selectedSociety.location}</div>
              </div>
              <hr className="my-4" />
              {/* Executive Team */}
              <h3 className="font-bold text-lg mb-2">Executive Team</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedSociety.executiveMembers?.map((m) => (
                  <div key={m.email} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-lg">{/* Avatar Placeholder */}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{m.name}</div>
                      <div className="text-sm text-gray-600">{m.position}</div>
                      <div className="text-xs text-gray-500">{m.email}</div>
                    </div>
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              {/* Activities & Achievements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold mb-2">Our Activities</h4>
                  <ul className="space-y-2">
                    {selectedSociety.activities?.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0"></span>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Recent Achievements</h4>
                  <ul className="space-y-2">
                    {selectedSociety.achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <hr className="my-4" />
              {/* Upcoming Events */}
              <h3 className="font-bold text-lg mb-2">Upcoming Events</h3>
              <div className="space-y-3 mb-6">
                {selectedSociety.upcomingEvents?.map((event, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-gray-900">{event.name}</div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span>{event.date}</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Socials & Join Button */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
                <div className="flex gap-3">
                  {selectedSociety.socialMedia?.instagram && (
                    <a href={selectedSociety.socialMedia.instagram} className="flex items-center gap-2 px-3 py-2 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 text-sm">
                      <span className="i-tabler-brand-instagram"></span> Instagram
                    </a>
                  )}
                  {selectedSociety.socialMedia?.twitter && (
                    <a href={selectedSociety.socialMedia.twitter} className="flex items-center gap-2 px-3 py-2 rounded border border-gray-200 text-gray-700 hover:bg-gray-100 text-sm">
                      <span className="i-tabler-brand-twitter"></span> Twitter
                    </a>
                  )}
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition-all text-base">Join Society</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExplorePage;
