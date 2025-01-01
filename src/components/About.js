import React from "react";
import "../style/About.css";
import appImage1 from "../images/beardy.png"; // Imagem representando o app 1
import appImage2 from "../images/LogoConnect.webp"; // Imagem representando o app 2

const AboutSection = ({ title, description, image, features, reverse }) => (
  <div className={`row align-items-center mb-5 ${reverse ? "flex-md-row-reverse" : ""}`}>
    <div className="col-md-6 text-center">
      <img src={image} alt={title} className="img-fluid shadow-sm rounded" />
    </div>
    <div className="col-md-6">
      <h3 className="fw-bold">{title}</h3>
      <p>{description}</p>
      <ul className="list-unstyled">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  </div>
);

function About() {
  return (
    <section
      className="about bg-light py-5"
      id="features"
      style={{
        background: "linear-gradient(45deg, #373840, rgb(217, 187, 150))",
        color: "#F2F0D5",
      }}
    >
      <div className="container" style={{ marginTop: "60px" }}>
        <div className="row mb-5">
          <div className="col text-center">
            <h2 className="about-title fw-bold">Conheça nossos aplicativos</h2>
            <p className="about-subtitle text-muted">
              Soluções inovadoras para transformar a gestão de barbearias e melhorar a experiência dos clientes.
            </p>
          </div>
        </div>

        <AboutSection
          title="Para Donos de Barbearias"
          description={
            <>
              Nosso primeiro aplicativo é exclusivo para os donos de barbearias. Com ele, você pode:
              <br />
              <a 
                href="https://play.google.com/store/apps/details?id=com.liondf.barbervip&pcampaignid=web_share" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: "#ffdc82", textDecoration: "underline" }}
              >
                Baixar agora na Play Store
              </a>
            </>
          }
          image={appImage1}
          features={[
            "✅ Cadastrar e gerenciar suas lojas.",
            "✅ Adicionar funcionários e gerenciar suas informações.",
            "✅ Controlar os dados de sua barbearia de forma prática e eficiente.",
            <strong>Comece agora e simplifique sua gestão!</strong>,
          ]}
        />


        <AboutSection
          title="Para Barbeiros e Clientes"
          description="O segundo aplicativo foi criado para atender barbeiros e usuários comuns:"
          image={appImage2}
          features={[
            "✅ Barbeiros: Gerencie seus serviços, agendamentos e decida quais solicitações aceitar.",
            "✅ Usuários: Agende serviços, escolha sua barbearia e barbeiro preferidos, selecione data, horário e forma de pagamento.",
            <strong>Um app completo para criar conexões e melhorar a experiência de todos!</strong>,
          ]}
          reverse
        />

        <div className="row">
          <div className="col text-center">
            <a href="#demo" className="btn btn-lg btn-custom shadow-sm">
              Ver Demonstração
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
