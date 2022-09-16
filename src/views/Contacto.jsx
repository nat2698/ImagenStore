import React from "react";
import "../css/Contacto.css";

const Contacto = () => {
  return (
    <>
      <div className="container-form">
        <form className="form">
          <div className="title">
            <p>Contacto</p>
          </div>
          <div className="form__section">
            <input
              type="text"
              name=""
              className="form__input"
              placeholder="Nombre"
            />
          </div>
          <div className="form__section">
            <input
              type="password"
              name=""
              className="form__input"
              placeholder="Telefono"
            />
          </div>
          <div className="form__section">
            <textarea              
              type="text"
              name=""
              className="form__input"
              placeholder="Mensaje"
            />
          </div>

          <button className="btnx">Enviar</button>
        </form>
      </div>
    </>
  );
};

export default Contacto;
