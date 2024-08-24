import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

import '../componentes/EstilosInicio.css';


function Menu() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header.classList.add("abajo");
      } else {
        header.classList.remove("abajo");
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
    return (
      <header>
        <div id="cabecera">
          <Link to="/">
            <img className="" src="/path/to/logo.png" alt="Logo"/>
            GW TRAVEL
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/PaginaNosotros">NOSOTROS</Link></li>
            <li><Link to="/PaginaNosotros">DESTINOS</Link>
              <ul className="submenu">
                <li><Link to="/PaginasNosotros">Costa</Link></li>
                <li><Link to="/PaginasNosotros">Sierra</Link></li>
                <li><Link to="/PaginasNosotros">Selva</Link></li>
              </ul>
            </li>
            <li><Link to="/PaginasNosotros">TESTIMONIOS</Link></li>
            <li><Link to="/PaginasNosotros">BLOG</Link></li>
            <li><Link to="/PaginasNosotros">CONTACTO</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Menu;