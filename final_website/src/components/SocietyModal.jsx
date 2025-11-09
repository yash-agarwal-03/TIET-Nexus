import React from 'react';
import './SocietyModal.css';


const SocietyModal = ({ society, onClose }) => {
  if (!society) return null;

  // Placeholder image and executive team details
  const logoUrl = society.logo || 'https://via.placeholder.com/64x64?text=Logo';
  const execs = society.executives || [
    { name: 'Dr. Ashima Singh', role: 'President', email: 'ashima@thapar.edu', phone: '', img: 'https://via.placeholder.com/48?text=AS' },
    { name: 'Dr. Vikas Sharma', role: 'Vice President', email: 'vikas.sharma@thapar.edu', phone: '', img: 'https://via.placeholder.com/48?text=VS' },
    { name: 'Marcus Johnson', role: 'Exhibition Manager', email: '', phone: '', img: 'https://via.placeholder.com/48?text=MJ' }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>×</button>

        {/* Header with logo */}
        <div className="modal-header">
          <div className="header-main">
            <h2 className="modal-title">{society.name}</h2>
            <div className="modal-tag pill">{society.tag}</div>
          </div>
          <img src={logoUrl} alt="Society Logo" className="modal-logo" />
        </div>

        {/* Description */}
        <div className="modal-section">
          <h3 className="section-title">Description</h3>
          <p className="modal-description">{society.desc}</p>
        </div>

        {/* Info Grid */}
        <div className="modal-section info-grid">
          <div className="info-col">
            <div className="info-bullet"><span className="icon">�</span> <b>{society.members}</b> active members</div>
            <div className="info-bullet"><span className="icon">📅</span> Established in <b>{society.year}</b></div>
            <div className="info-bullet"><span className="icon">📍</span> {society.location || 'Location not set'}</div>
          </div>
          <div className="info-col">
            <div className="info-bullet"><span className="icon">✉️</span> {society.email || 'Email not set'}</div>
            <div className="info-bullet"><span className="icon">📞</span> {society.phone || 'Phone not set'}</div>
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
                  <div className="exec-role">{exec.role}</div>
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
            <a href="#" className="footer-btn instagram"><span role="img" aria-label="Instagram">📷</span> Instagram</a>
            <a href="#" className="footer-btn twitter"><span role="img" aria-label="Twitter">🐦</span> Twitter</a>
          </div>
          <button className="join-button">Join Society</button>
        </div>
      </div>
    </div>
  );
};

export default SocietyModal;