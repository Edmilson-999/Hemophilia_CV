import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import SocialMedia from '../components/SocialMedia';
import Map from '../components/Map';
import '../styles/ContactPage.css';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    // Lógica para enviar o formulário
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="hero-section">
        <div className="container">
          <h1>Fale Conosco</h1>
          <p>Estamos aqui para responder suas dúvidas e ouvir suas sugestões</p>
        </div>
      </section>

      <div className="contact-content container">
        <div className="contact-info">
          <h2>Informações de Contato</h2>
          
          <div className="contact-method">
            <h3>Endereço</h3>
            <p>Av. Amílcar Cabral, nº 123<br />Praia, Santiago<br />Cabo Verde</p>
          </div>

          <div className="contact-method">
            <h3>Telefone</h3>
            <p>+238 591 47 07</p>
          </div>

          <div className="contact-method">
            <h3>Email</h3>
            <p>associacaohemofilia25@gmail.com</p>
          </div>

          <div className="contact-method">
            <h3>Horário de Atendimento</h3>
            <p>Segunda a Sexta: 8h às 17h<br />Sábado: 9h às 12h</p>
          </div>

          <div className="social-section">
            <h3>Redes Sociais</h3>
            <SocialMedia />
          </div>
        </div>

        <div className="form-section">
          <h2>Envie uma Mensagem</h2>
          {formSubmitted ? (
            <div className="success-message">
              <h3>Obrigado pelo seu contato!</h3>
              <p>Sua mensagem foi enviada com sucesso. Retornaremos em breve.</p>
              <button 
                className="btn-new-message" 
                onClick={() => setFormSubmitted(false)}
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <ContactForm onSubmit={handleSubmit} />
          )}
        </div>
      </div>

      <section className="map-section">
        <div className="container">
          <h2>Onde Estamos</h2>
          <Map />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;