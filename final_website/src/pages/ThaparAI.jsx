import React from 'react';
import PageHeader from '../components/PageHeader';

export default function ThaparAI() {
  return (
    <div>
      <PageHeader
        title="Thapar AI Assistant"
        subtitle="Get instant answers to your questions about TIET - admissions, courses, campus life, and more!"
      />

      <div className="card chat-card">
        <div className="chat-messages">
          <div className="chat-bubble">Hello! I'm Thapar AI, your virtual assistant for all things related to TIET. How can I help you today?</div>
        </div>
        <div className="chat-input">
          <input placeholder="Ask me anything about TIET..." />
          <button className="button" style={{ background: '#e2a3a3', color: '#fff' }}>➤</button>
        </div>
      </div>

      <div style={{ height: 16 }} />
      <div className="page-header"><h3 style={{ margin: 0 }}>Quick Questions</h3></div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {[
          'How to apply for admission?',
          'What are the hostel facilities?',
          'Tell me about placements',
          'What courses are available?',
          'Library timings and facilities',
          'Campus life at TIET'
        ].map((q) => (
          <button key={q} className="button ghost">{q}</button>
        ))}
      </div>
    </div>
  );
}


