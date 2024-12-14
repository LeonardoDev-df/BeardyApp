import React from "react";
import "../style/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact py-5">
      <div className="container">
        <h2 className="text-center">Contato</h2>
        <form className="mt-4">
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensagem</label>
            <textarea className="form-control" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
