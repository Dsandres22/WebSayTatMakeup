import "../stylesheets/Productos.css";
import  CardImagenProductos from "../screens/Productos";
import { AiFillInstagram } from "react-icons/ai";

function Productos() {
  return (
    <div className="Productos">
      <body>
      
      <div className="Productos">
        <CardImagenProductos
          titulo="Labial en Pasta"
          descripcion="$20.000"
          imagen="labialpasta"
        />

        <CardImagenProductos
          titulo="Labial en Crema"
          descripcion="$18.000"
          imagen="labialcrema"
        />

        <CardImagenProductos
          titulo="Labial Delux"
          descripcion="$65.000"
          imagen="labialedicionlimitada"
        />

        <CardImagenProductos
          titulo="Exfoliante de Labios"
          descripcion="15.000"
          imagen="exfoliantelabios"
        />
        <CardImagenProductos
          titulo="Labial Intenso"
          descripcion="$30.000"
          imagen="labialintenso"
        />
        <CardImagenProductos
          titulo="Labial Liquido"
          descripcion="$35.000"
          imagen="labialliquido"
        />
        <CardImagenProductos
          titulo="Labial en Pasta"
          descripcion="$25.000"
          imagen="labialpasta"
        />

        <CardImagenProductos
          titulo="Labial en Crema"
          descripcion="$18.000"
          imagen="labialcrema"
        />

        <CardImagenProductos
          titulo="Labial Delux"
          descripcion="$65.000"
          imagen="labialedicionlimitada"
        />

        <CardImagenProductos
          titulo="Exfoliante de Labios"
          descripcion="$15.000"
          imagen="exfoliantelabios"
        />
        <CardImagenProductos
          titulo="Labial Intenso"
          descripcion="$30.000"
          imagen="labialintenso"
        />
        <CardImagenProductos
          titulo="Labial Liquido"
          descripcion="$25.000"
          imagen="labialliquido"
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

export default Productos;
