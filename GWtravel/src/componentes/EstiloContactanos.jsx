
/*PRESENTA ERRORES POR MAS QUE LO CORRIJO SALEN ASÍ */

* {
    margin: 0;
    padding: 0;
}
header {
    position: relative;
    top: 0;
    width: 100%;
    height: 80px;
    background: rgba(0, 0, 0, 0.685);
    z-index: 3;
    transition: 0.7s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 3, 3, 0.233);
}
header.abajo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #717271c4; 
    z-index: 100; 
    transition: 1.5s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}
#cabecera a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 16pt;
    margin-left: 20px;
    font-weight: 600;
    color: #ffffff;
}

.img-logo {
    width: 68px;
    padding: 0 10px;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap:wrap;
}

nav ul li {
    position: relative;
}

nav ul li a {
    text-decoration: none;
    color: #ffffff;
    margin: 0px 10px;
    padding: 5px;
    font-size: 13pt;
    font-family: georgia;
    font-weight: 600;
    display: block;
}

nav ul li a:hover {
    background-color: #168181;
    border-radius: 4px;
    color: #ffffff;
}

nav ul li .submenu,
nav ul li .submenu-derecha {
    display: none;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 5px 0;
    border-radius: 5px;
    background: rgba(45, 46, 46, 0.61);
    box-shadow: 0 2px 4px rgba(0,0,0,0.6);
    z-index: 1000;
}

nav ul li:hover .submenu,
nav ul li .submenu li:hover{
    display: block;
    width: 128px;
}



.cuerpo{
    height: 100px;
}
.banner {
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;
}
.banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
}
.Titulo {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px 20px;
    border-radius: 5px;
    width: 400px;
    height: auto;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}
h1 {
    font-size: 25px;
    color: black;
}

.Formulario{
    text-align: center;
    height: 713px;
    padding: 20px;
    background-image: url(https://th.bing.com/th/id/R.ec8895a96ac187a69e40668af36df734?rik=kB6I8%2bd0xx4X3Q&pid=ImgRaw&r=0);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.Name-Last input{
    width: 600px;
    height: 40px;
    margin: 10px;
    border-radius: 8px;
}
.Num-Correo input{
    width: 285px;
    height: 40px;
    margin: 10px;
    border-radius: 8px;
}
.Hotel-Presu input{
    width: 285px;
    height: 40px;
    margin: 10px;
    border-radius: 8px;
}
.Pie input{
    width: 180px;
    height: 40px;
    margin: 10px;
    border-radius: 8px;
}
.Mensaje input{
    width: 500px;
    height: 200px;
    margin: 10px;
    border-radius: 8px;
}

footer{
    position: relative;
    display: flex;
    background-color: #168181d7;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    margin-top: 30px;
    background-image: url('../menuFooter/imagenes/fondofooter.png'); 
    background-size: cover;
    background-position: center;
    z-index: 1;
    overflow: hidden;
}
footer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.61);
    z-index: 2;
}
#arriba, .linea, #final {
    position: relative;
    z-index: 3;
}

#arriba{
    display: flex;
    margin: 10px 30px;
    padding: 20px 0;
}
.logo-footer{
    width: 25%;
}

#arriba .f-izquierdo{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.f-izquierdo p{
    text-align: justify;
    color: #fffefe;
}
.f-izquierdo a{
    display: flex;
    justify-content: center;
    align-items:center;
    text-decoration: none;
    font-size: 13pt;
    font-family: Georgia;
    font-weight: 600;
    color: #ffffff;
    width: 90%;
}
#arriba .f-centro{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.f-centro ul li{
    list-style-type: none;
    color: #ffffff;
    padding: 3px;
}
.f-centro ul li a{
    color: #ffffff;
    font-size: 12pt;
    text-decoration: none;
}
.f-centro ul li ul li{
    list-style-type: circle;
    margin-left: 15px;
}
.f-centro ul li a:hover{
    color: #1dacff;
}
.linea{
    width: 100%;
    margin: 10px 0;
}
#final{
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    margin: 10px;
}
.pie{
    font-size: 10pt;
    color: #e2ebf0;
}