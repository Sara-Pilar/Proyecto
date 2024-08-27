import React from "react";
import imagen2 from '../imagenes/S-7colores.jpg'
import imagen3 from '../imagenes/S-Catedral.jpg'
import imagen1 from '../imagenes/S-Macchu.jpg'

function Sierra1({ Destinos, macchuText, boton1, montanaText, boton2, catedralText, boton3 }) {
  return (
    <>
      <section className="fondo"> 
        <section className="Destacados">
          <h2>{Destinos}</h2>
          <div className="container">
            <div className="imagen">
              <img src={imagen1} alt="Machu Picchu" />
              <h3>{macchuText}</h3>
              <button className="btn-fondo">{boton1}</button>
            </div>
            <div className="imagen">
              <img src={imagen2} alt="Montaña de Siete Colores" />
              <h3>{montanaText}</h3>
              <button className="btn-fondo">{boton2}</button>
            </div>
            <div className="imagen">
              <img src={imagen3} alt="Catedral de Paracas" />
              <h3>{catedralText}</h3>
              <button className="btn-fondo">{boton3}</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Sierra1;

