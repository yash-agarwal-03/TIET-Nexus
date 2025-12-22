import React from "react";
import {
  X,
  Users,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  Instagram,
  Twitter,
} from "lucide-react";
import "./SocietyModal.css";

const SocietyModal = ({ society, onClose }) => {
  if (!society) return null;

  // Data Normalization
  const name = society.name;
  const categoryName = society.category?.name;
  
  // Base64 Logo Handling: Receives encoded string or URL
  const logoUrl = society.logo || "/place.svg";

  const executiveTeam = Array.isArray(society.executiveTeam) ? society.executiveTeam : [];
  const activities = Array.isArray(society.ourActivities) ? society.ourActivities : [];
  const achievements = Array.isArray(society.recentAchievements) ? society.recentAchievements : [];
  const events = Array.isArray(society.upcomingEvents) ? society.upcomingEvents : [];

  return (
    <div className="society-modal-overlay" onClick={onClose}>
      <div className="society-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button at top-right */}
        <button className="society-modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="society-modal-header">
  <div className="header-info">
    <h2 className="society-modal-title">{name}</h2>
    {categoryName && (
      <span className="society-modal-tag">{categoryName}</span>
    )}
  </div>

  <div className="society-logo-container">
    <img
      src={logoUrl}
      alt={`${name} logo`}
      className="society-logo-img"
      onError={(e) => { e.currentTarget.src = "/place.svg"; }}
    />
  </div>
</div>

        {society.about && (
  <div className="modal-section about-full-content">
    <h3 className="section-title">About Us</h3>
    {/* Ensure no clamping classes are used here so the full text renders */}
    <p className="modal-description-full">{society.about}</p>
  </div>
)}

        <div className="society-modal-divider" />

        <div className="society-info-grid">
          <div className="info-column">
            {society.stats?.activeMembers && (
              <div className="info-item">
                <Users size={18} className="red-icon" />
                <span><b>{society.stats.activeMembers}</b> active members</span>
              </div>
            )}
            {society.stats?.establishedYear && (
              <div className="info-item">
                <Calendar size={18} className="red-icon" />
                <span>Established <b>{society.stats.establishedYear}</b></span>
              </div>
            )}
            {society.stats?.location && (
              <div className="info-item">
                <MapPin size={18} className="red-icon" />
                <span>{society.stats.location}</span>
              </div>
            )}
          </div>

          <div className="info-column">
            {society.contact?.email && (
              <div className="info-item">
                <Mail size={18} className="red-icon" />
                <span>{society.contact.email}</span>
              </div>
            )}
            {society.contact?.phone && (
              <div className="info-item">
                <Phone size={18} className="red-icon" />
                <span>{society.contact.phone}</span>
              </div>
            )}
            {society.contact?.website && (
              <div className="info-item">
                <Globe size={18} className="red-icon" />
                <a href={society.contact.website} target="_blank" rel="noreferrer">Visit Website</a>
              </div>
            )}
          </div>
        </div>

        {executiveTeam.length > 0 && (
          <>
            <div className="society-modal-divider" />
            <div className="society-modal-section">
              <h3 className="section-title">Executive Team</h3>
              <div className="exec-team-grid">
                {executiveTeam.map((member, index) => (
                  <div key={index} className="exec-member-card">
                    <div className="exec-avatar-fallback">
                      {member.name.split(" ").map(n => n[0]).join("").toUpperCase()}
                    </div>
                    <div className="exec-member-details">
                      <p className="exec-name">{member.name}</p>
                      <p className="exec-role">{member.role}</p>
                      <p className="exec-email">{member.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="society-modal-divider" />

        <div className="activities-achievements-container">
          <div className="activities-section">
            <h3 className="section-title">Our Activities</h3>
            <ul className="custom-list">
              {activities.length > 0 ? (
                activities.map((a, i) => <li key={i}><span className="dot red-dot" />{a}</li>)
              ) : (
                <li className="no-data">TBA</li>
              )}
            </ul>
          </div>
          <div className="achievements-section">
            <h3 className="section-title">Recent Achievements</h3>
            <ul className="custom-list">
              {achievements.length > 0 ? (
                achievements.map((ach, i) => <li key={i}><span className="dot red-dot" />{ach}</li>)
              ) : (
                <li className="no-data">TBA</li>
              )}
            </ul>
          </div>
        </div>

        <div className="society-modal-divider" />

        <div className="society-modal-section">
          <h3 className="section-title">Upcoming Events</h3>
          <div className="events-stack">
            {events.length > 0 ? (
              events.map((e, i) => (
                <div key={i} className="event-row-card">
                  <p className="event-row-title">{e.title}</p>
                  <div className="event-row-meta">
                    <Calendar size={14} /> {e.date} | <MapPin size={14} /> {e.location}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-data">No upcoming events.</p>
            )}
          </div>
        </div>

        {(society.socials?.instagram || society.socials?.twitter) && (
          <div className="society-modal-footer">
            <div className="social-links-row">
              {society.socials.instagram && (
                <a href={society.socials.instagram} target="_blank" rel="noreferrer" className="social-pill-btn">
                  <Instagram size={16} /> Instagram
                </a>
              )}
              {society.socials.twitter && (
                <a href={society.socials.twitter} target="_blank" rel="noreferrer" className="social-pill-btn">
                  <Twitter size={16} /> Twitter
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocietyModal;