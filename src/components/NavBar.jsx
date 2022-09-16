import React from "react";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header className="header">
        <div className="imagen">
          <img src="cam.png" alt="" />
          <NavLink to="/inicio">ImagenStore</NavLink>
        </div>

        <nav className="navbar">
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

          <button className="ham" type="button">
            <span className="br-1"></span>
            <span className="br-2>"></span>
            <span className="br-3>"></span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
