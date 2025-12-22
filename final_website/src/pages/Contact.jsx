import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Globe, Printer } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        <header className="contact-hero">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have questions about Thapar University? We're here to help.
          </p>
        </header>

        <div className="contact-grid">
          {/* Contact Information Side */}
          <div className="contact-info-section">
            <h2 className="section-heading">Contact Information</h2>

            <div className="info-group-container">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Thapar+Institute+of+Engineering+and+Technology+Patiala"
                target="_blank"
                rel="noopener noreferrer"
                className="info-map-link"
              >
                <MapPin size={18} />
                <span>View on Google Maps</span>
              </a>

              <h3 className="sub-section-title">Admission Queries</h3>
              <div className="info-card">
                <Phone size={20} className="icon-white" />
                <div className="info-text">
                  <p>+91-18002024100</p>
                </div>
              </div>
              <div className="info-card">
                <Mail size={20} className="icon-white" />
                <div className="info-text">
                  <p>admissions@thapar.edu</p>
                </div>
              </div>

              <h3 className="sub-section-title">Applications Queries</h3>
              <div className="info-card">
                <Phone size={20} className="icon-white" />
                <div className="info-text">
                  <p>1800 202 4100</p>
                </div>
              </div>
              <div className="info-card">
                <Mail size={20} className="icon-white" />
                <div className="info-text">
                  <p>application.support@thapar.edu</p>
                </div>
              </div>

              <h3 className="sub-section-title">Registrar Office</h3>
              <div className="info-card">
                <MapPin size={20} className="icon-white" />
                <div className="info-text">
                  <p>P.O. Box 32, Patiala, Pin -147004</p>
                </div>
              </div>
              <div className="info-card">
                <Printer size={20} className="icon-white" />
                <div className="info-text">
                  <p>+91-175-2364498</p>
                </div>
              </div>

              <div className="info-card">
                <Mail size={20} className="icon-white" />
                <div className="info-text">
                  <p>registrar@thapar.edu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Side */}
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="nexus-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is this regarding?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
