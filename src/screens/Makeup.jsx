import React from "react";
import "../stylesheets/Makeup.css";

export function Subtitulo() {
    return(
        <h2 className="subtitulo">Todo nuestro <strong>MAKEUP</strong> para ti</h2>)
};


export function CardImagenMakeup(props) {
  return(
    <div className="contenedor-cardImagenMakeup">
        <img className="cardImagen"
        src={require(`../imagenes/imagen-${props.imagen}.jpg`)}
        alt="Foto colorimetria de maquillaje"/>

        <div
            className="contenedor-cardTexto">
                <h2 className="tituloCard">{props.titulo}</h2>
                <p className="cardDescripcionMakeup">{props.descripcion}</p>
        </div>  
    </div>

  );
};

