import React from 'react';
import { Link } from 'react-router-dom';
import TeamMember from '../components/TeamMember';
import '../styles/AboutAssociation.css';

const AboutAssociation = () => {
  // Dados da equipe (pode ser movido para um arquivo separado)
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Carlos Mendes",
      position: "Presidente",
      photo: "./Img2 (2).png",
      bio: "Médico hematologista com 15 anos de experiência no tratamento de hemofilia."
    },
    {
      id: 2,
      name: "Ana Fernandes",
      position: "Vice-Presidente",
      photo: "/assets/team/member2.jpg",
      bio: "Mãe de paciente com hemofilia e ativista pelos direitos dos pacientes."
    },
    {
      id: 3,
      name: "Prof. João Monteiro",
      position: "Secretário",
      photo: "/assets/team/member3.jpg",
      bio: "Professor universitário e voluntário na associação há 8 anos."
    }
  ];

  return (
    <div className="about-association-page">
      <section className="hero-section">
        <div className="container">
          <h1>Sobre a Associação</h1>
          <p>Conheça nossa história, missão e a equipe que faz tudo acontecer</p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <article className="mission-card">
            <h2>Nossa Missão</h2>
            <div className="card-content">
              <p>
                Promover qualidade de vida para pessoas com hemofilia e outros distúrbios de coagulação em Cabo Verde, 
                através de apoio, conscientização e defesa de direitos.
              </p>
            </div>
          </article>

          <article className="vision-card">
            <h2>Nossa Visão</h2>
            <div className="card-content">
              <p>
                Ser referência nacional no apoio a pacientes com distúrbios hemorrágicos, garantindo acesso a tratamentos 
                adequados e uma vida plena e digna para todos os associados.
              </p>
            </div>
          </article>

          <article className="values-card">
            <h2>Nossos Valores</h2>
            <div className="card-content">
              <ul>
                <li><strong>Solidariedade:</strong> Apoio mútuo entre associados e familiares</li>
                <li><strong>Ética:</strong> Transparência em todas nossas ações</li>
                <li><strong>Excelência:</strong> Busca constante por melhores tratamentos</li>
                <li><strong>Advocacy:</strong> Defesa dos direitos dos pacientes</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="history-section">
        <div className="container">
          <h2>Nossa História</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>2005</h3>
              <p>Fundação da associação por um grupo de pais e médicos preocupados com a falta de apoio aos pacientes.</p>
            </div>
            <div className="timeline-item">
              <h3>2010</h3>
              <p>Primeiro convênio com o Ministério da Saúde para fornecimento regular de fatores de coagulação.</p>
            </div>
            <div className="timeline-item">
              <h3>2018</h3>
              <p>Inauguração da sede própria na Praia, com centro de infusão e espaço para reuniões.</p>
            </div>
            <div className="timeline-item">
              <h3>2023</h3>
              <p>Reconhecimento como instituição de utilidade pública pelo governo de Cabo Verde.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Nossa Equipe</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <TeamMember
                key={member.id}
                name={member.name}
                position={member.position}
                photo={member.photo}
                bio={member.bio}
              />
            ))}
          </div>
          <div className="cta-container">
            <Link to="/contato" className="cta-button">
              Quero fazer parte da equipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAssociation;