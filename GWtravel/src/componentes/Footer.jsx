import React from "react"


function Footer() {
    return (
<footer>
        <div id="arriba">
            <div className="f-izquierdo">
                 <a href="#">
                <img className="logo-footer" src="" alt=""/>GW-TRAVEL
                 </a>
                 <p>GW Travel es una agencia de turismo que brinda la más alta 
                    experiencia en viajes, y tours a nivel nacional.
                 </p>
                <img className="redes-iconos" src="" alt=""/>
            </div>
            <div className="f-centro">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="">Nosotros</a></li>
                    <li><a href="">Destinos</a>
                        <ul>
                            <li><a href="">Costa</a></li>
                            <li><a href="">Sierra</a></li>
                            <li><a href="">Selva</a></li>
                        </ul>
                    </li>
               </ul>
            </div>
            <div className="f-centro">
                <ul>
                    <li><a href="">Ofertas y promociones</a></li>
                    <li><a href="">Testimonios</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>
            <div className="f-centro">
                <ul>
                    <li><a href="">Contacto</a>
                        <ul>
                            <li>+91 987655841</li>
                            <li>info@gwtravel.com</li>
                            <li>Av.travel #123</li>
                        </ul>
                    </li>
                </ul>
            </div>                
        </div>
        <div className="linea">
            <hr/>
        </div>
        <div id="final">
            <div className="pie"><p>Copyright 2024 GW Travel s.a.c. Todos los derechos reservados</p></div>
            <div className="pie"><p>Términos & condiciones | Política de privacidad</p></div>
        </div>
   </footer>
     );
    }
export default Footer;