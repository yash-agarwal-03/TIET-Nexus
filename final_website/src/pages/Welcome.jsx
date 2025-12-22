import React from 'react';
import { Link } from 'react-router-dom'; // Added Link for client-side routing
import { ArrowRight, Map, Rss, Users, Bot } from "lucide-react";
import './Welcome.css';

export default function Welcome() {
  
  // Feature data with correct internal paths and external URL flag
  const features = [
    { icon: Map, title: 'Campus Map', text: 'Navigate the campus with our interactive map', path: '/map' },
    { icon: Rss, title: 'Campus Feeds', text: 'Stay updated with the latest campus news', path: '/feeds' },
    { icon: Users, title: 'Explore Societies', text: 'Discover clubs and societies that match your interests', path: '/explore' },
    { 
      icon: Bot, 
      title: 'Thapar AI', 
      text: 'Get instant answers to your campus questions', 
      path: 'https://tiet-nexus-rag-chatbot.streamlit.app/', 
      isExternal: true 
    },
  ];

  return (
    <div className="welcome-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-logo-wrapper">
              <div className="hero-logo-circle">
                <img
                  src="/tiet.png"
                  alt="Thapar Institute Logo"
                  className="hero-logo-img"
                />
              </div>
            </div>

            <h1 className="hero-title">
              Welcome to <span className="highlight-text">TIET Nexus</span>
            </h1>

            <p className="hero-subtitle">
              Your comprehensive portal to Thapar Institute of Engineering & Technology. Connect, explore, and engage
              with our vibrant campus community.
            </p>

            <div className="hero-buttons">
              {/* Internal route links updated to Link component */}
              <Link to="/explore" className="btn btn-primary">
                Explore Societies <ArrowRight className="btn-icon" size={20} />
              </Link>
              <Link to="/lost-found" className="btn btn-outline">
                Lost & Found
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Discover TIET Nexus</h1>
            <p className="section-subtitle">Everything you need to stay connected with campus life</p>
          </div>

          <div className="nexus-grid">
            {features.map((f) => {
              const Icon = f.icon;
              
              // Conditional rendering: Link for internal, <a> for external
              return f.isExternal ? (
                <a 
                  key={f.title} 
                  href={f.path} 
                  className="feature-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="feature-content">
                    <Icon className="feature-icon" size={40} aria-hidden="true" />
                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-text">{f.text}</p>
                  </div>
                </a>
              ) : (
                <Link key={f.title} to={f.path} className="feature-card">
                  <div className="feature-content">
                    <Icon className="feature-icon" size={40} aria-hidden="true" />
                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-text">{f.text}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-column">
              <h2 className="section-title align-left">About Thapar Institute</h2>
              <p className="about-text">
                Thapar Institute of Engineering & Technology (TIET) is a premier engineering institution established in
                1956. Located in Patiala, Punjab, TIET has been at the forefront of technical education and research in
                India.
              </p>
              <p className="about-text">
                With a rich legacy of academic excellence, innovative research, and industry partnerships, TIET
                continues to shape the future of engineering and technology education.
              </p>
              <div className="about-cta">
                <Link to="/contact" className="btn btn-outline">Contact Us</Link>
              </div>
            </div>

            <div className="about-image-column">
              <div className="image-wrapper">
                <img
                  src="/tiet-base.jpg"
                  alt="Thapar Institute Campus"
                  className="base-image"
                />
                <div className="glass-overlay">
                  <div className="glass-logo-wrapper">
                    <img
                      src="/tiet_transparent.png"
                      alt="TIET Logo"
                      className="glass-logo-img"
                    />
                  </div>
                  <h3 className="glass-title">Est. 1956</h3>
                  <p className="glass-subtitle">67+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}