import React from "react";
import "../style/Contact.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact py-5" 
    style={{
      background: "linear-gradient(45deg, #373840, rgb(217, 187, 150))", // Gradiente elegante
      color: "#F2F0D5", // Texto claro para contraste
      padding: "5rem 0",
     
    }}>
      <div className="container" style={{ marginTop: '60px' }}>
        <h2 className="text-center mb-4">Contato</h2>
        <p className="text-center text-muted mb-5">
          Entre em contato conosco preenchendo o formulário ou pelas redes sociais abaixo.
        </p>

        {/* Formulário de Contato */}
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <form className="contact-form">
              <div className="form-group mb-3">
                <label className="form-label">Nome</label>
                <input type="text" className="form-control" placeholder="Seu nome" required />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="seuemail@exemplo.com" required />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Mensagem</label>
                <textarea className="form-control" rows="4" placeholder="Sua mensagem" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn  btn-lg">Enviar Mensagem</button>
              </div>
            </form>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="social-buttons mt-5 text-center">
          <h4>Nos siga nas redes sociais</h4>
          <div className="social-icons mt-3">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-iconsa whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
