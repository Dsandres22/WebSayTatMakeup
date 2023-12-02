import "../stylesheets/Makeup.css";
import { Subtitulo, CardImagenMakeup } from "../screens/Makeup.jsx";
import { AiFillInstagram } from "react-icons/ai";

function Makeup() {
  return (
    <div className="Makeup">
      <body>
      <div className="subtitulo">
      <Subtitulo />
      </div>
      <div className="Makeup">
        <CardImagenMakeup
          titulo="Makeup Novia"
          descripcion="Todo para tu día especia"
          imagen="novia"
        />

        <CardImagenMakeup
          titulo="Makeup Social"
          descripcion="Resalta en tus eventos"
          imagen="social"
        />

        <CardImagenMakeup
          titulo="OTRO"
          descripcion="AGREGAR!"
          imagen="sombras"
        />

        <CardImagenMakeup
          titulo="NUEVO"
          descripcion="AGREGAR!"
          imagen="sombras"
        />
        <CardImagenMakeup
          titulo="NUEVO"
          descripcion="AGREGAR!"
          imagen="sombras"
        />

      </div>  
      </body>
      <div>
        <footer>
        <p>&copy; 2023 Say Tat Makeup</p>
        </footer>
      </div>
    </div>
  );
}

export default Makeup;