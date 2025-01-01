import React, { useState } from "react";
import "../style/Demo.css";
import print from "../images/imag.jpg";
import photo1 from "../images/imag.jpg";
import photo2 from "../images/app.jpg";
import photo3 from "../images/app.jpg";
import photo4 from "../images/app.jpg";
import video from "../videos/Vide.mp4";

function Demo() {
  const [selectedPhoto, setSelectedPhoto] = useState(print); // Foto selecionada
  const [isModalOpen, setModalOpen] = useState(false); // Estado do modal

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="demo" className="features py-5"
    style={{
      background: "linear-gradient(45deg, #373840, rgb(217, 187, 150))", // Gradiente elegante
      color: "#F2F0D5", // Texto claro para contraste
      padding: "5rem 0",
    }}
    >
      <div className="container" 
      style={{
         marginTop: "25px",
       }}>
        <h2 className="text-center mb-4">Demonstração</h2>
        <p className="text-center text-muted mb-5">
          Explore as principais funcionalidades do nosso aplicativo por meio de fotos e vídeos detalhados.
        </p>

        <div className="row align-items-center">
          {/* Coluna Fotos */}
          <div className="col-md-6 mb-4">
            <div className="demo-card">
              <h4 className="text-center">Fotos</h4>

             

              {/* Galeria de Miniaturas */}
              <div className="photo-grid mt-3">
                {[photo1].map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Miniatura ${index + 1}`}
                    className="img-fluid rounded"
                    onClick={() => openModal(photo)} // Abre o modal com a foto clicada
                  />
                ))}
              </div>

              <p className="text-center mt-3">
                Veja imagens do aplicativo em ação, com interface amigável e funcionalidades acessíveis.
              </p>
            </div>
          </div>

          {/* Coluna Vídeos */}
          <div className="col-md-6 mb-2">
            <div className="demo-card">
              <h4 className="text-center">Vídeos</h4>
              <video
                controls
                className="rounded"
                style={{
                  width: "60%",
                  maxHeight: "750px",
                  objectFit: "cover",
                }}
              >
                <source src={video} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>

              <p className="text-center mt-3">
                Assista a demonstrações em vídeo e descubra como o aplicativo pode transformar sua experiência.
              </p>
            </div>
          </div>
        </div>

        {/* Modal para exibição de fotos */}
        {isModalOpen && (
          <div className="photo-modal" onClick={closeModal}>
            <div className="photo-modal-content">
              <img src={selectedPhoto} alt="Foto em destaque" />
            </div>
          </div>
        )}

        {/* Botão para Mais Informações */}
        <div className="text-center mt-5">
          <a href="#learn-more" className="btn">
            Saiba Mais
          </a>
        </div>
      </div>
    </section>
  );
}

export default Demo;
