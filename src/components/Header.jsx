import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="Hemo.jpg" alt="Logo Associação de Hemofilia de Cabo Verde" />
        </Link>
        
        <nav className="nav">
          <ul>
            <li><NavLink to="/" end>Início</NavLink></li>
            <li><NavLink to="/sobre-hemofilia">Sobre a Hemofilia</NavLink></li>
            <li><NavLink to="/sobre-associacao">Sobre a Associação</NavLink></li>
            <li><NavLink to="/servicos">Serviços</NavLink></li>
            <li><NavLink to="/noticias">Notícias</NavLink></li>
            <li><NavLink to="/contato">Contato</NavLink></li>
          </ul>
        </nav>  
        
        <div className="language-switcher">
          <button>PT</button>
          <button>CV</button>
        </div>
      </div>
    </header>
  );
} 