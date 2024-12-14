import React from "react";
import "../style/Home.css";
import logo from "../images/beardy.png";

function Home() {
  return (
    <header className="home bg-primary text-white text-center py-5" id="home">
      <div className="container">
        <img
          src={logo}
          alt="Logo Beardly"
          className="home-logo mb-4"
        />
        <h1 className="home-title">Bem-vindo ao Beardy</h1>
        <p className="home-description mt-3">
          Simplifique o gerenciamento da sua barbearia com nosso sistema inovador e intuitivo.
        </p>
        <p className="home-features">
          Agendamentos, controle financeiro, fidelidade de clientes e muito mais, 
          em um só lugar.
        </p>
        <div className="cta-buttons mt-4">
          <a href="#features" className="btn btn-light btn-lg shadow-sm me-3">
            Saiba Mais
          </a>
          <a href="#contact" className="btn btn-outline-light btn-lg shadow-sm">
            Entre em Contato
          </a>
        </div>
        <small className="home-tagline mt-5 d-block">
          "A sua barbearia, sempre um corte à frente."
        </small>
      </div>
    </header>
  );
}

export default Home;
