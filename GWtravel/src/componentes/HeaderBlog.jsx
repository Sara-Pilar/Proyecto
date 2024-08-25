import { Fragment } from "react";
import './EstilosBlog.css'


window.addEventListener("scroll",function(){ 
    let header = document.querySelector("header"); 
    header.classList.toggle("abajo", window.scrollY>0); 
})


function Header() {
                               
    return (
        <>
            <header>
                <a href="#" class="logo">BLOG VIAJERO</a>
                <nav>
                    <ul>
                        <li><a href="#">INICIO</a></li>
                        <li><a href="#">NOSOTROS</a></li>
                        <li><a href="#">DESTINOS</a></li>
                        <li><a href="#">OFERTAS y PROMOCIONES</a></li>
                        <li><a href="#">TESTIMONIOS</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">CONTACTO</a></li>

                    </ul>
                </nav>
            </header>
        </>
    );

}
export default Header;
