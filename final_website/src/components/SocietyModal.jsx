import React from 'react';
import './SocietyModal.css';


const SocietyModal = ({ society, onClose }) => {
  if (!society) return null;

  // Map the incoming society object to known fields in static/societies.js
  const logoUrl = society.logo || 'https://via.placeholder.com/64x64?text=Logo';
  const categories = Array.isArray(society.categoryNames) ? society.categoryNames : (society.categories || []);
  const tag = (categories && categories.length > 0) ? categories[0] : (society.tag || 'Society');
  const desc = society.about || society.desc || '';
  const members = society.stats?.activeMembers ?? society.members ?? 'N/A';
  const year = society.stats?.establishedYear ?? society.year ?? '—';
  const location = society.stats?.location || society.location || 'Location not set';
  const email = society.contact?.email || society.email || '';
  const phone = society.contact?.phone || society.phone || '';
  const socials = society.socials || {};
  const website = society.contact?.website || society.website || '';
  const activities = Array.isArray(society.ourActivities) ? society.ourActivities : (Array.isArray(society.activities) ? society.activities : []);
  const achievements = Array.isArray(society.recentAchievements) ? society.recentAchievements : (Array.isArray(society.achievements) ? society.achievements : []);
  const lastUpdated = society.lastUpdated || society.updatedAt || '';

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
            <div className="modal-tags">
              {(categories && categories.length > 0)
                ? categories.map((c, i) => (
                    <span key={i} className="modal-tag pill">{c}</span>
                  ))
                : <div className="modal-tag pill">{tag}</div>
              }
            </div>
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
            {phone && phone !== '' && (<div className="info-bullet"><span className="icon">📞</span> {phone || 'Phone not set'}</div>)}
            {website && website !== '' && (
              <div className="info-bullet">🔗 <a href={website} target="_blank" rel="noreferrer">Visit Website</a></div>
            )}
          </div>
        </div>

        {/* Executive Team */}
        <div className="modal-section">
          <h3 className="section-title">Executive Team</h3>
          <div className="exec-team-grid">
            {execs.length > 0 ? (
              execs.map((exec, index) => {
                // Logic to create initials for the fallback
                const initials = exec.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2) // Max 2 initials
                  .join("")
                  .toUpperCase();

                return (
                  <div key={index} className="exec-member-card">
                    {/* Avatar structure */}
                    <div className="exec-avatar">
                      <img
                        src={exec.img || "/place.svg"} // Use exec.img, fallback to a placeholder
                        alt={exec.name}
                        className="exec-avatar-image"
                        // This hides the image tag if it breaks, showing the fallback
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                      {/* Fallback with initials */}
                      <div className="exec-avatar-fallback">
                        {initials || '?'}
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="exec-member-info">
                      <p className="exec-member-name">{exec.name}</p>
                      <p className="exec-member-position">{exec.role}</p>
                      {exec.email && (
                        <p className="exec-member-email">{exec.email}</p>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              // Displayed if execs array is empty
              <div className="no-execs">
                <p>Executive committee information is not available yet.</p>
              </div>
            )}
          </div>
        </div>
          
        {/* Activities & Achievements */}
        <div className="modal-section activities-achievements">
          <div className="activities">
            <h3 className="section-title">Our Activities</h3>
            {activities.length > 0 ? (
              <ul className="activity-list">
                {activities.map((a, i) => (
                  <li key={i} className="activity-item"><span className="bullet activity-bullet" /> {a}</li>
                ))}
              </ul>
            ) : (
              <div className="no-activities">No activities listed.</div>
            )}
          </div>

          <div className="achievements">
            <h3 className="section-title">Recent Achievements</h3>
            {achievements.length > 0 ? (
              <ul className="achievement-list">
                {achievements.map((ach, i) => (
                  <li key={i} className="achievement-item"><span className="bullet achievement-bullet" /> {ach}</li>
                ))}
              </ul>
            ) : (
              <div className="no-achievements">No recent achievements listed.</div>
            )}
          </div>
        </div>

        {/* Upcoming events */}
        <div className="modal-section">
          <h3 className="section-title">Upcoming Events</h3>
          {(Array.isArray(society.upcomingEvents) && society.upcomingEvents.length > 0) ? (
            <div className="events-list">
              {society.upcomingEvents.map((ev, i) => (
                <div key={ev._id || i} className="event-card">
                  <div className="event-title">{ev.title || 'Untitled event'}</div>
                  <div className="event-meta">{ev.date || ''} {ev.location ? ` • ${ev.location}` : ''}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-events">No upcoming events for now.</div>
          )}
        </div>
        
        

        {/* Last updated */}
        {lastUpdated && (
          <div className="modal-section last-updated">
            <small className="text-muted">Last updated: {new Date(lastUpdated).toLocaleString()}</small>
          </div>
        )}

        {/* Footer */}
        <div className="modal-footer">
          <div className="footer-left">
            {website && (
              <a href={website} target="_blank" rel="noreferrer" className="footer-btn website"><span role="img" aria-label="Website">🔗</span> Website</a>
            )}
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