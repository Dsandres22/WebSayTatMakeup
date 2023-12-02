import React from "react";
import "../stylesheets/Productos.css";

function CardImagenProductos(props) {
    return(
      <div className="contenedor-cardImagenProductos">
          <img className="cardImagenProductos"
          src={require(`../imagenes/imagen-${props.imagen}.jpg`)}
          alt="Foto colorimetria de maquillaje"/>
  
          <div
              className="contenedor-cardTexto">
                  <h2 className="tituloCard">{props.titulo}</h2>
                  <p className="cardDescripcionProductos">{props.descripcion}</p>
          </div>  
      </div>
  
    );
  }
  
  
  
  export default CardImagenProductos;