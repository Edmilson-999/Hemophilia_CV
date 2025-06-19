import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import AboutHemophilia from '../pages/AboutHemophilia'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/sobre-hemofilia" element={<AboutHemophilia />} />
    </Routes>
  );
}

export default AppRoutes;
