import React from 'react';
import { Link } from 'react-router-dom';
import HelpOptionCard from '../components/HelpOptionCard';
import '../styles/HowToHelp.css';

const HowToHelp = () => {
  // Dados das opções de ajuda
  const helpOptions = [
    {
      id: 1,
      title: "Doações Financeiras",
      icon: "💰",
      description: "Sua contribuição ajuda a manter nossos programas e serviços para a comunidade.",
      items: [
        "Transferência bancária",
        "Doação online via cartão",
        "Depósito em conta"
      ],
      ctaText: "Doar Agora",
      ctaLink: "/doar"
    },
    {
      id: 2,
      title: "Voluntariado",
      icon: "👐",
      description: "Doe seu tempo e habilidades para fazer a diferença na vida de pessoas com hemofilia.",
      items: [
        "Apoio em eventos",
        "Atendimento a famílias",
        "Habilidades específicas"
      ],
      ctaText: "Quero ser Voluntário",
      ctaLink: "/voluntariado"
    },
    {
      id: 3,
      title: "Parcerias Institucionais",
      icon: "🤝",
      description: "Sua empresa ou organização pode apoiar nossa causa de diversas formas.",
      items: [
        "Patrocínio de programas",
        "Doação de produtos/serviços",
        "Campanhas corporativas"
      ],
      ctaText: "Seja nosso Parceiro",
      ctaLink: "/parcerias"
    }
  ];

  // Histórias de impacto
  const impactStories = [
    {
      id: 1,
      quote: "Como voluntário, pude ver de perto a diferença que fazemos na vida dessas famílias.",
      author: "Carlos Lopes, Voluntário há 3 anos"
    },
    {
      id: 2,
      quote: "Nossa empresa se orgulha de apoiar essa causa tão importante para a saúde pública.",
      author: "Ana Silva, Diretora da Empresa X"
    }
  ];

  return (
    <div className="how-to-help-page">
      <section className="hero-section">
        <div className="container">
          <h1>Como Ajudar</h1>
          <p>Existem várias formas de apoiar nossa causa e fazer a diferença na vida de pessoas com hemofilia</p>
        </div>
      </section>

      <section className="options-section">
        <div className="container">
          <div className="options-grid">
            {helpOptions.map(option => (
              <HelpOptionCard
                key={option.id}
                title={option.title}
                icon={option.icon}
                description={option.description}
                items={option.items}
                ctaText={option.ctaText}
                ctaLink={option.ctaLink}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <h2>Nosso Impacto</h2>
          <div className="impact-stories">
            {impactStories.map(story => (
              <div key={story.id} className="impact-card">
                <blockquote>
                  "{story.quote}"
                </blockquote>
                <p className="author">— {story.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Perguntas Frequentes</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Como posso ter certeza que minha doação será bem utilizada?</h3>
              <p>Publicamos relatórios anuais detalhando todos os recursos recebidos e como foram aplicados. Também estamos disponíveis para prestar quaisquer esclarecimentos adicionais.</p>
            </div>
            <div className="faq-item">
              <h3>Preciso ter experiência para ser voluntário?</h3>
              <p>Não necessariamente. Temos oportunidades para diversos perfis e oferecemos treinamento para todas as atividades.</p>
            </div>
            <Link to="/faq" className="see-more-faq">
              Ver todas perguntas frequentes →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToHelp;