import React from "react";
import "../style/Features.css";

function Features() {
  return (
    <section id="features" className="features py-5">
      <div className="container">
        <h2 className="text-center">Funcionalidades</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <h4>Para Donos</h4>
            <p>Cadastre lojas, funcionários e gerencie os dados da sua barbearia com facilidade.</p>
          </div>
          <div className="col-md-4">
            <h4>Para Barbeiros</h4>
            <p>Gerencie seus dados, serviços e agendamentos de forma organizada.</p>
          </div>
          <div className="col-md-4">
            <h4>Para Usuários</h4>
            <p>Escolha sua barbearia, barbeiro, agende serviços e acompanhe as confirmações.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
