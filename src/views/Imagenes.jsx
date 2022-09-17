// import Libro from '../components/Libro'
import Imagen from "../components/Imagen";
import "../css/Imagen.css";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";
import Card from "../components/Card";

const Imagenes = () => {

  const {data , error, loading} = useFetch("https://api.unsplash.com/photos/?client_id=30nX-TKBQu0v4EsXoS-myOpA-413xxe7PSUdN_uO3yY");

  if(loading){
    return (
      <Loading />
    )
  }
  return (
    // <div className="hola">
      <div className="container-grid3">
        {
          data.map((item)=>(
            <Card
              img={item.urls.small}
              name={item.user.name}
              id={item.id}
            />
          ))
        }
      </div>
    // </div>
  );
};

export default Imagenes;
