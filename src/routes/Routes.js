import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import AboutHemophilia from '../pages/AboutHemophilia';
import AboutAssociation from '../pages/AboutAssociation';
import ServicesSupport from '../pages/ServicesSupport';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/sobre-hemofilia" element={<AboutHemophilia />} />
      <Route path="/sobre-associacao" element={<AboutAssociation />} />
      <Route path="/servicos" element={<ServicesSupport />} />
    </Routes>
  );
}

export default AppRoutes;
