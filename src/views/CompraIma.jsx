import React from "react";
import "../css/CompraIma.css";

const CompraIma = () => {
  return (
    <div className="content">
      <div className="content-children">
        
          <div className="img">
            <img src="ima.jpg" alt="" />
          </div>
       

        <div className="container-descripcion">
          <h1>Descripción</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            aspernatur amet quia adipisci perferendis libero est ad quam
            similique officia.
          </p>
          <button className="btn1">Comprar ahora</button>
        </div>
      </div>
    </div>
  );
};

export default CompraIma;
