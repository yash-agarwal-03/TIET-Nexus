import { useEffect, useState } from "react";
import SocietyModal from "../components/SocietyModal";
import "./Explore.css";
// Consolidated Lucide imports to prevent ReferenceErrors
import { Users, ArrowLeft, Loader2 } from "lucide-react"; 
import {
  getSocietyCategories,
  getSocietiesByCategory,
  getSocietyById,
} from "../api/explore.api.js";

export default function Explore() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Modal & Detailed Fetching States
  const [selectedSocietyId, setSelectedSocietyId] = useState(null);
  const [societyDetails, setSocietyDetails] = useState(null);
  const [loadingSociety, setLoadingSociety] = useState(false);

  // Load categories on component mount
  useEffect(() => {
    getSocietyCategories().then((res) => {
      setCategories(res.data || []);
    });
  }, []);

  // Fetch full details when a society card is clicked
  useEffect(() => {
    if (!selectedSocietyId) return;

    setLoadingSociety(true);
    getSocietyById(selectedSocietyId)
      .then((res) => {
        setSocietyDetails(res.data);
      })
      .catch((err) => console.error("Error fetching details:", err))
      .finally(() => setLoadingSociety(false));
  }, [selectedSocietyId]);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    try {
      const res = await getSocietiesByCategory(category._id);
      // Backend normalization: handle both direct arrays and {data: []} structures
      setSocieties(res.data || res || []);
    } catch (err) {
      console.error("Failed to fetch societies", err);
    } finally {
      setLoading(false);
    }
  };

  // Logic for Diagonal colors in Category Grid (4 columns)
  const getDiagonalClass = (index) => {
    const columns = 4;
    const row = Math.floor(index / columns);
    const col = index % columns;
    return (row + col) % 2 !== 0 ? "bg-alt-blue" : "bg-main-red";
  };

  // Logic for Diagonal colors in Society Card Pill (3 columns)
  const getPillStyle = (index) => {
    const columns = 3;
    const row = Math.floor(index / columns);
    const col = index % columns;
    return (row + col) % 2 !== 0 ? "pill-blue" : "pill-red";
  };

  return (
    <div className="explore-page-wrapper">
      <header className="explore-hero-section">
        <h1 className="explore-main-title">Explore TIET Societies & Clubs</h1>
        <p className="explore-description-text">
          Discover amazing communities, develop new skills, and make lifelong
          connections. Join a society that matches your interests and passions.
        </p>
      </header>

      <div className="explore-content-area">
        {!selectedCategory ? (
          /* --- Category Selection View --- */
          <div className="category-grid">
            {categories.map((cat, index) => (
              <div 
                key={cat._id} 
                className="category-card-animated" 
                onClick={() => handleCategoryClick(cat)}
              >
                {/* The expanding circle background */}
                <div className={`category-card-bg ${getDiagonalClass(index)}`}></div>
                
                <div className="category-card-content">
                  <h3 className="category-card-title-main">{cat.name}</h3>
                  <div className="category-card-explore">
                    Explore <span className="arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- Societies List View --- */
          <div className="societies-list-container">
            <div className="view-header">
              <button className="back-link" onClick={() => setSelectedCategory(null)}>
                <ArrowLeft size={18} /> Back to Categories
              </button>
              <h2 className="selected-category-title">
                {selectedCategory.name} Societies
              </h2>
            </div>

            <div className="grid-3">
              {loading ? (
                /* Centered Loader within the grid */
                <div className="explore-loading-container">
                  <div className="loader-wrapper">
                    <Loader2 className="animate-spin loader-icon" size={40} />
                    <p className="loader-text">Finding {selectedCategory.name} societies...</p>
                  </div>
                </div>
              ) : (
                societies.map((s, index) => (
                  <div
                    key={s._id}
                    className="society-card"
                    onClick={() => setSelectedSocietyId(s._id)}
                  >
                    <div className="society-card-content">
                      <h3 className="society-card-title">{s.name}</h3>
                      <p className="society-card-description">
                        {s.shortIntro || "Discover more about this community and their campus activities."}
                      </p>
                    </div>

                    <div className="society-card-footer">
                      <div className="meta-row">
                        <Users size={16} className="footer-icon" />
                        <span>{s.activeMembers ?? "0"} members</span>
                      </div>
                      <div className={`category-pill-small ${getPillStyle(index)}`}>
                        {selectedCategory.name}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Society Details Modal */}
      {selectedSocietyId && (
        <SocietyModal
          society={societyDetails}
          isLoading={loadingSociety}
          onClose={() => {
            setSelectedSocietyId(null);
            setSocietyDetails(null);
          }}
        />
      )}
    </div>
  );
}