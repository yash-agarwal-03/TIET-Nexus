import { useEffect, useState } from "react";
import SocietyModal from "../components/SocietyModal";
import "./Explore.css";

// Added 'Users' to imports to solve the ReferenceError
import { 
  Users, 
  ArrowLeft 
} from "lucide-react"; 
import {
  getSocietyCategories,
  getSocietiesByCategory,
} from "../api/explore.api.js";

export default function Explore() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [societies, setSocieties] = useState([]);
  const [selectedSociety, setSelectedSociety] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSocietyCategories().then((res) => {
      setCategories(res.data || []);
    });
  }, []);

  const handleCategoryClick = async (category) => {
    setSelectedCategory(category);
    setLoading(true);
    try {
      const data = await getSocietiesByCategory(category._id);
      setSocieties(data || []);
    } catch (err) {
      console.error("Failed to fetch societies", err);
    } finally {
      setLoading(false);
    }
  };

  const categoryGradients = [
    "linear-gradient(135deg, #fde7ea, #f7c1c9)", 
    "linear-gradient(135deg, #e7effd, #c5d6f7)", 
    "linear-gradient(135deg, #fceaea, #f3b9c1)", 
    "linear-gradient(135deg, #edf2fb, #d0dcf7)", 
  ];

  const getCategoryBg = (index) => categoryGradients[index % categoryGradients.length];

  return (
    <div className="explore-page-wrapper">
      {/* Fixed Header: Independent of loading state */}
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
            {Array.isArray(categories) && categories.map((cat, index) => (
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
                <ArrowLeft size={16} /> Back to Categories
              </button>
              <h2 className="selected-category-title">{selectedCategory.name} Societies</h2>
            </div>

            {loading ? (
              <div className="explore-loading">
                <p>Loading {selectedCategory.name} communities...</p>
              </div>
            ) : (
              <div className="grid-3">
                {societies.map((s) => (
                  <div
                    key={s._id}
                    className="society-card"
                    onClick={() => setSelectedSociety(s)}
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
                      <div className="category-pill-small">
                        {selectedCategory.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {selectedSociety && (
        <SocietyModal
          society={selectedSociety}
          onClose={() => setSelectedSociety(null)}
        />
      )}
    </div>
  );
}