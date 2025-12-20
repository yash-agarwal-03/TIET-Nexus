import React from 'react';
import PageHeader from '../components/PageHeader';

const devs = [
  { name: 'Yash Agarwal', role: 'Team Lead, Full Stack Developer & Map Designer', skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Backend Architecture'], initials: 'YA' },
  { name: 'Geetansh Mohindru', role: 'Frontend Developer & UI/UX Designer', skills: ['React', 'Next.js', 'Tailwind CSS', 'Figma', 'Adobe XD'], initials: 'GM' },
  { name: 'Jyotansh Mohindru', role: 'Backend Developer & Map Designer', skills: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'], initials: 'JM' },
  { name: 'Arnav Sen', role: 'Chatbot designer', skills: ['React Native', 'Flutter', 'Jest', 'Cypress', 'Firebase'], initials: 'AS' }
];

function MiniActions() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {['Email', 'LinkedIn', 'GitHub', 'Portfolio'].map((b) => (
        <button key={b} className="button ghost" style={{ padding: '8px 10px' }}>{b}</button>
      ))}
    </div>
  );
}

export default function Team() {
  return (
    <div>
      <PageHeader title="Meet Our Team" subtitle="The dedicated individuals behind TIET Nexus" />

      <div className="page-header"><h3 style={{ margin: 0, textAlign: 'center' }}>Project Supervisors</h3></div>
      <div className="grid-2">
        {[{ n:'Dr. Ashima Singh', i:'AS', r:'Project Mentor' }, { n:'Dr. Jaskeerat Singh', i:'JS', r:'Project Co-Mentor' }].map(p => (
          <div key={p.n} className="card" style={{ textAlign: 'center' }}>
            <div className="avatar-lg avatar-red" style={{ margin: '0 auto' }}>{p.i}</div>
            <h3>{p.n}</h3>
            <div style={{ color: 'var(--primary)', fontWeight: 700 }}>{p.r}</div>
            <p style={{ color: 'var(--muted)' }}>Guiding and mentoring the development process.</p>
            <MiniActions />
          </div>
        ))}
      </div>
      <div style={{ height: 16 }} />
      <div className="page-header"><h3 style={{ margin: 0 }}>Development Team</h3></div>
      <div className="grid-2" style={{ gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 16 }}>
        {devs.map((d) => (
          <div key={d.name} className="card">
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div className="avatar-lg avatar-red">{d.initials}</div>
              <div>
                <div style={{ fontWeight: 800 }}>{d.name}</div>
                <div style={{ color: 'var(--muted)' }}>{d.role}</div>
                <div className="skills" style={{ marginTop: 6 }}>
                  {d.skills.map(s => <span key={s} className="skill">{s}</span>)}
                </div>
              </div>
            </div>
            <div style={{ height: 10 }} />
            <MiniActions />
          </div>
        ))}
      </div>

      <div style={{ height: 16 }} />

      <div className="card" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 16, alignItems: 'center' }}>
        <div className="avatar-lg avatar-red" style={{ borderRadius: 16 }}>ti</div>
        <div>
          <h3 style={{ margin: 0 }}>About TIET Nexus</h3>
          <p style={{ color: 'var(--muted)', marginTop: 6 }}>
            TIET Nexus is a comprehensive campus platform connecting students, faculty, and staff while providing essential campus services and information.
          </p>
          <div className="skills">
            {['React.js', 'Vite', 'Node.js', 'MongoDB'].map(s => <span key={s} className="skill">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}


