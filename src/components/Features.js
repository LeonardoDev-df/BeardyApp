import React from "react";
import "../style/Features.css";
import iconBarberShop from "../images/iconBarberShop.png";
import iconBarber from "../images/iconBarber.png";
import iconUser from "../images/iconUser.png";

function Features() {
  return (
    <section
      id="features"
      className="features py-5"
      style={{
        background: "linear-gradient(45deg, #373840, rgb(217, 187, 150))", // Gradiente elegante
        color: "#F2F0D5", // Texto claro para contraste
        padding: "5rem 0",
      }}
    >
      <div className="container"  style={{ marginTop: '60px' }}>
        <h2
          className="text-center mb-4"
          style={{ color: "#141826", fontWeight: "bold" }} // Destaque no título
        >
          Funcionalidades do Aplicativo
        </h2>
        <p
          className="text-center mb-5"
          style={{ color: "#373840", fontSize: "1.1rem" }} // Texto descritivo em cor média
        >
          Conheça as principais funcionalidades que tornam nossos aplicativos indispensáveis para donos de barbearias, barbeiros e clientes.
        </p>
        <div className="row text-center">
          {/* Card: Para Donos */}
          <div className="col-md-4 mb-4">
            <div
              className="feature-card p-4 shadow-sm"
              style={{
                backgroundColor: "#D9BB96", // Fundo suave para os cards
                borderRadius: "10px",
                color: "#141826",
              }}
            >
              <img
                src={iconBarberShop}
                alt="Ícone Donos"
                className="feature-icon mb-3"
                style={{ width: "50px", height: "50px" }}
              />
              <h4
                className="feature-title"
                style={{
                  color: "#141826",
                  fontWeight: "600",
                }}
              >
                Para Donos
              </h4>
              <p className="feature-description" style={{ color: "#373840" }}>
                Cadastre suas lojas e funcionários, gerencie os dados da sua barbearia e tenha controle total do seu negócio.
              </p>
            </div>
          </div>
          {/* Card: Para Barbeiros */}
          <div className="col-md-4 mb-4">
            <div
              className="feature-card p-4 shadow-sm"
              style={{
                backgroundColor: "#D9BB96",
                borderRadius: "10px",
                color: "#141826",
              }}
            >
              <img
                src={iconBarber}
                alt="Ícone Barbeiros"
                className="feature-icon mb-3"
                style={{ width: "50px", height: "50px" }}
              />
              <h4
                className="feature-title"
                style={{
                  color: "#141826",
                  fontWeight: "600",
                }}
              >
                Para Barbeiros
              </h4>
              <p className="feature-description" style={{ color: "#373840" }}>
                Gerencie seus dados, cadastre serviços, controle agendamentos e personalize suas configurações de acordo com sua vontade.
              </p>
            </div>
          </div>
          {/* Card: Para Usuários */}
          <div className="col-md-4 mb-4">
            <div
              className="feature-card p-4 shadow-sm"
              style={{
                backgroundColor: "#D9BB96",
                borderRadius: "10px",
                color: "#141826",
              }}
            >
              <img
                src={iconUser}
                alt="Ícone Usuários"
                className="feature-icon mb-3"
                style={{ width: "50px", height: "50px" }}
              />
              <h4
                className="feature-title"
                style={{
                  color: "#141826",
                  fontWeight: "600",
                }}
              >
                Para Usuários
              </h4>
              <p className="feature-description" style={{ color: "#373840" }}>
                Encontre barbearias, escolha seu barbeiro, agende serviços, selecione horários e acompanhe as confirmações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
