import "../stylesheets/Servicios.css";
import  CardImagenServicios from "../screens/Servicios";
import { AiFillInstagram } from "react-icons/ai";

function Servicios() {
  return (
    <div className="Servicios">
      <body>
      
      <div className="Servicios">
        <CardImagenServicios
          titulo="Makeup Novia"
          descripcion="$500.000"
          imagen="novia"
        />

        <CardImagenServicios
          titulo="Makeup Social"
          descripcion="$180.000"
          imagen="makeupsocial"
        />

        <CardImagenServicios
          titulo="Makeup Modelaje"
          descripcion="$180.000"
          imagen="makeupmodelaje"
        />

        <CardImagenServicios
          titulo="Makeup Artistico"
          descripcion="150.000"
          imagen="makeupartistico"
        />
        <CardImagenServicios
          titulo="Makeup Piel Oscura"
          descripcion="$180.000"
          imagen="makeuppieloscura"
        />
        <CardImagenServicios
          titulo="Limpieza Facial"
          descripcion="$50.000"
          imagen="limpiezafacial"
        />
        <CardImagenServicios
          titulo="Peinado Social"
          descripcion="$120.000"
          imagen="peinadosocial"
        />

        <CardImagenServicios
          titulo="Labial en Crema"
          descripcion="$18.000"
          imagen="novia"
        />

        <CardImagenServicios
          titulo="Peinado Novia"
          descripcion="$200.000"
          imagen="peinadonovia"
        />

        <CardImagenServicios
          titulo="Peinado Artistico"
          descripcion="$110.000"
          imagen="peinadoartistico"
        />
        <CardImagenServicios
          titulo="Postura Pestañas"
          descripcion="$80.000"
          imagen="posturapestañas"
        />

      </div>  
    
      <div>
        <footer>
        <p>&copy; 2023 Say Tat Makeup</p>
        <div><AiFillInstagram className='instagram'/></div>
        </footer>
      </div>
  </body>
  </div>
  )
}

export default Servicios;
