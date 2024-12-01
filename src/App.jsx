import LandingPage from "./pages/LandingPage";
import "./App.css";
import TheTeam from "./pages/TheTeam";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/the_team" element={<TheTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
