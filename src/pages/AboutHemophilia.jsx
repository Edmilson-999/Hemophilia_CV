import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutHemophilia.css';

const AboutHemophilia = () => {
  return (
    <div className="about-hemophilia-page">
      <section className="hero-section">
        <div className="container">
          <h1>Sobre a Hemofilia</h1>
          <p>Informações essenciais sobre a condição, seus tipos e tratamentos</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <article className="info-card">
            <h2>O que é Hemofilia?</h2>
            <div className="card-content">
              <p>
                A hemofilia é um distúrbio genético raro que afeta a capacidade do sangue de coagular normalmente. 
                Pessoas com hemofilia sangram por períodos mais longos do que o normal após lesões e podem 
                experimentar sangramentos espontâneos nas articulações e músculos.
              </p>
              <p>
                A condição é causada pela deficiência ou ausência de fatores de coagulação no sangue, 
                proteínas essenciais para a formação de coágulos sanguíneos.
              </p>
            </div>
          </article>

          <article className="info-card">
            <h2>Tipos de Hemofilia</h2>
            <div className="card-content">
              <div className="type-container">
                <div className="hemophilia-type">
                  <h3>Hemofilia A</h3>
                  <ul>
                    <li>Deficiência do Fator VIII</li>
                    <li>Cerca de 80% dos casos</li>
                    <li>Graus: leve, moderado e grave</li>
                  </ul>
                </div>
                
                <div className="hemophilia-type">
                  <h3>Hemofilia B</h3>
                  <ul>
                    <li>Deficiência do Fator IX</li>
                    <li>Cerca de 20% dos casos</li>
                    <li>Também conhecida como Doença de Christmas</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <article className="info-card">
            <h2>Tratamentos Disponíveis</h2>
            <div className="card-content">
              <div className="treatment">
                <h3>Terapia de Reposição</h3>
                <p>
                  Infusão intravenosa do fator de coagulação deficiente (FVIII para Hemofilia A, 
                  FIX para Hemofilia B).
                </p>
              </div>
              
              <div className="treatment">
                <h3>Tratamento Profilático</h3>
                <p>
                  Administração regular de concentrados de fatores de coagulação para prevenir 
                  sangramentos, especialmente em casos graves.
                </p>
              </div>
              
              <div className="treatment">
                <h3>Novos Tratamentos</h3>
                <ul>
                  <li>Terapia genética (em desenvolvimento)</li>
                  <li>Agentes não substitutivos (emicizumabe)</li>
                  <li>Medicamentos antifibrinolíticos</li>
                </ul>
              </div>
                    
              <Link to="/tratamentos" className="more-link">
                Saiba mais sobre tratamentos →
              </Link>
            </div>
          </article>

          <div className="support-section">
            <h2>Precisa de Ajuda?</h2>
            <p>
              A Associação de Hemofilia de Cabo Verde oferece suporte e orientação para pacientes e familiares.
            </p>
            <Link to="/contato" className="support-button">
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHemophilia;