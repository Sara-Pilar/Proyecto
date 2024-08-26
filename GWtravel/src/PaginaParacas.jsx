import { Fragment } from "react";
import Banner_costa from './componentes/BannerCosta';
import DescripcionCosta from "./componentes/DescripcionCosta";
import CCompra from './componentes/CCompra';
import paracas from './imagenes/Paracas-Costa.jpg'
import './componentes/Costa.css';
import DesParac from './imagenes/Paracas-Compra.jpg'


function PaginaParacas() {
    
    return (
        <>
         <Banner_costa
            imagen={paracas}
            nombre = "Paracas"
            />

            <div className="content">
                <DescripcionCosta
                imagen={DesParac}
                deDonde="Del aeropuerto Jorge Chavez a Miraflores."
                tiempo="En bus : 50 min"
                precio="S/ 145"
                descripcion="Empezaremos el City Tour en  <strong>Lima</strong>con el lugar que usted haya
                seleccionado. Iremos al lugar con el apoyo de nuestros guias que les daran
                recomendaciones. Los lugares seleccionados seran visitados todo el dia, conociendo la variedad
                de actividades que hay en cada lugar de Lima."
                />

                {/*Contenido de la derecha */}

                <CCompra
                    recomendacion1="Hola"
                    recomendacion2="Hola"
                />
                
            </div>
        </>
    )
}

export default PaginaParacas;