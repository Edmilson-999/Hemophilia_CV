import { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import NewsCard from '../components/NewsCard';
import '../styles/Home.css';

export default function Home() {
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // Simulação de chamada API
    const fetchNews = async () => {
      // Na implementação real, substituir por chamada axios
      const mockNews = [
        { id: 1, title: 'Campanha de Conscientização 2023', excerpt: 'Participe da nossa campanha anual...', date: '2023-10-15' },
        { id: 2, title: 'Novo Tratamento Disponível', excerpt: 'Ministério da Saúde anuncia novo medicamento...', date: '2023-09-28' }
      ];
      setLatestNews(mockNews);
    };

    fetchNews();
  }, []);

  return (
    <div className="home-page">
      <HeroBanner 
        title="Bem-vindo à Associação de Hemofilia de Cabo Verde"
        subtitle="Juntos por uma vida melhor para pessoas com hemofilia"
        ctaText="Saiba Mais"
        ctaLink="/sobre-hemofilia"
      />
      
      <section className="about-section">
        <div className="container">
          <h2>Sobre a Hemofilia</h2>
          <p>A hemofilia é um distúrbio genético que afeta a coagulação do sangue...</p>
          <button className="btn-primary">Leia Mais</button>
        </div>
      </section>
      
      <section className="news-section">
        <div className="container">
          <h2>Últimas Notícias</h2>
          <div className="news-grid">
            {latestNews.map(news => (
              <NewsCard 
                key={news.id}
                title={news.title}
                excerpt={news.excerpt}
                date={news.date}
                link={`/noticias/${news.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}