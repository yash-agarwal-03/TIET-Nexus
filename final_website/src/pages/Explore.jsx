import { useEffect, useState } from "react";
import SocietyModal from "../components/SocietyModal";
import "./Explore.css";
// Added missing imports to prevent ReferenceErrors
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
  
  const [selectedSocietyId, setSelectedSocietyId] = useState(null);
  const [societyDetails, setSocietyDetails] = useState(null);
  const [loadingSociety, setLoadingSociety] = useState(false);

  useEffect(() => {
    getSocietyCategories().then((res) => {
      setCategories(res.data || []);
    });
  }, []);

  useEffect(() => {
    if (!selectedSocietyId) return;
    setLoadingSociety(true);
    getSocietyById(selectedSocietyId)
      .then((res) => setSocietyDetails(res.data))
      .catch((err) => console.error("Error fetching details:", err))
      .finally(() => setLoadingSociety(false));
  }, [selectedSocietyId]);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    try {
      const res = await getSocietiesByCategory(category._id);
      // Ensure societies array is mapped correctly from backend response
      setSocieties(res.data || res || []);
    } catch (err) {
      console.error("Failed to fetch societies", err);
    } finally {
      setLoading(false);
    }
  };

  // Restored: Exact diagonal color palette from reference
  const categoryGradients = [
    "linear-gradient(135deg, #fde7ea, #f7c1c9)", // Pink/Red
    "linear-gradient(135deg, #e7effd, #c5d6f7)", // Blue
    "linear-gradient(135deg, #fceaea, #f3b9c1)", // Darker Pink
    "linear-gradient(135deg, #edf2fb, #d0dcf7)", // Darker Blue
  ];

  const getCategoryBg = (index) => categoryGradients[index % categoryGradients.length];

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
          <div className="category-grid">
            {categories.map((cat, index) => (
              <div
                key={cat._id}
                className="category-card"
                style={{ background: getCategoryBg(index) }}
                onClick={() => handleCategoryClick(cat)}
              >
                <h3>{cat.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="societies-list-container">
            <div className="view-header">
              <button className="back-link" onClick={() => setSelectedCategory(null)}>
                <ArrowLeft size={18} /> Back to Categories
              </button>
              <h2 className="selected-category-title">{selectedCategory.name} Societies</h2>
            </div>

            {loading ? (
              <div className="explore-loading"><Loader2 className="animate-spin" size={32} /></div>
            ) : (
              <div className="grid-3">
                {societies.map((s) => (
                  <div
                    key={s._id}
                    className="society-card"
                    onClick={() => setSelectedSocietyId(s._id)}
                  >
                    <div className="society-card-content">
                      <h3 className="society-card-title">{s.name}</h3>
                      <p className="society-card-description">
                        {s.shortIntro || s.about?.slice(0, 100) || "Explore this community."}
                      </p>
                    </div>
                    <div className="society-card-footer">
                      <div className="meta-row">
                        <Users size={16} />
                        <span>{s.activeMembers ?? "—"} members</span>
                      </div>
                      <div className="category-pill-small">{selectedCategory.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

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