import React, { useState } from 'react';
import './AdminProfile.css';

export default function AdminProfile() {
  const [formData, setFormData] = useState({
    societyName: 'Creative Computing Society',
    category: 'Technical',
    description: '',
    membersCount: '',
    estdYear: '',
    email: '',
    phone: '',
    location: '',
    executiveTeam: [
      { id: 1, email: '', phone: '', location: '' },
      { id: 2, email: '', phone: '', location: '' },
      { id: 3, email: '', phone: '', location: '' }
    ],
    instagramURL: '',
    xURL: '',
    linkedinURL: '',
    websiteURL: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTeamMemberChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      executiveTeam: prev.executiveTeam.map((member, i) => 
        i === index ? { ...member, [field]: value } : member
      )
    }));
  };

  const handleAddTeamMember = () => {
    setFormData(prev => ({
      ...prev,
      executiveTeam: [
        ...prev.executiveTeam,
        { id: Date.now(), email: '', phone: '', location: '' }
      ]
    }));
  };

  const handleRemoveTeamMember = (index) => {
    setFormData(prev => ({
      ...prev,
      executiveTeam: prev.executiveTeam.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="admin-profile">
      <div className="admin-header">
        <h1>SOCIETY ADMIN PANEL</h1>
        <div className="logo-upload">
          <div className="logo-placeholder" />
        </div>
      </div>

      <div className="admin-content">
        <section className="form-section">
          <h2>BASIC INFORMATION</h2>
          <div className="form-group">
            <label>Society Name:</label>
            <input
              type="text"
              name="societyName"
              value={formData.societyName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Members Count:</label>
            <input
              type="text"
              name="membersCount"
              value={formData.membersCount}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Estd. Year:</label>
            <input
              type="text"
              name="estdYear"
              value={formData.estdYear}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <section className="form-section">
          <h2>CONTACT INFORMATION</h2>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <section className="form-section">
          <h2>EXECUTIVE TEAM</h2>
          {formData.executiveTeam.map((member, index) => (
            <div key={member.id} className="exec-member">
              <div className="member-photo-upload">
                <div className="photo-placeholder" />
              </div>
              <div className="member-details">
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={member.email}
                    onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input
                    type="tel"
                    value={member.phone}
                    onChange={(e) => handleTeamMemberChange(index, 'phone', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Location:</label>
                  <input
                    type="text"
                    value={member.location}
                    onChange={(e) => handleTeamMemberChange(index, 'location', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
          <button className="add-member">+ Add More</button>
        </section>

        <section className="form-section">
          <h2>SOCIAL MEDIA</h2>
          <div className="form-group">
            <label>Instagram URL:</label>
            <input
              type="url"
              name="instagramURL"
              value={formData.instagramURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>X.com URL:</label>
            <input
              type="url"
              name="xURL"
              value={formData.xURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>LinkedIn URL:</label>
            <input
              type="url"
              name="linkedinURL"
              value={formData.linkedinURL}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Website URL:</label>
            <input
              type="url"
              name="websiteURL"
              value={formData.websiteURL}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <div className="form-actions">
          <button className="btn btn-discard">Discard Changes</button>
          <button className="btn btn-save">Save Changes</button>
        </div>
      </div>
    </div>
  );
}