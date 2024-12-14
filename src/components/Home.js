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
        <p className="home-description">
          Gerencie sua barbearia de forma simples e eficiente!
        </p>
        <a href="#features" className="btn btn-light btn-lg mt-3 shadow-sm">
          Saiba Mais
        </a>
      </div>
    </header>
  );
}

export default Home;
