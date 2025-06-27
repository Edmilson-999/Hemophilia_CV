import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import PartnerLogo from '../components/PartnerLogo';
import '../styles/ServicesSupport.css';

const ServicesSupport = () => {
  // Dados dos serviços (pode ser movido para um arquivo JSON)
  const services = [
    {
      id: 1,
      title: "Aconselhamento Médico",
      description: "Orientações com especialistas em hematologia sobre tratamentos e cuidados.",
      icon: "🩺"
    },
    {
      id: 2,
      title: "Apoio Psicológico",
      description: "Atendimento psicológico para pacientes e familiares.",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Distribuição de Medicamentos",
      description: "Acesso a fatores de coagulação e medicamentos essenciais.",
      icon: "💊"
    }
  ];

  // Dados dos programas
  const programs = [
    {
      id: 1,
      name: "Programa Criança Ativa",
      description: "Atividades físicas adaptadas para crianças com hemofilia."
    },
    {
      id: 2,
      name: "Capacitação Familiar",
      description: "Workshops para familiares sobre cuidados domiciliares."
    },
    {
      id: 3,
      name: "Jovens Líderes",
      description: "Formação de jovens pacientes para advocacy e liderança."
    }
  ];

  // Parceiros
  const partners = [
    { id: 1, name: "Hospital Agostinho Neto", logo: "anh.jpg" },
    { id: 2, name: "Hospital Dr. Baptista de Sousa", logo: "hbs.jpg" },
    { id: 3, name: "Ministério da Saúde", logo: "ms.png" }
  ];

  return (
    <div className="services-support-page">
      <section className="hero-section">
        <div className="container">
          <h1>Serviços e Apoio</h1>
          <p>Conheça todos os serviços e programas que oferecemos para nossa comunidade</p>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Apoio a Pacientes</h2>
          <div className="services-grid">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="programs-section">
        <div className="container">
          <h2>Programas da Associação</h2>
          <div className="programs-list">
            {programs.map(program => (
              <div key={program.id} className="program-item">
                <h3>{program.name}</h3>
                <p>{program.description}</p>
                <Link to={`/programas/${program.id}`} className="program-link">
                  Saiba mais sobre este programa
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Nossas Parcerias</h2>
          <p className="partners-intro">
            Trabalhamos em conjunto com estas instituições para melhor atender nossa comunidade:
          </p>
          <div className="partners-grid">
            {partners.map(partner => (
              <PartnerLogo
                key={partner.id}
                name={partner.name}
                logo={partner.logo}
              />
            ))}
          </div>
          <div className="cta-partners">
            <p>Sua instituição quer ser nossa parceira?</p>
            <Link to="/contato" className="partner-button">
              Entre em contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSupport;