import { Routes, Route, Navigate } from "react-router-dom";
import LostFoundPage from "./pages/LostFound.jsx";
import Map from "./pages/CampusMap.jsx";
import PublicLayout from "./layouts/PublicLayout.jsx";

// Pages
import Welcome from "./pages/Welcome.jsx";
import Explore from "./pages/Explore.jsx";
import Feeds from "./pages/Feeds.jsx";
import Contact from "./pages/Contact.jsx";
import Team from "./pages/Team.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Welcome />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/feeds" element={<Feeds />} />
        <Route path="/map" element={<Map />} />
        <Route path="/lost-found" element={<LostFoundPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
