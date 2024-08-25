import React from "react";

function Contacto1()
   {
    
    return(
        <>
          <div class="banner">
            <img id="banner-js" src="https://w0.peakpx.com/wallpaper/424/854/HD-wallpaper-saint-mary-s-lake-wild-goose-island-montana-grass-clouds-green-montana-land-saint-blue-marys-forest-sky-trees-lake-daylight-water-mountains-evergreens-day-wild-goose-island-nature.jpg" alt="Banner Image"/>
        <div class="Titulo">
            <h1>CONTÁCTANOS</h1>
        </div>
        </div>
    </header > 
    <section class="Formulario">
        <form class="Name-Last">
            <input type="text" placeholder="Nombre y Apellidos." required>
        </form>
        <form class="Num-Correo">
            <img src="" alt="">
            <input type="text" placeholder="Telefono/Whtassap" required>
            <input type="email" placeholder="Correo Electronico" required>
        </form>
        <form class="Hotel-Presu">
            <input type="text" placeholder="Categoria Hotel:" required>
            <input type="text" placeholder="Presupuesto" required>
        </form>
        <form class="Pie">
            <input type="text" placeholder="Destino" required>
            <input type="text" placeholder="Salida" required>
            <input type="text" placeholder="Retorno" required>
        </form>
        <form class="Mensaje">
            <input type="text" placeholder="Escribir Detalles">
        </form>
    </section>
        
        
        </>

    );




}