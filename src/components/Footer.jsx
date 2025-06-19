import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Associação de Hemofilia de Cabo Verde</h3>
            <p>Promovendo qualidade de vida para pessoas com hemofilia</p>
            
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://wa.me/2381234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Contato</h3>
            <p><strong>Email:</strong> associacaohemofilia25@gmail.com</p>
            <p><strong>Telefone:</strong> +238 591 47 07</p>
            <p><strong>Endereço:</strong> Av. Amílcar Cabral, Praia, Cabo Verde</p>
          </div>
          
          <div className="footer-section">
            <h3>Links Rápidos</h3>
            <ul>
              <li><Link to="/sobre-hemofilia">Sobre a Hemofilia</Link></li>
              <li><Link to="/associacao">Sobre a Associação</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/noticias">Notícias</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Associação de Hemofilia de Cabo Verde. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}