import React from "react";
import { Download, Maximize2, Map as MapIcon } from "lucide-react";
import "./CampusMap.css";

export default function Map() {
  const handleDownload = () => {
    // Assuming the map is named CampusMap.jpeg in your public folder
    const link = document.createElement("a");
    link.href = "/CampusMap.jpeg"; 
    link.download = "TIET_Campus_Map.png";
    link.click();
  };

  return (
    <div className="map-page-wrapper">
      <div className="map-container">
        <header className="map-header">
          <div className="map-header-content">
            <div className="map-title-row">
              <MapIcon className="map-icon-red" size={32} />
              <h1 className="map-page-title">Campus Navigator</h1>
            </div>
            <p className="map-page-subtitle">
              Navigate through Thapar Institute of Engineering & Technology
            </p>
          </div>
          
          <div className="map-actions">
            <button className="map-btn-secondary" onClick={() => window.open('/CampusMap.jpeg', '_blank')}>
              <Maximize2 size={18} />
              <span>Full View</span>
            </button>
            <button className="map-btn-primary" onClick={handleDownload}>
              <Download size={18} />
              <span>Download Map</span>
            </button>
          </div>
        </header>

        <main className="map-viewer-card">
          <div className="map-image-container">
            <img 
              src="/CampusMap.jpeg" 
              alt="TIET Campus Map" 
              className="campus-static-image"
            />
          </div>
          <div className="map-viewer-footer">
            <p>Tip: You can right-click the image to save it or use the download button above.</p>
          </div>
        </main>
      </div>
    </div>
  );
}