import React from "react";
import { useEffect, useState } from "react";
import "../css/Imagen.css";
import { NavLink } from "react-router-dom";

const UseFetch = () => {
  const url =
    "https://api.unsplash.com/photos/?client_id=30nX-TKBQu0v4EsXoS-myOpA-413xxe7PSUdN_uO3yY";
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();

    setTodos(responseJSON);
    console.log(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="container-grid3">
      {!todos
        ? "cargando..."
        : todos.map((item) => {
            return (
              
                <div className="card">
                  <img src={item.urls.small} className="ima" alt="..." />
                  <p className="text">{item.user.name}</p>
                  <button className="btn3">
                  <NavLink to="/compraIma">Comprar</NavLink>
                  </button>
                </div>
              
            );
          })}
    </div>
  );
};

export default UseFetch;
