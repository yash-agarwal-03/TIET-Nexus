import React from 'react';
import './SocietyModal.css';


const SocietyModal = ({ society, onClose }) => {
  if (!society) return null;

  // Map the incoming society object to known fields in static/societies.js
  const logoUrl = society.logo || 'https://via.placeholder.com/64x64?text=Logo';
  const tag = society.categoryNames?.[0] || society.tag || 'Society';
  const desc = society.about || society.desc || '';
  const members = society.stats?.activeMembers ?? society.members ?? 'N/A';
  const year = society.stats?.establishedYear ?? society.year ?? '—';
  const location = society.stats?.location || society.location || 'Location not set';
  const email = society.contact?.email || society.email || '';
  const phone = society.contact?.phone || society.phone || '';
  const socials = society.socials || {};

  // Build executive team list from the real field executiveTeam
  const execs = (society.executiveTeam && society.executiveTeam.length > 0)
    ? society.executiveTeam.map((e) => ({
        name: e.name || e.fullName || 'Member',
        role: e.role || 'Member',
        email: e.email || '',
        phone: e.phone || '',
        img: e.img || (() => {
          const initials = (e.name || 'M').split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
          return `https://via.placeholder.com/48?text=${encodeURIComponent(initials)}`;
        })()
      }))
    : [{ name: 'Committee coming soon', role: '', email: '', phone: '', img: 'https://via.placeholder.com/48?text=?' }];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>×</button>

        {/* Header with logo */}
        <div className="modal-header">
          <div className="header-main">
            <h2 className="modal-title">{society.name}</h2>
            <div className="modal-tag pill">{tag}</div>
          </div>
          <img src={logoUrl} alt="Society Logo" className="modal-logo" />
        </div>

        {/* Description */}
        <div className="modal-section">
          <h3 className="section-title">Description</h3>
          <p className="modal-description">{desc}</p>
        </div>

        {/* Info Grid */}
        <div className="modal-section info-grid">
          <div className="info-col">
            <div className="info-bullet"><span className="icon">👥</span> <b>{members}</b> active members</div>
            <div className="info-bullet"><span className="icon">📅</span> Established in <b>{year}</b></div>
            <div className="info-bullet"><span className="icon">📍</span> {location}</div>
          </div>
          <div className="info-col">
            <div className="info-bullet"><span className="icon">✉️</span> {email || 'Email not set'}</div>
            <div className="info-bullet"><span className="icon">📞</span> {phone || 'Phone not set'}</div>
          </div>
        </div>

        {/* Executive Team */}
        <div className="modal-section">
          <h3 className="section-title">Executive Team</h3>
          <div className="exec-team-row">
            {execs.map((exec, idx) => (
              <div key={idx} className="exec-card">
                <img src={exec.img} alt={exec.name} className="exec-img" />
                <div className="exec-details">
                  <div className="exec-name">{exec.name}</div>
                  {exec.role && <div className="exec-role">{exec.role}</div>}
                  {exec.email && <div className="exec-contact">✉️ {exec.email}</div>}
                  {exec.phone && <div className="exec-contact">📞 {exec.phone}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="footer-left">
            {socials.instagram && (
              <a href={socials.instagram} target="_blank" rel="noreferrer" className="footer-btn instagram"><span role="img" aria-label="Instagram">📷</span> Instagram</a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noreferrer" className="footer-btn twitter"><span role="img" aria-label="Twitter">🐦</span> Twitter</a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="footer-btn linkedin"><span role="img" aria-label="LinkedIn">🔗</span> LinkedIn</a>
            )}
          </div>
          <button className="join-button">Join Society</button>
        </div>
      </div>
    </div>
  );
};

export default SocietyModal;