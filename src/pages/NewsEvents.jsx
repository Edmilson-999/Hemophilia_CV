import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import EventCard from '../components/EventCard';
import CampaignCard from '../components/CampaignCard';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/NewsEvents.css';

const NewsEvents = () => {
  const [date, setDate] = useState(new Date());
  
  // Dados de notícias (pode vir de API)
  const news = [
    {
      id: 1,
      title: "Novo tratamento para hemofilia A é aprovado",
      excerpt: "A agência reguladora de Cabo Verde aprovou novo medicamento...",
      date: "2023-11-15",
      category: "Tratamento"
    },
    {
      id: 2,
      title: "Associação promove workshop para famílias",
      excerpt: "Evento gratuito acontecerá no próximo sábado com especialistas...",
      date: "2023-11-20",
      category: "Evento"
    }
  ];

  // Eventos (pode vir de API)
  const events = [
    {
      id: 1,
      title: "Dia Mundial da Hemofilia",
      date: "2024-04-17",
      location: "Online",
      description: "Palestras e atividades para toda comunidade"
    },
    {
      id: 2,
      title: "Campanha de Doação de Sangue",
      date: "2023-12-05",
      location: "Hospital Central, Praia",
      description: "Doe sangue e ajude pacientes com hemofilia"
    }
  ];

  // Campanhas atuais
  const campaigns = [
    {
      id: 1,
      title: "Adote um Paciente",
      description: "Ajude com custos de tratamento para quem não pode pagar",
      progress: 65,
      goal: "100.000 CVE"
    },
    {
      id: 2,
      title: "Conscientização nas Escolas",
      description: "Leve informação sobre hemofilia para instituições de ensino",
      progress: 30,
      goal: "50 escolas"
    }
  ];

  return (
    <div className="news-events-page">
      <section className="hero-section">
        <div className="container">
          <h1>Notícias e Eventos</h1>
          <p>Fique por dentro das últimas novidades e participe das nossas atividades</p>
        </div>
      </section>

      <div className="main-content container">
        <div className="news-section">
          <h2>Últimas Notícias</h2>
          <div className="news-grid">
            {news.map(item => (
              <NewsCard
                key={item.id}
                title={item.title}
                excerpt={item.excerpt}
                date={item.date}
                link={`/noticias/${item.id}`}
                category={item.category}
              />
            ))}
          </div>
          <Link to="/noticias" className="see-all">
            Ver todas notícias →
          </Link>
        </div>

        <div className="sidebar">
          <div className="calendar-section">
            <h2>Calendário</h2>
            <Calendar
              onChange={setDate}
              value={date}
              locale="pt"
              className="custom-calendar"
            />
          </div>

          <div className="events-section">
            <h2>Próximos Eventos</h2>
            <div className="events-list">
              {events.map(event => (
                <EventCard
                  key={event.id}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                />
              ))}
            </div>
            <Link to="/eventos" className="see-all">
              Ver todos eventos →
            </Link>
          </div>
        </div>
      </div>

      <section className="campaigns-section">
        <div className="container">
          <h2>Campanhas Atuais</h2>
          <div className="campaigns-grid">
            {campaigns.map(campaign => (
              <CampaignCard
                key={campaign.id}
                title={campaign.title}
                description={campaign.description}
                progress={campaign.progress}
                goal={campaign.goal}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;