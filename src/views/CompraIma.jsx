import React from "react";
import { useParams } from "react-router-dom";
import "../css/CompraIma.css";
import { useFetch } from "../hooks/useFetch";

const CompraIma = () => {

  let params = useParams();
  const { data, error, loading } = useFetch(
    `https://api.unsplash.com/photos/${params.id}?client_id=30nX-TKBQu0v4EsXoS-myOpA-413xxe7PSUdN_uO3yY`
  );

  console.log(data)




  return (
    <div className="content">
      <div className="content-children">
        
          <div className="img">
            <img src={data?.urls?.small} alt="" />
          </div>
       

        <div className="container-descripcion">
          <h1>{data?.user?.name}</h1>
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
