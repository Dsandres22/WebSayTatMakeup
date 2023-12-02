import React from "react";
import "../stylesheets/Servicios.css";

function CardImagenServicios (props) {
    return(
      <div className="contenedor-cardImagenServicios">
          <img className="cardImagenServicios"
          src={require(`../imagenes/imagen-${props.imagen}.jpg`)}
          alt="Foto colorimetria de maquillaje"/>
  
          <div
              className="contenedor-cardTexto">
                  <h2 className="tituloCard">{props.titulo}</h2>
                  <p className="cardDescripcionServicios">{props.descripcion}</p>
          </div>  
      </div>
  
    );
  }
  
  
  
  export default CardImagenServicios;