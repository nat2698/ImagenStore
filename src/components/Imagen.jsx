import "../css/Imagen.css";
import { useSearchParams } from "react-router-dom";

const Imagen = () => {
  // <div className='hol'>
  //     <input className='formu' type="text" />
  //     <button className="btn3">Buscar</button>

  function Search({ handleSearch }) {
    let [search, setSearch] = useSearchParams();

    const handleChange = (e) => {
      console.log(e.target.value);
      let filter = e.target.value;
      if (filter) {
        setSearch({ filter });
      } else {
        setSearch({});
      }
    };

    return (
      <div>
        <div className="buscar">
          <input
            type="text"
            placeholder="Buscar"
            className="input_buscar"
            value={search.get("filter") || ""}
            onChange={handleChange}
          />
          <button
            className="btn_Buscar"
            onClick={() => handleSearch(search.get("filter") || "")}
          ></button>
        </div>
      </div>
    );
  }
};

export default Imagen;
