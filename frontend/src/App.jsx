import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import FeedsPage from "./pages/FeedsPage";
import MapPage from "./pages/MapPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import AIPage from "./pages/AIPage";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/feeds" element={<FeedsPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ai" element={<AIPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;