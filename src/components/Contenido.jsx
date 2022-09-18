import React from "react";
import "../css/Contenido.css";
import { NavLink } from "react-router-dom";


const Contenido = () => {
  
  return (
    <>
      <div className="box-card">
        <div className="card">
          <img src="ima.jpg" className="ima" alt="..." />
          <p className="text">Imagen</p>
          <button className="button">
            <NavLink to="/compraIma">Comprar</NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Contenido;
