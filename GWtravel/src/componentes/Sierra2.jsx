import React from "react";

function Sierra2({ Destinos, imagen1, macchu, boton1, imagen2, boton2, montana, imagen3, catedral, boton3 }) 
{
  return (
    <>
      <section className="fondo">
        <section className="Destacados">
          <h2>{Destinos}</h2>
          <div className="container">
            <div className="imagen">
              <img src={imagen1} alt="Machu Picchu" />
              <h3>{macchu}</h3>
              <button className="btn-fondo">{boton1}</button>
            </div>
            <div className="imagen">
              <img src={imagen2} alt="Montaña de Siete Colores" />
              <h3>{montana}</h3>
              <button className="btn-fondo">{boton2}</button>
            </div>
            <div className="imagen">
              <img src={imagen3} alt="Catedral de Paracas" />
              <h3>{catedral}</h3>
              <button className="btn-fondo">{boton3}</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Sierra2;


