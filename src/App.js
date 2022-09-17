import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Contacto from "./views/Contacto";
import Imagenes from "./views/Imagenes";
import CompraIma from "./views/CompraIma";



import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {


  



  return (
    <div className="App">
      

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        <Routes>
          <Route path="/imagenes" element={<Imagenes/>} />
        </Routes>
        <Routes>
          <Route path="/compraIma/:id" element={<CompraIma/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

/* <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio />} /> 
          <Route path='blog' element={<Blog/>}/>
          <Route path='blog/:id' element={<Post />}/>
          <Route path='contacto' element={<Contacto />}/>

          <Route path='protegida' element={
            <VerificarUsuario>
              <RutaProtegida />
            </VerificarUsuario>
          }/>

          <Route path='*' element={<NoEncontrada />}/>
        </Route>
      </Routes> */
