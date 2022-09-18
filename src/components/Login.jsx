// import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {

  return (
    <>
      <div className="container-title">
        <h2>MI CUENTA</h2>
        <h3>Aquí podrás mirar y administrar tu cuenta y pedidos</h3>
      </div>


      <div className="contenido">
        <div className="container">
          <form className="form">
            <div className="title">
              <p>Iniciar Sesión</p>
            </div>
            <div className="form__section">
              <input
                type="text"
                name="usuario"
                className="form__input"
                placeholder="Usuario"
                onChange={handleChange}
                value={inicioSesion.name}
              />
            </div>
            <div className="form__section">
              <input
                type="password"
                name="password"
                className="form__input"
                placeholder="Contraseña"
                onChange={handleChange}
                value={inicioSesion.password}
              />
            </div>
            <div className="form-check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="flexCheckDefault" 
                        name= "check"
                        checked={inicioSesion.Check}
                        onChange= {handleChange}
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="flexCheckDefault"
                    >
                        Recordar contraseña
                    </label>
                </div>

            <button className="btn">Entrar</button>
            <div className="forgot">
              <a href="">¿Has olvidado la contraseña?</a>
              <p>
                ¿No tienes una cuenta?
                <a href="">Registrate</a>
              </p>
            </div>
          </form>
        </div>

        <div className="container">
          <form className="form">
            <div className="title">
              <p>Registrarse</p>
            </div>
            <div className="form__section">
              <input
                type="text"
                name=""
                className="form__input"
                placeholder="Identificacion"
              />
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
                type="text"
                name=""
                className="form__input"
                placeholder="Telefono"
              />
            </div>
            <div className="form__section">
              <input
                type="email"
                name=""
                className="form__input"
                placeholder="Email"
              />
            </div>
            <div className="form__section">
              <input
                type="password"
                name=""
                className="form__input"
                placeholder="Contraseña"
              />
            </div>
            <div className="form__section">
              <input
                type="password"
                name=""
                className="form__input"
                placeholder="Confirmar contaseña"
              />
            </div>

            <button className="btn">Registrarte</button>
            <div className="forgot">
              <p>
                ¿Tienes una cuenta?
                <a href="">Entrar</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
