import React from "react";
import "../style/About.css";
import appImage1 from "../images/beardy.png"; // Imagem representando o app 1
import appImage2 from "../images/beardy.png"; // Imagem representando o app 2

function About() {
  return (
    <section className="about bg-light py-5" id="features"
    style={{
        background: "linear-gradient(45deg, #373840, rgb(217, 187, 150))", // Gradiente elegante
        color: "#F2F0D5", // Texto claro para contraste
        padding: "5rem 0",
      }}>
      <div className="container " style={{ marginTop: '60px' }}>
        <div className="row mb-5">
          <div className="col text-center">
            <h2 className="about-title fw-bold">Conheça nossos aplicativos</h2>
            <p className="about-subtitle text-muted">
              Soluções inovadoras para transformar a gestão de barbearias e melhorar a experiência dos clientes.
            </p>
          </div>
        </div>

        <div className="row align-items-center mb-5">
          <div className="col-md-6 text-center">
            <img
              src={appImage1}
              alt="App para donos de barbearias"
              className="img-fluid shadow-sm rounded"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Para Donos de Barbearias</h3>
            <p>
              Nosso primeiro aplicativo é exclusivo para os donos de barbearias. Com ele, você pode:
            </p>
            <ul className="list-unstyled">
              <li>✅ Cadastrar e gerenciar suas lojas.</li>
              <li>✅ Adicionar funcionários e gerenciar suas informações.</li>
              <li>✅ Controlar os dados de sua barbearia de forma prática e eficiente.</li>
            </ul>
            <p>
              <strong>Comece agora e simplifique sua gestão!</strong>
            </p>
          </div>
        </div>

        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6 text-center">
            <img
              src={appImage2}
              alt="App para barbeiros e clientes"
              className="img-fluid shadow-sm rounded"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold">Para Barbeiros e Clientes</h3>
            <p>
              O segundo aplicativo foi criado para atender barbeiros e usuários comuns:
            </p>
            <ul className="list-unstyled">
              <li>
                ✅ <strong>Barbeiros:</strong> Gerencie seus serviços, agendamentos e decida quais
                solicitações aceitar.
              </li>
              <li>
                ✅ <strong>Usuários:</strong> Agende serviços, escolha sua barbearia e barbeiro preferidos, selecione
                data, horário e forma de pagamento.
              </li>
            </ul>
            <p>
              <strong>Um app completo para criar conexões e melhorar a experiência de todos!</strong>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <a href="#demo" className="btn btn-primary btn-lg shadow-sm">
              Ver Demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
