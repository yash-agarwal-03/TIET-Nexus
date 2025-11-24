import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SocietyModal from '../components/SocietyModal';
import societies from '../static/societies';
import './Explore.css';

export default function Explore() {
  const [selectedSociety, setSelectedSociety] = useState(null);
  // societies.sort((a, b) => {});
  societies.sort((a, b) => { 
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  return (
    <div>
      <PageHeader
        title="Explore TIET Societies & Clubs"
        subtitle="Discover amazing communities, develop new skills, and make lifelong connections. Join a society that matches your interests and passions."
      />

      <div className="grid-3">
        {societies.map((s) => {
          // safe mappings from the real data shape in static/societies.js
          const key = s._id || s.name;
          const logo = s.logo || 'https://via.placeholder.com/56';
          const name = s.name || 'Society';
          const about = s.about || s.desc || '';
          const members = s.stats?.activeMembers ?? 'N/A';
          const year = s.stats?.establishedYear ?? '—';
          const execList = (s.executiveTeam || []).slice(0, 5).map((m) => m.name ? m.name.split(' ')[0] : (m.role || 'Member'));
          const tag = s.categoryNames?.[0] || 'Society';

          return (
            <div
              key={key}
              className="card society-card"
              onClick={() => setSelectedSociety(s)}
            >
              <img src={logo} alt={`${name} logo`} className="society-logo" />
              <h3>{name}</h3>
              <p>{about?.slice(0, 150)}{about && about.length > 150 ? '...' : ''}</p>

              <div className="meta-row">
                <span>👥 {members} members</span>
                <span>📅 Est. {year}</span>
              </div>

              {/* category chips (may be multiple) */}
              
                <div className="tag-container">
                    <div className="category-tag">{s.categoryNames[0]}</div>
                </div>
            </div>
          );
        })}
      </div>

      {selectedSociety && (
        <SocietyModal society={selectedSociety} onClose={() => setSelectedSociety(null)} />
      )}
    </div>
  );
}