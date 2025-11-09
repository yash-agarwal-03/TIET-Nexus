import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Welcome from './pages/Welcome.jsx';
import Explore from './pages/Explore.jsx';
import CampusMap from './pages/CampusMap.jsx';
import ThaparAI from './pages/ThaparAI.jsx';
import Feeds from './pages/Feeds.jsx';
import LostAndFound from './pages/LostAndFound.jsx';
import Contact from './pages/Contact.jsx';
import Team from './pages/Team.jsx';
import AdminProfile from './pages/AdminProfile.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/campus-map" element={<CampusMap />} />
        <Route path="/thapar-ai" element={<ThaparAI />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/lost-and-found" element={<LostAndFound />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}


