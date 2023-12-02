import React from "react";
import "../stylesheets/Home.css";

function CardImagen(props) {
  return(
    <div className="contenedor-cardImagen">
        <img className="cardImagen"
        src={require(`../imagenes/imagen-${props.imagen}.jpg`)}
        alt="Foto colorimetria de maquillaje"/>

        <div
            className="contenedor-cardTexto">
                <h2 className="tituloCard">{props.titulo}</h2>
                <p className="cardDescripcion">{props.descripcion}</p>
        </div>  
    </div>

  );
}



export default CardImagen;