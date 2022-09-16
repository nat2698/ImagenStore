import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="pie-pagina">
        <div className="grupo-1">
          <div className="box">
            
              <img className="ima2" src="cam.png" alt="" />
            
          </div>
          <div className="box">
            <a href="">
              <h2> SOBRE NOSOTROS</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, modi?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, modi?
              </p>
            </a>
          </div>
          <div className="box">
            <h2>SIGUENOS</h2>
            <div className="red-social">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="grupo-2">
          <small>
            &copy; 2022 <b>ImagenStore</b> - Todos los Derechos Reservados
          </small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
