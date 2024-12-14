// Componente Main (Main.js)
import React from "react";
import "../style/Main.css";

function Main() {
  return (
    <main className="main-content">
      <section id="home">
        <h2>Bem-vindo!</h2>
        <p>Esta é uma página simples criada com React.</p>
      </section>
      <section id="about">
        <h2>Sobre</h2>
        <p>Este site é um exemplo básico de SPA (Single Page Application).</p>
      </section>
      <section id="contact">
        <h2>Contato</h2>
        <p>Envie-nos uma mensagem em <a href="mailto:exemplo@email.com">exemplo@email.com</a>.</p>
      </section>
    </main>
  );
}

export default Main;
