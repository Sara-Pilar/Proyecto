import { Fragment } from "react";
import '../componentes/EstilosInicio.css'


function Menu() {
    return (
      <header>
        <div id="cabecera">
          <a href="#">
            <img className="" src="" alt="" />
            GW TRAVEL
          </a>
        </div>
        <nav>
          <ul>
            <li><a href="#">INICIO</a></li>
            <li><a href="">NOSOTROS</a></li>
            <li><a href="">DESTINOS</a>
              <ul className="submenu">
                <li><a href="">Costa</a></li>
                <li><a href="">Sierra</a></li>
                <li><a href="">Selva</a></li>
              </ul>
            </li>
            <li><a href="l">TESTIMONIOS</a></li>
            <li><a href="">BLOG</a></li>
            <li><a href="l">CONTACTO</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Menu;