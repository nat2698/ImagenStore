import React from "react";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {

  const [responsive, setResponsive] = useState(true);

  const handleResponsive = () => {
    setResponsive(!responsive)
  };
  return (
    <>
      <header className="header">
        <div className="imagen">
          <img src="cam.png" alt="" />
          <NavLink to="/inicio">ImagenStore</NavLink>
        </div>

        <nav className={responsive? "navbar" : "enlaces-menu-activado"}>
          <ul className="enlaces-menu">
            <li className="item">
              <NavLink to="/inicio">Inicio</NavLink>
            </li>
            <li className="item">
            <NavLink to="/imagenes">Imagenes</NavLink>
            </li>
            <li className="item">
              <NavLink to="/login">Mi cuenta</NavLink>
            </li>
            <li className="item">
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            
          </ul>

          
        </nav>

        <button className={responsive? "ham" : "btn-ham"} type="button" onClick={handleResponsive}>
      
        <i class="fa-solid fa-bars"></i>
          </button>
      </header>
    </>
  );
};

export default NavBar;
