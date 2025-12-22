import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import teamData from "../static/teamData";
import "./Team.css";

const AvatarWithFallback = ({ src, initials, alt }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="team-avatar-circle">
      {!imgError && src ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className="team-avatar-img"
        />
      ) : (
        <span className="team-avatar-initials">{initials}</span>
      )}
    </div>
  );
};

export default function Team() {
  return (
    <div className="team-container-fluid">
      <header className="team-header-compact">
        <h1>Meet Our Team</h1>
        <p>The individuals behind TIET Nexus</p>
      </header>

      {/* Supervisors - SMALLER HORIZONTAL CARDS */}
      <section className="team-section-compact">
        <h2 className="team-section-title">Project Supervisors</h2>
        <div className="supervisor-grid">
          {teamData.supervisors.map((member) => (
            <div key={member.id} className="supervisor-card-horizontal">
              <AvatarWithFallback
                src={member.image}
                initials={member.initials}
                alt={member.name}
              />
              <div className="member-details">
                <h3 className="member-name-compact">{member.name}</h3>
                <p className="member-role-compact">{member.role}</p>
                <div className="member-contact-actions">
                  {/* LinkedIn Action Button */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="member-action-pill linkedin"
                  >
                    <Linkedin size={16} strokeWidth={2.5} />
                    <span>LinkedIn</span>
                  </a>

                  {/* Email Action Box */}
                  <div className="member-action-pill email">
                    <Mail size={16} strokeWidth={2.5} />
                    <span className="email-text">{member.email}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Team - LARGER VERTICAL CARDS */}
      {/* Development Team Section */}
<section className="team-section-compact">
  <h2 className="team-section-title">Development Team</h2>
  <div className="student-grid">
    {teamData.students.map((member) => (
      <div key={member.id} className="developer-card-vertical">
        <AvatarWithFallback
          src={member.image}
          initials={member.initials}
          alt={member.name}
        />
        <h3 className="member-name-compact">{member.name}</h3>
        <p className="member-role-compact">{member.role}</p>
        
        {/* Responsive row */}
        <div className="member-socials-row">
          <a href={member.linkedin} target="_blank" className="social-pill">
            <Linkedin size={16} strokeWidth={2.5} /> <span>LinkedIn</span>
          </a>
          <a href={member.github} target="_blank" className="social-pill">
            <Github size={16} strokeWidth={2.5} /> <span>GitHub</span>
          </a>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Footer */}
      <footer className="team-footer-simple">
        <div className="footer-circle-logo">
          <img src="/tiet.png" alt="TIET Logo" />
        </div>
        <div className="footer-about-text">
          <h3>About TIET Nexus</h3>
          <p>
            TIET Nexus is a comprehensive campus platform developed as a final
            year project by Computer Science students at Thapar Institute of
            Engineering & Technology.
          </p>
        </div>
      </footer>
    </div>
  );
}
