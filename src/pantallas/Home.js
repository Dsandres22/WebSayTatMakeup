import React from 'react'
import CardImagen from "../screens/Home";
import { AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
  <body>
   <div className="ContenedorCards">
    <CardImagen
      titulo="COLORIMETRIA DEL MAQUILLAJE"
      descripcion="La colorimetría en el maquillaje 
      se utiliza para saber qué colores nos favorecen y 
      ayudan a potencializar nuestra belleza natural. 
      Aunque parece sencillo hablar de los colores, 
      es un tema muy amplio en donde se tiene cuenta la 
      variedad de tonalidades, las combinaciones, la temperatura, 
      la dimensión del color, etc. Así que vamos a hacer de la 
      teoría del color un aprendizaje muy sencillo y divertido de 
      entender."
      imagen="colorMaquillaje"
    />

    <CardImagen
      titulo="BASES"
      descripcion="La base de la línea SAY TAT proporciona una cobertura alta, 
      ideal para corregir imperfecciones e igualar el tono de la piel, sin dejar 
      una apariencia pesada. Tiene una textura de mousse dejando la piel con un 
      toque aterciopelado. Está disponible en 17 tonos y es adecuada para todo 
      tipo de piel."
      imagen="bases"
    />

    <CardImagen
      titulo="SOMBRAS"
      descripcion="Finalmente ha sucedido... ¡la paleta de sombras de ojos Sigma por 
      SAY TAT MAKEUP! En primer lugar, gracias a mis increíbles seguidores por todo 
      su amor y apoyo. He soñado con crear mi propia paleta durante años, y gracias a ti, 
      ¡este sueño es ahora una realidad! Elegí a mano estos colores pensando en ti, ya seas 
      un principiante en sombras de ojos o un experto. ¡No puedo esperar a ver los impresionantes 
      looks que creas!"
      imagen="sombras"
    />
  </div>  
  
  <div>
        <footer>
        <p>&copy; 2023 Say Tat Makeup</p>
        <div><AiFillInstagram className='instagram'/></div>
        </footer>
  </div>
  </body>
  )
}

export default Home;