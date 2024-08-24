import React from "react";
import { Link } from 'react-router-dom';


function Footer() {
    return (
<footer>
        <div id="arriba">
            <div className="f-izquierdo">
                <Link to="/">
                <img className="" src="/path/to/logo.png" alt="Logo"/>
                GW TRAVEL
                </Link>
                 <p>GW Travel es una agencia de turismo que brinda la más alta 
                    experiencia en viajes, y tours a nivel nacional.
                 </p>
                <img className="redes-iconos" src="" alt=""/>
            </div>
            <div className="f-centro">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/PaginaNosotros">Nosotros</Link></li>
                    <li><Link to="/PaginaNosotros">Destinos</Link>
                        <ul>
                            <li><Link to="/PaginasNosotros">Costa</Link></li>
                            <li><Link to="/PaginasNosotros">Sierra</Link></li>
                            <li><Link to="/PaginasNosotros">Selva</Link></li>
                        </ul>
                    </li>
               </ul>
            </div>
            <div className="f-centro">
                <ul>
                    <li><Link to="/PaginasNosotros">Testimonios</Link></li>
                    <li><Link to="/PaginasNosotros">Blog</Link></li>
                </ul>
            </div>
            <div className="f-centro">
                <ul>
                <li><Link to="/PaginasNosotros">CONTACTO</Link>
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