import './App.css';
import  styles from "./componentes/NavBar.module.css";
import NavBar from './componentes/NavBar';
import Home from "./pantallas/Home";
import Makeup from "./pantallas/Makeup";
import Productos from "./pantallas/Productos";
import Servicios from "./pantallas/Servicios";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
/*import CardImagen from "./screens/Home";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <header>
          <div className='logo'>
            <img src={require("./imagenes/imagen-logo.jpg")} alt="logo de la marca"/>
          </div>
          <div>
          <h1>SAY TAT MAKEUP</h1> 
          </div>
          <div className='iconos'>
          <RiAccountCircleLine className='usuario'/>
          <AiFillInstagram className='instagram'/>
          <AiFillShopping className='bolsa-compras'/>
          
          </div>
         

          <nav className=''>
            <ul>
              <li className='styles-list'>
                <Router>
                <NavBar />
                      <Routes className='list'>
                        <Route path="/Home" element={<Home/>} />
                      
                        <Route path="/Makeup" element={<Makeup/>} />
                      
                        <Route path="/Productos" element={<Productos/>} />
                      
                        <Route path="/Servicios" element={<Servicios/>} />
                      </Routes>
                </Router>
                </li>
            </ul>
          </nav>
        </header>

        <body>

       

        </body>

      </div>
       
  );
}

export default App;


