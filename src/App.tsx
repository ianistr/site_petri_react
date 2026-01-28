import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cybersecurity from './pages/Cybersecurity';
import M365 from './pages/M365';
import NIS2 from './pages/NIS2';
import Software from './pages/Software';

import ContactPage from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/m365" element={<M365 />} />
        <Route path="/nis2" element={<NIS2 />} />
        <Route path="/software" element={<Software />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
