import React, { useEffect, useState } from "react";

function MapPage() {
  const [buildings, setBuildings] = useState({});
  const [selected, setSelected] = useState(null);

  useEffect(() => {
  fetch("/data/map.json")
      .then((res) => res.json())
      .then(setBuildings);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TIET Campus Map</h1>
          <p className="text-lg text-gray-600">
            Explore our beautiful campus and discover all the facilities available to you
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <div className="lg:col-span-2 relative h-[400px] md:h-[600px] bg-gradient-to-br from-green-100 to-blue-100 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Interactive clickable buildings */}
            {Object.keys(buildings).map((key, idx) => {
              const b = buildings[key];
              // Simple placement for demo; can be improved for real map
              const positions = [
                { top: '20%', left: '10%' },
                { top: '20%', right: '10%' },
                { bottom: '20%', left: '10%' },
                { bottom: '20%', right: '10%' },
              ];
              return (
                <div
                  key={key}
                  className="absolute w-28 h-20 bg-blue-500 rounded cursor-pointer hover:bg-blue-600 flex items-center justify-center text-white text-xs font-semibold text-center shadow-lg transition-colors"
                  style={positions[idx]}
                  onClick={() => setSelected(key)}
                >
                  {b.name}
                </div>
              );
            })}
          </div>
          {/* Info Section */}
          <div>
            {selected && buildings[selected] ? (
              <div className="bg-white rounded shadow p-6">
                <h2 className="text-2xl font-bold mb-2">{buildings[selected].name}</h2>
                <p className="text-gray-700 mb-2">{buildings[selected].description}</p>
                <div className="mb-2">
                  <span className="font-semibold">Facilities:</span>
                  <ul className="list-disc ml-6 text-sm text-gray-600">
                    {buildings[selected].facilities.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-gray-500 mb-1">Timings: {buildings[selected].timings}</div>
                <div className="text-sm text-gray-500 mb-1">Contact: {buildings[selected].contact}</div>
                <div className="text-sm text-gray-500">Capacity: {buildings[selected].capacity}</div>
                <button className="mt-4 px-3 py-1 bg-blue-600 text-white rounded" onClick={() => setSelected(null)}>
                  Close
                </button>
              </div>
            ) : (
              <div className="bg-white rounded shadow p-6 text-center text-gray-500">Click a building to see details.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
