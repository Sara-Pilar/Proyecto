import React from 'react';
import costa from '../imagenes/m-costa.png'
import sierra from '../imagenes/m-sierra.png'
import selva from '../imagenes/m-selva.png'
import mapa from '../imagenes/i-peru.png'

function MapaInicio() {
  return (
    <div className="inicio-parrafo">
        <h1>Bienvenidos a GW TRAVEL</h1>

        <div id="inicio-regiones">
            <section className="izquierda">
                <div className="costa">
                    <p>COSTA</p>
                    <img src={costa} alt=""/>
                </div>
                <div className="sierra">
                    <p>SIERRA</p>
                    <img src={sierra} alt=""/>
                </div>
            </section>

            <section className="centro">
                <img id="imagen-centro" src={mapa} alt=""/>
            </section>

            <section className="derecha">
                <div className="selva">
                    <p>SELVA</p>
                    <img src={selva} alt=""/>
                </div>
            </section>
        </div>
    </div>
  );
}

export default MapaInicio;