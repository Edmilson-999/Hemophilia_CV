import { Link } from 'react-router-dom';
import '../styles/NewsCard.css';

export default function NewsCard({ title, excerpt, date, link }) {
  return (
    <article className="news-card">
      <div className="news-card-content">
        <h3>{title}</h3>
        <p className="news-date">{new Date(date).toLocaleDateString('pt-CV')}</p>
        <p className="news-excerpt">{excerpt}</p>
        <Link to={link} className="read-more">Ler mais</Link>
      </div>
    </article>
  );
}