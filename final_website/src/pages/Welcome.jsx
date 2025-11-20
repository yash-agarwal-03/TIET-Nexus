import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Search, Map, Cpu, Rss } from 'lucide-react';

export default function Welcome() {
  return (
    <div>
      <PageHeader
        title="Welcome to TIET Nexus"
        subtitle="Your comprehensive portal to Thapar Institute of Engineering & Technology. Connect, explore, and engage with our vibrant campus community."
      />

      <div className="card hero">
        <h2 style={{ margin: 0 }}>Welcome to TIET Nexus</h2>
        <p style={{ color: 'var(--muted)' }}>Everything you need to stay connected with campus life.</p>
        <div className="actions">
          <Link to="/explore" className="button primary">Explore Societies</Link>
          <Link to="/campus-map" className="button ghost">Campus Map</Link>
        </div>
      </div>

      <div style={{ height: 16 }} />

      <div className="page-header">
        <h2 style={{ margin: 0 }}>Discover TIET Nexus</h2>
        <p className="subtitle">Everything you need to stay connected with campus life</p>
      </div>

      <div className="grid-4">
        {
          [
            { icon: Search, title: 'Explore Societies', text: 'Discover clubs and societies that match your interests', path: '/explore' },
            { icon: Map, title: 'Campus Map', text: 'Navigate the campus with our interactive map', path: '/campus-map' },
            { icon: Cpu, title: 'Thapar AI', text: 'Get instant answers to your campus questions', path: '/thapar-ai' },
            { icon: Rss, title: 'Campus Feeds', text: 'Stay updated with the latest campus news', path: '/feeds' }
          ].map((f) => {
            const Icon = f.icon;
            return (
              <Link key={f.title} to={f.path} className="card feature-card">
                <Icon className="feature-icon" aria-hidden="true" />
                <div style={{ fontWeight: 700 }}>{f.title}</div>
                <div style={{ color: 'var(--muted)' }}>{f.text}</div>
              </Link>
            );
          })
        }
      </div>

      <div style={{ height: 32 }} />

      <div className="card split">
        <div>
          <h3 style={{ marginTop: 0 }}>About Thapar Institute</h3>
          <p style={{ color: 'var(--muted)' }}>
            Thapar Institute of Engineering & Technology (TIET) is a premier engineering institution established in 1956.
            Located in Patiala, Punjab, TIET has been at the forefront of technical education and research in India.
          </p>
          <button className="button ghost">Learn More</button>
        </div>
        <div className="placeholder-img">About Image (placeholder)</div>
      </div>
    </div>
  );
}


