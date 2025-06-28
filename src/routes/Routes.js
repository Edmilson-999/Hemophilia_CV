import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import AboutHemophilia from '../pages/AboutHemophilia';
import AboutAssociation from '../pages/AboutAssociation';
import ServicesSupport from '../pages/ServicesSupport';
import NewsEvents from '../pages/NewsEvents';
import HowToHelp from '../pages/HowToHelp';
import ContactPage from '../pages/ContactPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/sobre-hemofilia" element={<AboutHemophilia />} />
      <Route path="/sobre-associacao" element={<AboutAssociation />} />
      <Route path="/servicos" element={<ServicesSupport />} />
      <Route path="/noticias-eventos" element={<NewsEvents />} />
      <Route path="/como-ajudar" element={<HowToHelp />} />
      <Route path="/contato" element={<ContactPage />} />
    </Routes>
  );
}

export default AppRoutes;
