import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import SocietyModal from '../components/SocietyModal';
import './Explore.css';

const societies = [
  { name: 'Creative Computing Society (CCS)', tag: 'Technical', year: 2004, members: 245, desc: 'An elite technical society helping students achieve hands-on experience in technical domains.', exec: ['DA', 'DG', 'ST', 'KD', '+1'] },
  { name: 'Microsoft Student Chapter (MLSC)', tag: 'Technical', year: 2010, members: 89, desc: 'Guidance, trainings, and project mentorship to improve knowledge and learning skills.', exec: ['DP', 'PK', 'MS', 'KA'] },
  { name: 'Thapar Venture Club (EDC)', tag: 'Entrepreneurship', year: 2014, members: 209, desc: 'Promotes and incubates innovative ideas to create entrepreneurs of tomorrow.', exec: ['DM', 'DVS', 'ZA', 'CM'] },
  { name: 'Fine Arts & Photography Society (FAPS)', tag: 'Arts', year: 2018, members: 78, desc: 'Developing artistic vision through workshops, exhibitions, and photo walks.', exec: ['DA', 'DVE', 'MJ'] },
  { name: 'Thapar Amateur Astronomers Society (TAAS)', tag: 'Astronomy', year: 2008, members: 67, desc: 'Explore the cosmos with science and engineering. Dedicated to space and astronomy.', exec: ['DD', 'DM', 'S', 'AK'] },
  { name: 'Music and Dramatic Society (MUDRA)', tag: 'Arts', year: 2005, members: 134, desc: 'Performances, jams, and collaborative compositions across music and drama.', exec: ['ER', 'JM', 'AK', 'TB'] }
];

export default function Explore() {
  const [selectedSociety, setSelectedSociety] = useState(null);

  return (
    <div>
      <PageHeader
        title="Explore TIET Societies & Clubs"
        subtitle="Discover amazing communities, develop new skills, and make lifelong connections. Join a society that matches your interests and passions."
      />

      <div className="grid-3">
        {societies.map((s) => (
          <div 
            key={s.name} 
            className="card society-card" 
            onClick={() => setSelectedSociety(s)}
          >
            {/* logo top-right */}
            <img
              src={s.logo || 'https://via.placeholder.com/56'}
              alt={`${s.name} logo`}
              className="society-logo"
            />
            <h3>{s.name}</h3>
            <p>{s.desc}</p>
            <div className="meta-row">
              <span>👥 {s.members} members</span>
              <span>📅 Est. {s.year}</span>
            </div>
            <div>
              <div className="exec-title">Executive Team:</div>
              <div className="chips">
                {s.exec.map((e, i) => (
                  <span key={i} className="chip">{e}</span>
                ))}
              </div>
            </div>
            <div className="pill">{s.tag}</div>
          </div>
        ))}
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


