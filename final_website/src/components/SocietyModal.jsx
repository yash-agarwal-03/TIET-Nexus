import React from 'react';
import { 
  X, Users, Calendar, MapPin, Mail, Phone, Globe, Instagram, Twitter 
} from 'lucide-react';
import './SocietyModal.css';

const SocietyModal = ({ society, onClose }) => {
  if (!society) return null;

  // Data normalization to handle various backend formats
  const logoUrl = society.logo || '/place.svg';
  const categories = Array.isArray(society.categoryNames) ? society.categoryNames : (society.categories || []);
  const desc = society.fullDescription || society.about || society.desc || '';
  const members = society.memberCount ?? society.stats?.activeMembers ?? 'N/A';
  const year = society.establishedYear ?? society.stats?.establishedYear ?? '—';
  const location = society.location || society.stats?.location || 'Location not set';
  
  // Executive Team normalization
  const execs = (society.executiveMembers || society.executiveTeam || []).map(e => ({
    name: e.name || 'Member',
    role: e.position || e.role || 'Member',
    email: e.email || '',
    img: e.avatar || e.img || null
  }));

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={24} /></button>

        <div className="modal-header">
          <div className="header-main">
            <h2 className="modal-title">{society.name}</h2>
            <div className="modal-tags">
              {categories.map((c, i) => (
                <span key={i} className="modal-tag pill">{c}</span>
              ))}
            </div>
          </div>
          <div className="modal-logo-container">
            <img src={logoUrl} alt="Logo" className="modal-logo" />
          </div>
        </div>

        <div className="modal-section">
          <h3 className="section-title">About Us</h3>
          <p className="modal-description">{desc}</p>
        </div>

        <div className="modal-divider" />

        <div className="modal-section info-grid">
          <div className="info-col">
            <div className="info-bullet"><Users size={20} className="red-icon" /> <span><b>{members}</b> active members</span></div>
            <div className="info-bullet"><Calendar size={20} className="red-icon" /> <span>Established in <b>{year}</b></span></div>
            <div className="info-bullet"><MapPin size={20} className="red-icon" /> <span>{location}</span></div>
          </div>
          <div className="info-col">
            <div className="info-bullet"><Mail size={20} className="red-icon" /> <span>{society.contactEmail || society.email || 'Email not set'}</span></div>
            <div className="info-bullet"><Phone size={20} className="red-icon" /> <span>{society.contactPhone || society.phone || 'Phone not set'}</span></div>
            {society.website && (
              <div className="info-bullet"><Globe size={20} className="red-icon" /> <a href={society.website} target="_blank" rel="noreferrer">Visit Website</a></div>
            )}
          </div>
        </div>

        <div className="modal-divider" />

        <div className="modal-section">
          <h3 className="section-title">Executive Team</h3>
          <div className="exec-team-grid">
            {execs.length > 0 ? execs.map((member, index) => {
              const initials = member.name.split(" ").map(n => n[0]).join("").toUpperCase();
              return (
                <div key={index} className="exec-member-card">
                  <div className="exec-avatar">
                    {member.img ? <img src={member.img} alt={member.name} className="exec-avatar-image" /> : null}
                    <div className="exec-avatar-fallback">{initials}</div>
                  </div>
                  <div className="exec-member-info">
                    <p className="exec-member-name">{member.name}</p>
                    <p className="exec-member-position">{member.role}</p>
                    <p className="exec-member-email">{member.email}</p>
                  </div>
                </div>
              );
            }) : <p className="no-data">Executive committee coming soon.</p>}
          </div>
        </div>

        <div className="modal-divider" />

        <div className="modal-section activities-achievements">
          <div className="activities">
            <h3 className="section-title">Our Activities</h3>
            <ul className="activity-list">
              {(society.activities || []).map((a, i) => (
                <li key={i} className="activity-item"><span className="dot red-dot" /> {a}</li>
              ))}
            </ul>
          </div>
          <div className="achievements">
            <h3 className="section-title">Recent Achievements</h3>
            <ul className="achievement-list">
              {(society.achievements || []).map((ach, i) => (
                <li key={i} className="achievement-item"><span className="dot green-dot" /> {ach}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="modal-footer">
          <div className="footer-left">
            {society.socialMedia?.instagram && (
              <a href={society.socialMedia.instagram} target="_blank" rel="noreferrer" className="footer-btn">
                <Instagram size={18} /> Instagram
              </a>
            )}
            {society.socialMedia?.twitter && (
              <a href={society.socialMedia.twitter} target="_blank" rel="noreferrer" className="footer-btn">
                <Twitter size={18} /> Twitter
              </a>
            )}
          </div>
          <button className="join-society-button">Join Society</button>
        </div>
      </div>
    </div>
  );
};

export default SocietyModal;