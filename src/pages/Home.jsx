import { useEffect, useState } from 'react';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner';
import NewsCard from '../components/NewsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import '../styles/Home.css';

// Crie uma instância do axios com configurações base
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, 
  timeout: 10000, // 10 segundos
  headers: {
    'Content-Type': 'application/json',
    // Adicione outros headers necessários como autorização
  }
});

export default function Home() {
  const [latestNews, setLatestNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar notícias
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Chamada API real com axios
        const response = await api.get('/news/latest', {
          params: {
            limit: 3, 
            lang: 'pt' 
          }
        });
        
        setLatestNews(response.data);
      } catch (err) {
        console.error('Erro ao buscar notícias:', err);
        setError('Não foi possível carregar as notícias. Tente novamente mais tarde.');
        
        // Dados mockados como fallback
        setLatestNews([
          { 
            id: 1, 
            title: 'Campanha de Conscientização 2023', 
            excerpt: 'Participe da nossa campanha anual...', 
            date: '2023-10-15' 
          },
          { 
            id: 2, 
            title: 'Novo Tratamento Disponível', 
            excerpt: 'Ministério da Saúde anuncia novo medicamento...', 
            date: '2023-09-28' 
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
    
    // Função de limpeza para cancelar requisições se o componente for desmontado
    return () => {
      // Cancelar requisições pendentes
      // axios.CancelToken.source().cancel('Componente desmontado');
    };
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
          
          {isLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : (
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
          )}
        </div>
      </section>
    </div>
  );
}
