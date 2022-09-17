import React from "react";
import "../css/Imagen.css";
import { NavLink } from "react-router-dom";

function Card({img, name,id}) {
  return (
    <div>
      <div className="card">
        <img src={img} className="ima" alt="..." />
        <p className="text">{name}</p>
        <button className="btn3">
          <NavLink to={`/compraIma/${id}`}>Comprar</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Card;
