import React from "react";
import "../style/Demo.css";

function Demo() {
  return (
    <section id="demo" className="demo py-5 bg-light">
      <div className="container">
        <h2 className="text-center">Demonstração</h2>
        <div className="row mt-4">
          <div className="col-md-6">
            <h4>Fotos</h4>
            <img src="demo-photo.jpg" alt="Demonstração do app" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h4>Vídeos</h4>
            <video controls className="w-100">
              <source src="demo-video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Demo;
